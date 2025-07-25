<?php

/**
 * Returns a WordPress object type.
 *
 * @date    1/4/20
 * @since   ACF 5.9.0
 *
 * @param   string $object_type    The object type (post, term, user, etc).
 * @param   string $object_subtype Optional object subtype (post type, taxonomy).
 * @return  object
 */
function acf_get_object_type( $object_type, $object_subtype = '' ) {
	$props = array(
		'type'    => $object_type,
		'subtype' => $object_subtype,
		'name'    => '',
		'label'   => '',
		'icon'    => '',
	);

	// Set unique identifier as name.
	if ( $object_subtype ) {
		$props['name'] = "$object_type/$object_subtype";
	} else {
		$props['name'] = $object_type;
	}

	// Set label and icon.
	switch ( $object_type ) {
		case 'post':
			if ( $object_subtype ) {
				$post_type = get_post_type_object( $object_subtype );
				if ( $post_type ) {
					$props['label'] = $post_type->labels->name;
					if ( is_string( $post_type->menu_icon ) && ! preg_match( '/^[\w\-]+$/', $post_type->menu_icon ) ) {
						$post_type->menu_icon = false;
					}
					$props['icon'] = acf_with_default( $post_type->menu_icon, 'dashicons-admin-post' );
				} else {
					return false;
				}
			} else {
				$props['label'] = __( 'Posts', 'secure-custom-fields' );
				$props['icon']  = 'dashicons-admin-post';
			}
			break;
		case 'term':
			if ( $object_subtype ) {
				$taxonomy = get_taxonomy( $object_subtype );
				if ( $taxonomy ) {
					$props['label'] = $taxonomy->labels->name;
				} else {
					return false;
				}
			} else {
				$props['label'] = __( 'Taxonomies', 'secure-custom-fields' );
			}
			$props['icon'] = 'dashicons-tag';
			break;
		case 'attachment':
			$props['label'] = __( 'Attachments', 'secure-custom-fields' );
			$props['icon']  = 'dashicons-admin-media';
			break;
		case 'comment':
			$props['label'] = __( 'Comments', 'secure-custom-fields' );
			$props['icon']  = 'dashicons-admin-comments';
			break;
		case 'widget':
			$props['label'] = __( 'Widgets', 'secure-custom-fields' );
			$props['icon']  = 'dashicons-screenoptions';
			break;
		case 'menu':
			$props['label'] = __( 'Menus', 'secure-custom-fields' );
			$props['icon']  = 'dashicons-admin-appearance';
			break;
		case 'menu_item':
			$props['label'] = __( 'Menu items', 'secure-custom-fields' );
			$props['icon']  = 'dashicons-admin-appearance';
			break;
		case 'user':
			$props['label'] = __( 'Users', 'secure-custom-fields' );
			$props['icon']  = 'dashicons-admin-users';
			break;
		case 'option':
			$props['label'] = __( 'Options', 'secure-custom-fields' );
			$props['icon']  = 'dashicons-admin-generic';
			break;
		case 'block':
			$props['label'] = __( 'Blocks', 'secure-custom-fields' );
			$props['icon']  = 'dashicons-block-default';
			break;
		default:
			return false;
	}

	// Convert to object.
	$object = (object) $props;

	/**
	 * Filters the object type.
	 *
	 * @date    6/4/20
	 * @since   ACF 5.9.0
	 *
	 * @param   object $object The object props.
	 * @param   string $object_type The object type (post, term, user, etc).
	 * @param   string $object_subtype Optional object subtype (post type, taxonomy).
	 */
	return apply_filters( 'acf/get_object_type', $object, $object_type, $object_subtype );
}

/**
 * Decodes a post_id value such as 1 or "user_1" into an array containing the type and ID.
 *
 * @date    25/1/19
 * @since   ACF 5.7.11
 *
 * @param   (int|string) $post_id The post id.
 * @return  array
 */
