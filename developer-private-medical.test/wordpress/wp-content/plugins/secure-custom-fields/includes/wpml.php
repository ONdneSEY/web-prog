<?php
/**
 * ACF WPML Compatibility
 *
 * @package wordpress/secure-custom-fields
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'ACF_WPML_Compatibility' ) ) :

	/**
	 * ACF WPML Compatibility
	 *
	 * This class is used to add compatibility with WPML.
	 *
	 * @date    06/23/2012
	 * @since   ACF 3.1.8
	 */
	class ACF_WPML_Compatibility {

		/**
		 * Translation ID reference mapping.
		 *
		 * @var array Storage for translation ID references
		 */
		public $trid_ref = array();

		/**
		 * Sets up the class functionality.
		 *
		 * @date    23/06/12
		 * @since   ACF 3.1.8
		 *
		 * @return  void
		 */
		public function __construct() {

			// global
			global $sitepress;

			// update settings
			acf_update_setting( 'default_language', $sitepress->get_default_language() );
			acf_update_setting( 'current_language', $sitepress->get_current_language() );

			// localize data
			acf_localize_data(
				array(
					'language' => $sitepress->get_current_language(),
				)
			);

			// switch lang during AJAX action
			add_action( 'acf/verify_ajax', array( $this, 'verify_ajax' ) );

			// prevent 'acf-field' from being translated
			add_filter( 'get_translatable_documents', array( $this, 'get_translatable_documents' ) );

			// check if 'acf-field-group' is translatable
			if ( $this->is_translatable() ) {

				// actions
				add_action( 'acf/upgrade_500_field_group', array( $this, 'upgrade_500_field_group' ), 10, 2 );
				add_action( 'icl_make_duplicate', array( $this, 'icl_make_duplicate' ), 10, 4 );

				// filters
				add_filter( 'acf/settings/save_json', array( $this, 'settings_save_json' ) );
				add_filter( 'acf/settings/load_json', array( $this, 'settings_load_json' ) );
			}
		}

		/**
		 * Returns true if the acf-field-group post type is translatable.
		 * Also adds compatibility with ACF4 settings
		 *
		 * @date    10/04/2015
		 * @since   ACF 5.2.3
		 *
		 * @return  boolean
		 */
		public function is_translatable() {

			// global
			global $sitepress;

			// vars
			$post_types = $sitepress->get_setting( 'custom_posts_sync_option' );

			// return false if no post types
			if ( ! acf_is_array( $post_types ) ) {
				return false;
			}

			// prevent 'acf-field' from being translated
			if ( ! empty( $post_types['acf-field'] ) ) {
				$post_types['acf-field'] = 0;
				$sitepress->set_setting( 'custom_posts_sync_option', $post_types );
			}

			// when upgrading to version 5, review 'acf' setting
			// update 'acf-field-group' if 'acf' is translatable, and 'acf-field-group' does not yet exist
			if ( ! empty( $post_types['acf'] ) && ! isset( $post_types['acf-field-group'] ) ) {
				$post_types['acf-field-group'] = 1;
				$sitepress->set_setting( 'custom_posts_sync_option', $post_types );
			}

			// return true if acf-field-group is translatable
			if ( ! empty( $post_types['acf-field-group'] ) ) {
				return true;
			}

			// return
			return false;
		}

		/**
		 * Update the icl_translations table data when creating the field groups.
		 *
		 * @date    10/04/2015
		 * @since   ACF 5.2.3
		 *
		 * @param   array  $field_group The new field group array.
		 * @param   object $ofg         The old field group WP_Post object.
		 * @return  void
		 */
		public function upgrade_500_field_group( $field_group, $ofg ) {

			// global
			global $wpdb;

			// get translation rows (old acf4 and new acf5)
			$old_row = $wpdb->get_row(
				$wpdb->prepare(
					"SELECT * FROM {$wpdb->prefix}icl_translations WHERE element_type=%s AND element_id=%d",
					'post_acf',
					$ofg->ID
				),
				ARRAY_A
			);

			$new_row = $wpdb->get_row(
				$wpdb->prepare(
					"SELECT * FROM {$wpdb->prefix}icl_translations WHERE element_type=%s AND element_id=%d",
					'post_acf-field-group',
					$field_group['ID']
				),
				ARRAY_A
			);

			// bail early if no rows
			if ( ! $old_row || ! $new_row ) {
				return;
			}

			// create reference of old trid to new trid
			// trid is a simple int used to find associated objects
			if ( empty( $this->trid_ref ) ) {
				$this->trid_ref = array();
			}

			// update trid
			if ( isset( $this->trid_ref[ $old_row['trid'] ] ) ) {

				// this field group is a translation of another, update it's trid to match the previously inserted group
				$new_row['trid'] = $this->trid_ref[ $old_row['trid'] ];
			} else {

				// this field group is the first of it's translations, update the reference for future groups
				$this->trid_ref[ $old_row['trid'] ] = $new_row['trid'];
			}

			// update icl_translations
			// Row is created by WPML, and much easier to tweak it here due to the very complicated and nonsensical WPML logic
			$table        = "{$wpdb->prefix}icl_translations";
			$data         = array(
				'trid'          => $new_row['trid'],
				'language_code' => $old_row['language_code'],
			);
			$where        = array( 'translation_id' => $new_row['translation_id'] );
			$data_format  = array( '%d', '%s' );
			$where_format = array( '%d' );

			// allow source_language_code to equal NULL
			if ( $old_row['source_language_code'] ) {
				$data['source_language_code'] = $old_row['source_language_code'];
				$data_format[]                = '%s';
			}

			// update wpdb
			$result = $wpdb->update( $table, $data, $where, $data_format, $where_format );
		}

		/**
		 * Modifies the json path.
		 *
		 * @date    19/05/2014
		 * @since   ACF 5.0.0
		 *
		 * @param   string $path The json save path.
		 * @return  string
		 */
		public function settings_save_json( $path ) {

			// bail early if dir does not exist
			if ( ! wp_is_writable( $path ) ) {
				return $path;
			}

			// amend
			$path = untrailingslashit( $path ) . '/' . acf_get_setting( 'current_language' );

			// make dir if does not exist
			if ( ! file_exists( $path ) ) {
				mkdir( $path, 0777, true ); //phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_mkdir -- Allow legacy mkdir call as this may fire outside admin.
			}

			// return
			return $path;
		}

		/**
		 * Modifies the json path.
		 *
		 * @date    19/05/2014
		 * @since   ACF 5.0.0
		 *
		 * @param   array $paths The json save path.
		 * @return  string
		 */
		public function settings_load_json( $paths ) {

			// loop
			if ( $paths && is_array( $paths ) ) {
				foreach ( $paths as $i => $path ) {
					$paths[ $i ] = untrailingslashit( $path ) . '/' . acf_get_setting( 'current_language' );
				}
			}

			// return
			return $paths;
		}

		/**
		 * Duplicate the icl_translations row when duplicating a field group.
		 *
		 * @date    26/02/2014
		 * @since   ACF 5.0.0
		 *
		 * @param   int    $master_post_id The original post ID.
		 * @param   string $lang           The language code.
		 * @param   array  $postarr        The post data.
		 * @param   int    $id             The new post ID.
		 *
		 * @return  void
		 */
		public function icl_make_duplicate( $master_post_id, $lang, $postarr, $id ) {

			// bail early if not acf-field-group
			if ( 'acf-field-group' !== $postarr['post_type'] ) {
				return;
			}

			// update the lang
			acf_update_setting( 'current_language', $lang );

			// duplicate field group specifying the $post_id
			acf_duplicate_field_group( $master_post_id, $id );

			// always translate independently to avoid many many bugs!
			// - translation post gets a new key (post_name) when original post is saved
			// - local json creates new files due to changed key
			// phpcs:disable WordPress.NamingConventions.ValidVariableName.VariableNotSnakeCase -- Variable name is from WPML.
			global $iclTranslationManagement;
			$iclTranslationManagement->reset_duplicate_flag( $id );
			// phpcs:enable WordPress.NamingConventions.ValidVariableName.VariableNotSnakeCase
		}


		/**
		 * Sets the correct language during AJAX requests.
		 *
		 * @type    function
		 * @date    7/08/2015
		 * @since   ACF 5.2.3
		 *
		 * @return  void
		 */
		public function verify_ajax() {

			// phpcs:disable WordPress.Security.NonceVerification.Recommended -- Verified elsewhere.
			// set the language for this AJAX request
			// this will allow get_posts to work as expected (load posts from the correct language)
			if ( isset( $_REQUEST['lang'] ) ) {
				global $sitepress;
				$sitepress->switch_lang( sanitize_text_field( wp_unslash( $_REQUEST['lang'] ) ) );
			}
			// phpcs:enable WordPress.Security.NonceVerification.Recommended
		}

		/**
		 * Removes 'acf-field' from the available post types for translation.
		 *
		 * @type    function
		 * @date    17/8/17
		 * @since   ACF 5.6.0
		 *
		 * @param   array $icl_post_types The array of post types.
		 * @return  array
		 */
		public function get_translatable_documents( $icl_post_types ) {

			// unset
			unset( $icl_post_types['acf-field'] );

			// return
			return $icl_post_types;
		}
	}

	acf_new_instance( 'ACF_WPML_Compatibility' );
endif; // class_exists check
