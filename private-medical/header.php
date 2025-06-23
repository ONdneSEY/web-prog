<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet">
    <?php wp_head(); ?>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <div class="content">
        <div class="menu-header">
            <div class="second-bg menu-he">
                <div class="elem-left">
                    <?php 
                    $logo = get_field('logo');
                    if ($logo) : ?>
                        <a href="/wordpress/">
                            <img src="<?php echo esc_url($logo); ?>" alt="Privet Medical">
                        </a> 
                    <?php endif; ?>
                </div>
                <div class="elem-right">
                    <?php

                        $menu = wp_nav_menu( array(
                            'menu_class'        => 'sf-menu', // класс элемента <ul>
                            'menu_id'           => 'nav', // id элемента <ul>
                            'container'         => false, // тег контейнера или false, если контейнер не нужен
                            'fallback_cb'       => 'wp_page_menu', // колбэк функция, если меню не существует
                            'echo'              => false, // вывести или вернуть
                            'theme_location'    => 'main-menu', // область меню
                            'items_wrap'        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                            'item_spacing'      => 'preserve',
                        ));

                        if ($menu) : ?>

                        <?php echo $menu; ?>
                        <?php endif; ?>


                    <?php 
                        $button = get_field('button');
                        if ($button) : ?>
                            <div class="button">
                                <p><?php echo esc_html($button['text']); ?></p>
                                <img src="<?php echo esc_url($button['arrow']); ?>" alt="">
                            </div>
                        <?php endif; ?>

                    <div class="drop-ul">
                        <div class="logo">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="menu bg-blue">
                            <div class="bg-grid">
                                <div class="">
                                    <div class="logo-box">
                                    <?php if ($logo) : ?>
                                        <img src="<?php echo esc_url($logo); ?>" alt="">
                                    <?php endif; ?>
                                    <div class="close">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <?php

                                $menu = wp_nav_menu( array(
                                    'menu_class'        => 'sf-menu', // класс элемента <ul>
                                    'menu_id'           => 'nav', // id элемента <ul>
                                    'container'         => false, // тег контейнера или false, если контейнер не нужен
                                    'fallback_cb'       => 'wp_page_menu', // колбэк функция, если меню не существует
                                    'echo'              => false, // вывести или вернуть
                                    'theme_location'    => 'drop-main-nemu', // область меню
                                    'items_wrap'        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                                    'item_spacing'      => 'preserve',
                                ));

                                if ($menu) : ?>

                                <?php echo $menu; ?>
                                <?php endif; ?>
                                
                                <?php 
                                    $button = get_field('button');
                                    if ($button) : ?>
                                        <div class="button">
                                            <p><?php echo esc_html($button['text']); ?></p>
                                           <img src="<?php echo esc_url($button['arrow']); ?>" alt="">
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>