function acf_decode_post_id( $post_id = 0 ) {
	$type = '';
	$id   = 0;

	// Interpret numeric value (123).
	if ( is_numeric( $post_id ) ) {
		$type = 'post';
		$id   = $post_id;

		// Interpret string value ("user_123" or "option").
	} elseif ( is_string( $post_id ) ) {
		$i = strrpos( $post_id, '_' );
		if ( $i > 0 ) {
			$type = substr( $post_id, 0, $i );
			$id   = substr( $post_id, $i + 1 );
		} else {
			$type = $post_id;
			$id   = '';
		}

		// Handle incorrect param type.
	} else {
		return compact( 'type', 'id' );
	}

	// Validate props based on param format.
	$format = $type . '_' . ( is_numeric( $id ) ? '%d' : '%s' );
	switch ( $format ) {
		case 'post_%d':
			$type = 'post';
			$id   = absint( $id );
			break;
		case 'term_%d':
			$type = 'term';
			$id   = absint( $id );
			break;
		case 'attachment_%d':
			$type = 'post';
			$id   = absint( $id );
			break;
		case 'comment_%d':
			$type = 'comment';
			$id   = absint( $id );
			break;
		case 'widget_%s':
		case 'widget_%d':
			$type = 'option';
			$id   = $post_id;
			break;
		case 'menu_%d':
			$type = 'term';
			$id   = absint( $id );
			break;
		case 'menu_item_%d':
			$type = 'post';
			$id   = absint( $id );
			break;
		case 'user_%d':
			$type = 'user';
			$id   = absint( $id );
			break;
		case 'block_%s':
		case 'block_%d':
			$type = 'block';
			$id   = $post_id;
			break;
		case 'option_%s':
			$type = 'option';
			$id   = $post_id;
			break;
		case 'blog_%d':
		case 'site_%d':
			// Allow backwards compatibility for custom taxonomies.
			$type = taxonomy_exists( $type ) ? 'term' : 'blog';
			$id   = absint( $id );
			break;
		case 'woo_order_%d':
			$type = 'woo_order';
			$id   = absint( $id );
			break;
		default:
			// Check for taxonomy name.
			if ( taxonomy_exists( $type ) && is_numeric( $id ) ) {
				$type = 'term';
				$id   = absint( $id );
				break;
			}

			// Treat unknown post_id format as an option.
			$type = 'option';
			$id   = $post_id;
			break;
	}

	/**
	 * Filters the decoded post_id information.
	 *
	 * @date    25/1/19
	 * @since   ACF 5.7.11
	 *
	 * @param   array $props An array containing "type" and "id" information.
	 * @param   (int|string) $post_id The post id.
	 */
	return apply_filters( 'acf/decode_post_id', compact( 'type', 'id' ), $post_id );
}

/**
 * Determine the REST base for a post type or taxonomy object. Note that this is not intended for use
 * with term or post objects but is, instead, to be used with the underlying WP_Post_Type and WP_Taxonomy
 * instances.
 *
 * @param WP_Post_Type|WP_Taxonomy $type_object
 * @return string|null
 */
function acf_get_object_type_rest_base( $type_object ) {
	if ( $type_object instanceof WP_Post_Type || $type_object instanceof WP_Taxonomy ) {
		return ! empty( $type_object->rest_base ) ? $type_object->rest_base : $type_object->name;
	}

	return null;
}

/**
 * Extract the ID of a given object/array. This supports all expected types handled by our update_fields() and
 * load_fields() callbacks.
 *
 * @param WP_Post|WP_User|WP_Term|WP_Comment|array $object
 * @return integer|mixed|null
 */
function acf_get_object_id( $object ) {
	if ( is_object( $object ) ) {
		switch ( get_class( $object ) ) {
			case WP_User::class:
			case WP_Post::class:
				return (int) $object->ID;
			case WP_Term::class:
				return (int) $object->term_id;
			case WP_Comment::class:
				return (int) $object->comment_ID;
		}
	} elseif ( isset( $object['id'] ) ) {
		return (int) $object['id'];
	} elseif ( isset( $object['ID'] ) ) {
		return (int) $object['ID'];
	}

	return null;
}
