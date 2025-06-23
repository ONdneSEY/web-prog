<?php


function vintage_setup(){

    add_theme_support( 'menus' );


    register_nav_menus(
        array(
            'main-menu' => __( 'Main Menu' ),
            'drop-main-nemu' => __( 'Drop Main Menu' ),
            'footer-bottom-menu-1' => __( 'Footer Bottom Menu 1' ),
            'footer-bottom-menu-2' => __( 'Footer Bottom Menu 2' )
        )
    );
}

add_action( 'after_setup_theme', 'vintage_setup' );