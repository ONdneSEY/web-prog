<?php
//phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- included template file.
/**
 * The template for displaying admin navigation.
 *
 * @date    27/3/20
 * @since   ACF 5.9.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $submenu, $submenu_file, $plugin_page, $acf_page_title;

// Setup default vars and generate array of navigation items.
$parent_slug    = 'edit.php?post_type=acf-field-group';
$core_tabs      = array();
$acf_more_items = array();
$more_items     = array();

// Hardcoded since future ACF post types will likely live in the "More" menu.
$core_tabs_classes      = array( 'acf-field-group', 'acf-post-type', 'acf-taxonomy' );
$acf_more_items_classes = array( 'acf-ui-options-page', 'acf-tools', 'acf-settings-updates' );

if ( isset( $submenu[ $parent_slug ] ) ) {
	foreach ( $submenu[ $parent_slug ] as $i => $sub_item ) {

		// Check user can access page.
		if ( ! current_user_can( $sub_item[1] ) ) {
			continue;
		}

		// Define tab.
		$menu_item = array(
			'text' => $sub_item[0],
			'url'  => $sub_item[2],
		);

		// Convert submenu slug "test" to "$parent_slug&page=test".
		if ( ! strpos( $sub_item[2], '.php' ) ) {
			$menu_item['url']   = add_query_arg( array( 'page' => $sub_item[2] ), $parent_slug );
			$menu_item['class'] = $sub_item[2];
		} else {
			// Build class from URL.
			$menu_item['class'] = str_replace( 'edit.php?post_type=', '', $sub_item[2] );
		}

		// Detect active state.
		if ( $submenu_file === $sub_item[2] || $plugin_page === $sub_item[2] ) {
			$menu_item['is_active'] = true;
		}

		// Handle "Add New" versions of edit page.
		if ( str_replace( 'edit', 'post-new', $sub_item[2] ) === $submenu_file ) {
			$menu_item['is_active'] = true;
		}

		// Organize the menu items.
		if ( in_array( $menu_item['class'], $core_tabs_classes, true ) ) {
			// Main ACF tabs.
			$core_tabs[] = $menu_item;

			// Add post types & taxonomies to the more menu as well so we can show them there on smaller screens.
			if ( in_array( $menu_item['class'], array( 'acf-post-type', 'acf-taxonomy' ), true ) ) {
				$acf_more_items[] = $menu_item;
			}
		} elseif ( in_array( $menu_item['class'], $acf_more_items_classes, true ) ) {
			// ACF tabs moved to the "More" menu.
			$acf_more_items[] = $menu_item;
		} else {
			// Third party tabs placed into the "More" menu.
			$more_items[] = $menu_item;
		}
	}
}

/**
 * Filters the admin navigation more items.
 *
 * @since   ACF 5.9.0
 *
 * @param   array $more_items The array of navigation tabs.
 */
$more_items = apply_filters( 'acf/admin/toolbar', $more_items );

// Bail early if set to false.
if ( $core_tabs === false ) {
	return;
}

/**
 * Helper function for looping over the provided menu items
 * and echoing out the necessary markup.
 *
 * @since ACF 6.2
 *
 * @param array  $menu_items An array of menu items to print.
 * @param string $section    The section being printed.
 * @return void
 */
function acf_print_menu_section( $menu_items, $section = '' ) {
	// Bail if no menu items.
	if ( ! is_array( $menu_items ) || empty( $menu_items ) ) {
		return;
	}

	$section_html = '';

	foreach ( $menu_items as $menu_item ) {
		$class      = ! empty( $menu_item['class'] ) ? $menu_item['class'] : $menu_item['text'];
		$target     = ! empty( $menu_item['target'] ) ? ' target="' . esc_attr( $menu_item['target'] ) . '"' : '';
		$aria_label = ! empty( $menu_item['aria-label'] ) ? ' aria-label="' . esc_attr( $menu_item['aria-label'] ) . '"' : '';
		$li_class   = ! empty( $menu_item['li_class'] ) ? esc_attr( $menu_item['li_class'] ) : '';

		$html = sprintf(
			'<a class="acf-tab%s %s" href="%s"%s%s><i class="acf-icon"></i>%s</a>',
			! empty( $menu_item['is_active'] ) ? ' is-active' : '',
			'acf-header-tab-' . esc_attr( acf_slugify( $class ) ),
			esc_url( $menu_item['url'] ),
			$target,
			$aria_label,
			acf_esc_html( $menu_item['text'] )
		);

		if ( 'core' !== $section ) {
			if ( $li_class === '' ) {
				$html = '<li>' . $html . '</li>';
			} else {
				$html = sprintf( '<li class="%s">', $li_class ) . $html . '</li>';
			}
		}

		$section_html .= $html;
	}

	echo $section_html; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- safely built and escaped HTML above.
}
?>
<div class="acf-admin-toolbar">
	<div class="acf-admin-toolbar-inner">
		<div class="acf-nav-wrap">
			<a href="<?php echo esc_url( admin_url( 'edit.php?post_type=acf-field-group' ) ); ?>" class="acf-logo" aria-label="<?php esc_attr_e( 'Edit SCF Field Groups', 'secure-custom-fields' ); ?>">
				<img src="<?php echo esc_url( acf_get_url( 'assets/images/scf-logo.svg' ) ); ?>" alt="<?php esc_attr_e( 'Secure Custom Fields logo', 'secure-custom-fields' ); ?>">
			</a>

			<h2><?php echo esc_html( acf_get_setting( 'name' ) ); ?></h2>
			<?php acf_print_menu_section( $core_tabs, 'core' ); ?>
			<?php if ( $acf_more_items || $more_items ) { ?>
				<div class="acf-more acf-header-tab-acf-more" tabindex="0">
					<span class="acf-tab acf-more-tab"><i class="acf-icon acf-icon-more"></i><?php esc_html_e( 'More', 'secure-custom-fields' ); ?> <i class="acf-icon acf-icon-dropdown"></i></span>
					<ul>
						<?php
						if ( $acf_more_items ) {
							if ( $more_items ) {
								echo '<li class="acf-more-section-header"><span class="acf-tab acf-tab-header">ACF</span></li>';
							}
							acf_print_menu_section( $acf_more_items, 'acf' );
						}
						if ( $more_items ) {
							echo '<li class="acf-more-section-header"><span class="acf-tab acf-tab-header">' . esc_html__( 'Other', 'secure-custom-fields' ) . ' </span></li>';
							acf_print_menu_section( $more_items );
						}
						?>
					</ul>
				</div>
			<?php } ?>
		</div>
	</div>
</div>

<?php

global $plugin_page;
$screen = get_current_screen();

if ( ! in_array( $screen->id, acf_get_internal_post_types(), true ) ) {
	if ( 'acf-tools' === $plugin_page ) {
		$acf_page_title = __( 'Tools', 'secure-custom-fields' );
	} elseif ( 'scf-beta-features' === $plugin_page ) {
		$acf_page_title = __( 'Beta Features', 'secure-custom-fields' );
	}
	acf_get_view( 'global/header' );
}
?>
