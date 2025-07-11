<?php

if ( ! class_exists( 'acf_field_radio' ) ) :

	class acf_field_radio extends acf_field {


		/**
		 * This function will setup the field type data
		 *
		 * @type    function
		 * @date    5/03/2014
		 * @since   ACF 5.0.0
		 *
		 * @param   n/a
		 * @return  n/a
		 */
		function initialize() {

			// vars
			$this->name          = 'radio';
			$this->label         = __( 'Radio Button', 'secure-custom-fields' );
			$this->category      = 'choice';
			$this->description   = __( 'A group of radio button inputs that allows the user to make a single selection from values that you specify.', 'secure-custom-fields' );
			$this->preview_image = acf_get_url() . '/assets/images/field-type-previews/field-preview-radio-button.png';
			$this->doc_url       = 'https://developer.wordpress.org/secure-custom-fields/features/fields/radio/';
			$this->tutorial_url  = 'https://developer.wordpress.org/secure-custom-fields/features/fields/radio/radio-tutorial/';
			$this->defaults      = array(
				'layout'            => 'vertical',
				'choices'           => array(),
				'default_value'     => '',
				'other_choice'      => 0,
				'save_other_choice' => 0,
				'allow_null'        => 0,
				'return_format'     => 'value',
			);
		}


		/**
		 * Create the HTML interface for your field
		 *
		 * @param   $field (array) the $field being rendered
		 *
		 * @type    action
		 * @since   ACF 3.6
		 * @date    23/01/13
		 *
		 * @param   $field (array) the $field being edited
		 * @return  n/a
		 */
		function render_field( $field ) {

			// vars
			$e  = '';
			$ul = array(
				'class'             => 'acf-radio-list',
				'data-allow_null'   => $field['allow_null'],
				'data-other_choice' => $field['other_choice'],
			);

			// append to class
			$ul['class'] .= ' ' . ( $field['layout'] == 'horizontal' ? 'acf-hl' : 'acf-bl' );
			$ul['class'] .= ' ' . $field['class'];

			// Determine selected value.
			$value = (string) $field['value'];

			// 1. Selected choice.
			if ( isset( $field['choices'][ $value ] ) ) {
				$checked = (string) $value;

				// 2. Custom choice.
			} elseif ( $field['other_choice'] && $value !== '' ) {
				$checked = 'other';

				// 3. Empty choice.
			} elseif ( $field['allow_null'] ) {
				$checked = '';

				// 4. Default to first choice.
			} else {
				$checked = (string) key( $field['choices'] );
			}

			// other choice
			$other_input = false;
			if ( $field['other_choice'] ) {

				// Define other input attrs.
				$other_input = array(
					'type'     => 'text',
					'name'     => $field['name'],
					'value'    => '',
					'disabled' => 'disabled',
					'class'    => 'acf-disabled',
				);

				// Select other choice if value is not a valid choice.
				if ( $checked === 'other' ) {
					unset( $other_input['disabled'] );
					$other_input['value'] = $field['value'];
				}

				// Ensure an 'other' choice is defined.
				if ( ! isset( $field['choices']['other'] ) ) {
					$field['choices']['other'] = '';
				}
			}

			// Bail early if no choices.
			if ( empty( $field['choices'] ) ) {
				return;
			}

			// Hidden input.
			$e .= acf_get_hidden_input( array( 'name' => $field['name'] ) );

			// Open <ul>.
			$e .= '<ul ' . acf_esc_attrs( $ul ) . '>';

			// Loop through choices.
			foreach ( $field['choices'] as $value => $label ) {
				$is_selected = false;

				// Ensure value is a string.
				$value = (string) $value;

				// Define input attrs.
				$attrs = array(
					'type'  => 'radio',
					'id'    => sanitize_title( $field['id'] . '-' . $value ),
					'name'  => $field['name'],
					'value' => $value,
				);

				// Check if selected.
				if ( esc_attr( $value ) === esc_attr( $checked ) ) {
					$attrs['checked'] = 'checked';
					$is_selected      = true;
				}

				// Check if is disabled.
				if ( isset( $field['disabled'] ) && acf_in_array( $value, $field['disabled'] ) ) {
					$attrs['disabled'] = 'disabled';
				}

				// Additional HTML (the "Other" input).
				$additional_html = '';
				if ( $value === 'other' && $other_input ) {
					$additional_html = ' ' . acf_get_text_input( $other_input );
				}

				// append
				$e .= '<li><label' . ( $is_selected ? ' class="selected"' : '' ) . '><input ' . acf_esc_attrs( $attrs ) . '/>' . acf_esc_html( $label ) . '</label>' . $additional_html . '</li>';
			}

			// Close <ul>.
			$e .= '</ul>';

			// Output HTML.
			echo $e; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped per attribute above.
		}


		/**
		 * Create extra options for your field. This is rendered when editing a field.
		 * The value of $field['name'] can be used (like bellow) to save extra data to the $field
		 *
		 * @type    action
		 * @since   ACF 3.6
		 * @date    23/01/13
		 *
		 * @param   $field  - an array holding all the field's data
		 */
		function render_field_settings( $field ) {
			// Encode choices (convert from array).
			$field['choices'] = acf_encode_choices( $field['choices'] );

			acf_render_field_setting(
				$field,
				array(
					'label'        => __( 'Choices', 'secure-custom-fields' ),
					'instructions' => __( 'Enter each choice on a new line.', 'secure-custom-fields' ) . '<br />' . __( 'For more control, you may specify both a value and label like this:', 'secure-custom-fields' ) . '<br /><span class="acf-field-setting-example">' . __( 'red : Red', 'secure-custom-fields' ) . '</span>',
					'type'         => 'textarea',
					'name'         => 'choices',
				)
			);

			acf_render_field_setting(
				$field,
				array(
					'label'        => __( 'Default Value', 'secure-custom-fields' ),
					'instructions' => __( 'Appears when creating a new post', 'secure-custom-fields' ),
					'type'         => 'text',
					'name'         => 'default_value',
				)
			);

			acf_render_field_setting(
				$field,
				array(
					'label'        => __( 'Return Value', 'secure-custom-fields' ),
					'instructions' => __( 'Specify the returned value on front end', 'secure-custom-fields' ),
					'type'         => 'radio',
					'name'         => 'return_format',
					'layout'       => 'horizontal',
					'choices'      => array(
						'value' => __( 'Value', 'secure-custom-fields' ),
						'label' => __( 'Label', 'secure-custom-fields' ),
						'array' => __( 'Both (Array)', 'secure-custom-fields' ),
					),
				)
			);
		}

		/**
		 * Renders the field settings used in the "Validation" tab.
		 *
		 * @since ACF 6.0
		 *
		 * @param array $field The field settings array.
		 * @return void
		 */
		function render_field_validation_settings( $field ) {
			acf_render_field_setting(
				$field,
				array(
					'label'        => __( 'Allow Null', 'secure-custom-fields' ),
					'instructions' => '',
					'name'         => 'allow_null',
					'type'         => 'true_false',
					'ui'           => 1,
				)
			);

			acf_render_field_setting(
				$field,
				array(
					'label'        => __( 'Allow Other Choice', 'secure-custom-fields' ),
					'name'         => 'other_choice',
					'type'         => 'true_false',
					'ui'           => 1,
					'instructions' => __( "Add 'other' choice to allow for custom values", 'secure-custom-fields' ),
				)
			);

			acf_render_field_setting(
				$field,
				array(
					'label'        => __( 'Save Other Choice', 'secure-custom-fields' ),
					'name'         => 'save_other_choice',
					'type'         => 'true_false',
					'ui'           => 1,
					'instructions' => __( "Save 'other' values to the field's choices", 'secure-custom-fields' ),
					'conditions'   => array(
						'field'    => 'other_choice',
						'operator' => '==',
						'value'    => 1,
					),
				)
			);
		}

		/**
		 * Renders the field settings used in the "Presentation" tab.
		 *
		 * @since ACF 6.0
		 *
		 * @param array $field The field settings array.
		 * @return void
		 */
		function render_field_presentation_settings( $field ) {
			acf_render_field_setting(
				$field,
				array(
					'label'        => __( 'Layout', 'secure-custom-fields' ),
					'instructions' => '',
					'type'         => 'radio',
					'name'         => 'layout',
					'layout'       => 'horizontal',
					'choices'      => array(
						'vertical'   => __( 'Vertical', 'secure-custom-fields' ),
						'horizontal' => __( 'Horizontal', 'secure-custom-fields' ),
					),
				)
			);
		}

		/**
		 * This filter is applied to the $field before it is saved to the database
		 *
		 * @type    filter
		 * @since   ACF 3.6
		 * @date    23/01/13
		 *
		 * @param   $field - the field array holding all the field options
		 * @param   $post_id - the field group ID (post_type = acf)
		 *
		 * @return  $field - the modified field
		 */
		function update_field( $field ) {

			// decode choices (convert to array)
			$field['choices'] = acf_decode_choices( $field['choices'] );

			// return
			return $field;
		}


		/**
		 * This filter is applied to the $value before it is updated in the db
		 *
		 * @type    filter
		 * @since   ACF 3.6
		 * @date    23/01/13
		 * @todo    Fix bug where $field was found via json and has no ID
		 *
		 * @param   $value - the value which will be saved in the database
		 * @param   $post_id - the post_id of which the value will be saved
		 * @param   $field - the field array holding all the field options
		 *
		 * @return  $value - the modified value
		 */
		function update_value( $value, $post_id, $field ) {

			// bail early if no value (allow 0 to be saved)
			if ( ! $value && ! is_numeric( $value ) ) {
				return $value;
			}

			// save_other_choice
			if ( $field['save_other_choice'] ) {

				// value isn't in choices yet
				if ( ! isset( $field['choices'][ $value ] ) ) {

					// get raw $field (may have been changed via repeater field)
					// if field is local, it won't have an ID
					$selector = $field['ID'] ? $field['ID'] : $field['key'];
					$field    = acf_get_field( $selector );

					// bail early if no ID (JSON only)
					if ( ! $field['ID'] ) {
						return $value;
					}

					// unslash (fixes serialize single quote issue)
					$value = wp_unslash( $value );

					// sanitize (remove tags)
					$value = sanitize_text_field( $value );

					// update $field
					$field['choices'][ $value ] = $value;

					// save
					acf_update_field( $field );
				}
			}

			// return
			return $value;
		}


		/**
		 * This filter is applied to the $value after it is loaded from the db
		 *
		 * @type    filter
		 * @since   ACF 5.2.9
		 * @date    23/01/13
		 *
		 * @param   $value - the value found in the database
		 * @param   $post_id - the post_id from which the value was loaded from
		 * @param   $field - the field array holding all the field options
		 *
		 * @return  $value - the value to be saved in te database
		 */
		function load_value( $value, $post_id, $field ) {

			// must be single value
			if ( is_array( $value ) ) {
				$value = array_pop( $value );
			}

			// return
			return $value;
		}


		/**
		 * This function will translate field settings
		 *
		 * @type    function
		 * @date    8/03/2016
		 * @since   ACF 5.3.2
		 *
		 * @param   $field (array)
		 * @return  $field
		 */
		function translate_field( $field ) {

			return acf_get_field_type( 'select' )->translate_field( $field );
		}


		/**
		 * This filter is applied to the $value after it is loaded from the db and before it is returned to the template
		 *
		 * @type    filter
		 * @since   ACF 3.6
		 * @date    23/01/13
		 *
		 * @param   $value (mixed) the value which was loaded from the database
		 * @param   $post_id (mixed) the post_id from which the value was loaded
		 * @param   $field (array) the field array holding all the field options
		 *
		 * @return  $value (mixed) the modified value
		 */
		function format_value( $value, $post_id, $field ) {

			return acf_get_field_type( 'select' )->format_value( $value, $post_id, $field );
		}

		/**
		 * Return the schema array for the REST API.
		 *
		 * @param array $field
		 * @return array
		 */
		function get_rest_schema( array $field ) {
			$schema = parent::get_rest_schema( $field );

			if ( isset( $field['default_value'] ) && '' !== $field['default_value'] ) {
				$schema['default'] = $field['default_value'];
			}

			// If other/custom choices are allowed, nothing else to do here.
			if ( ! empty( $field['other_choice'] ) ) {
				return $schema;
			}

			$schema['enum'] = acf_get_field_type( 'select' )->format_rest_choices( $field['choices'] );

			if ( ! empty( $field['allow_null'] ) ) {
				$schema['enum'][] = null;
			}

			return $schema;
		}
	}


	// initialize
	acf_register_field_type( 'acf_field_radio' );
endif; // class_exists check
