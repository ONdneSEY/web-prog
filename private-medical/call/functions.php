<?php
class Simple_Nav_Walker extends Walker_Nav_Menu {
    public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $output .= '<a href="' . esc_url($item->url) . '" class="li">' . esc_html($item->title) . '</a>';
    }
}

function register_private_medical_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'private-medical'),
        'mobile'  => __('Mobile Menu', 'private-medical')
    ));
}
add_action('init', 'register_private_medical_menus');

// Додавання кастомних полів для статистики
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Theme Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug'  => 'theme-settings',
        'capability' => 'edit_posts',
        'redirect'   => false
    ));
}

function create_member_stories_post_type() {
    register_post_type('member_stories',
        array(
            'labels' => array(
                'name' => __('Member Stories'),
                'singular_name' => __('Member Story')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail')
        )
    );
}
add_action('init', 'create_member_stories_post_type');

function private_medical_styles() {
    // Підключення основного стилівого файлу теми
    wp_enqueue_style('private-medical-style', get_stylesheet_uri());
    
    // Підключення Google Fonts
    wp_enqueue_style('private-medical-fonts', 'https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&display=swap');
    
    // Підключення додаткових CSS файлів (якщо є)
    // wp_enqueue_style('custom-css', get_template_directory_uri() . '/css/custom.css');
}
add_action('wp_enqueue_scripts', 'private_medical_styles');

function private_medical_scripts() {
    // Підключення jQuery (вже входить в WordPress)
    wp_enqueue_script('jquery');
    
    // Підключення ваших скриптів
    wp_enqueue_script('header-js', get_template_directory_uri() . '/js/header.js', array('jquery'), '1.0', true);
    wp_enqueue_script('carusel-js', get_template_directory_uri() . '/js/carusel.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'private_medical_scripts');
?>

