<div class="inform-wrap m-inline">
            <?php $inform_post_title = get_field('inform_post_title');
                if($inform_post_title) : ?>
                    <p class="title"><?php echo esc_html($inform_post_title); ?></p>
            <?php endif; ?>
            <div class="inform-box">
                <?php $inform_post = get_field('inform_post_1');
                if($inform_post) : ?>
                <!-- post 1 -->
                    <div class="element">
                        <p><?php echo esc_html($inform_post['text']); ?></p>
                        <img src="<?php echo esc_url($inform_post['img']); ?>" alt="">
                        <h3><?php echo esc_html($inform_post['headline_3']); ?></h3>
                        <a href="" class='button button-p'>
                            <p><?php echo esc_html($inform_post['inform_post_button']['button_text']); ?></p>
                            <img src="<?php echo esc_url($inform_post['inform_post_button']['arrow']); ?>" alt="">
                        </a>
                    </div>
                <?php endif; ?> 

                <?php $inform_post = get_field('inform_post_2');
                if($inform_post) : ?>
                <!-- post 2 -->
                    <div class="element">
                        <p><?php echo esc_html($inform_post['text']); ?></p>
                        <img src="<?php echo esc_url($inform_post['img']); ?>" alt="">
                        <h3><?php echo esc_html($inform_post['headline_3']); ?></h3>
                        <a href="" class='button button-p'>
                            <p><?php echo esc_html($inform_post['inform_post_button']['button_text']); ?></p>
                            <img src="<?php echo esc_url($inform_post['inform_post_button']['arrow']); ?>" alt="">
                        </a>
                    </div>
                <?php endif; ?> 

                <?php $inform_post = get_field('inform_post_3');
                if($inform_post) : ?>
                <!-- post 3 -->
                    <div class="element">
                        <p><?php echo esc_html($inform_post['text']); ?></p>
                        <img src="<?php echo esc_url($inform_post['img']); ?>" alt="">
                        <h3><?php echo esc_html($inform_post['headline_3']); ?></h3>
                        <a href="" class='button button-p'>
                            <p><?php echo esc_html($inform_post['inform_post_button']['button_text']); ?></p>
                            <img src="<?php echo esc_url($inform_post['inform_post_button']['arrow']); ?>" alt="">
                        </a>
                    </div>
                <?php endif; ?> 
            </div>
        </div>
        
<footer class="bg-blue">
            <div class="footer bg-grid p-inline">
                
                <?php $headline_3 = get_field('footer_headline_3');
                    if($headline_3) : ?>
                        <h3 class="title"><?php echo esc_html($headline_3); ?></h3>
                <?php endif; ?>

                <div class="search-wrap">
                    <input type="text" class="search" placeholder="Email address">

                    <?php $button = get_field('button_subscribe');
                        if ($button) : ?>
                            <div class="button button-p">
                                <p><?php echo esc_html($button['text']); ?></p>
                                <img src="<?php echo esc_url($button['arrow']); ?>" alt="">
                            </div>
                    <?php endif; ?>
                </div>

                <div class="wrap">
                    <div class="button-wrap">
                        <div>
                            <?php $button = get_field('button_inquiry');
                                if ($button) : ?>
                                    <a href="" class="button button-p">
                                        <p><?php echo esc_html($button['text']); ?></p>
                                        <img src="<?php echo esc_url($button['arrow']); ?>" alt="">
                                    </a>
                            <?php endif; ?>

                            <?php $button = get_field('button_login');
                                if ($button) : ?>
                                    <a href="" class="button button-p">
                                        <p><?php echo esc_html($button['text']); ?></p>
                                        <img src="<?php echo esc_url($button['arrow']); ?>" alt="">
                                    </a>
                            <?php endif; ?>
                        </div>
                        <p class="text-botton">© 2024 Private Medical</p>
                    </div>
                    <div class="list-wrap">

                    <?php

                        $menu = wp_nav_menu( array(
                            'menu_class'        => 'colum', // класс элемента <ul>
                            'menu_id'           => 'nav', // id элемента <ul>
                            'container'         => false, // тег контейнера или false, если контейнер не нужен
                            'fallback_cb'       => 'wp_page_menu', // колбэк функция, если меню не существует
                            'echo'              => false, // вывести или вернуть
                            'theme_location'    => 'footer-bottom-menu-1', // область меню
                            'items_wrap'        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                            'item_spacing'      => 'preserve',
                        ));

                        if ($menu) : ?>

                        <?php echo $menu; ?>
                        <?php endif; ?>

                        <?php
                        $menu = wp_nav_menu( array(
                            'menu_class'        => 'colum', // класс элемента <ul>
                            'menu_id'           => 'nav', // id элемента <ul>
                            'container'         => false, // тег контейнера или false, если контейнер не нужен
                            'fallback_cb'       => 'wp_page_menu', // колбэк функция, если меню не существует
                            'echo'              => false, // вывести или вернуть
                            'theme_location'    => 'footer-bottom-menu-2', // область меню
                            'items_wrap'        => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                            'item_spacing'      => 'preserve',
                        ));

                        if ($menu) : ?>

                        <?php echo $menu; ?>
                        <?php endif; ?>
                    
                    </div>

                    <p class="text-botton">© 2024 Private Medical</p>
                </div>
            </div>

        </footer>

        <div class="bg-filt"></div>
        <?php wp_footer(); ?>
    </div>
</body>
</html>