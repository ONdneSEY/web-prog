<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div class="content">
        <div class="menu-header">
            <div class="second-bg menu-he">
                <div class="elem-left">
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <img class="logo" src="<?php echo esc_url(get_template_directory_uri()); ?>/images/logo/logo.png" alt="<?php bloginfo('name'); ?>">
                    </a>
                </div>
                <div class="elem-right">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container'      => false,
                        'items_wrap'     => '<ul>%3$s</ul>',
                        'walker'         => new Simple_Nav_Walker()
                    ));
                    ?>

                    <div class="button">
                        <p>Membership Inquiry</p>
                        <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/arrow.png" alt="">
                    </div>

                    <div class="drop-ul">
                        <div class="logo">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="menu bg-blue">
                            <div class="bg-grid">
                                <div class="logo-box">
                                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/logo/logo.png" alt="<?php bloginfo('name'); ?>" class="logo">
                                    <div class="close">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                                <?php
                                wp_nav_menu(array(
                                    'theme_location' => 'mobile',
                                    'container'      => false,
                                    'items_wrap'     => '<ul>%3$s</ul>'
                                ));
                                ?>

                                <div class="button">
                                    <p>Membership Inquiry</p>
                                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/arrow.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header>
            <div class="header-main">
                <div class="img-center">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/Untitled_Artwork 5_White1.png" alt="" class="img1">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/Untitled_Artwork 5_White2.png" alt="" class="img2">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/Untitled_Artwork 5_White3.png" alt="" class="img3">
                </div>

                <div class="signature">
                    <p>Pioneering private medicine since 2002</p>
                </div>

                <div class="bg-header">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/bg/main-header.png" alt="">
                </div>
            </div>
        </header>
        <div id="breakpoint"></div>