<?php

add_action( 'wp_enqueue_scripts', 'vintage_add_scripts' ); 
function vintage_add_scripts() {

    wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css');

    wp_deregister_script( 'jQpuery' );
    wp_register_script( 'jpuery', get_template_directory_uri() . '/js/jQuery-3.7.1.js' );
    wp_enqueue_script( 'jpuery' );
    wp_register_script( 'jpuery-new', get_template_directory_uri() . '/js/jQuery-3.7.1.js' );

    wp_enqueue_script( "header", get_template_directory_uri() . '/js/header.js');
    wp_enqueue_script( "carusel", get_template_directory_uri() . '/js/carusel.js');

}