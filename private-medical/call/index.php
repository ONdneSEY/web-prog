<?php
/**
 * The main template file
 *
 * @package Private Medical
 */

get_header(); ?>

<div class="block1">
    <h2><?php the_title(); ?></h2>
    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/img/top-left.png" alt="" class="top-left">
    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/img/midel-right.png" alt="" class="midel-right">
    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/img/midel-left.png" alt="" class="midel-left">
    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/img/bottom-left.png" alt="" class="bottom-left">
</div>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
        <div class="m-right bg-blue">
            <div class="bg-grid">
                <div class="block2 p-inline">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    <?php endwhile; ?>
<?php endif; ?>

<!-- Карусель -->
<div class="carusel-wrap">
    <div class="carusel">
        <div class="carusel-content">
            <h2>What are you capable of when your health is no obstacle?</h2>

            <div class="img-wrap">
                <img id="imagen1" src="<?php echo esc_url(get_template_directory_uri()); ?>/images/img/bottom-left.png" alt="" class="imagn">
                <div class="signature">
                    <img id="imagen2" src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/carusel-signature-1.png" alt="">
                    <div class="row">
                        <img id="imagen3" src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/carusel-signature-2.png" alt="">
                        <img id="imagen4" src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/carusel-signature-3.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="point-wrap">
            <div class="point active" id="1"></div>
            <div class="point" id="2"></div>
            <div class="point" id="3"></div>
            <div class="point" id="4"></div>
            <div class="point" id="5"></div>
            <div class="point" id="6"></div>
            <div class="point" id="7"></div>
        </div>
    </div>
</div>

<!-- Додаткові блоки з вашої верстки -->
<div class="m-left bg-green">
    <div class="bg-grid">
        <div class="block2 block2-p p-inline">
            <div class="text-box type2">
                <p>Our Approach</p>
                <h3>Building relationships and delivering exceptional service to help you reach your healthcare goals.</h3>
            </div>

            <?php
            // Приклад виведення останніх 3 постів
            $args = array(
                'posts_per_page' => 3,
                'post_type'      => 'post'
            );
            $query = new WP_Query($args);
            
            if ($query->have_posts()) :
                while ($query->have_posts()) : $query->the_post();
            ?>
                    <div class="content-wrap right">
                        <div></div>
                        <div class="content-box">
                            <?php if (has_post_thumbnail()) : ?>
                                <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                            <?php endif; ?>
                            <div class="text-box">
                                <h3><?php the_title(); ?></h3>
                                <p><?php the_excerpt(); ?></p>
                            </div>
                        </div>
                    </div>
            <?php
                endwhile;
                wp_reset_postdata();
            endif;
            ?>

            <div class="button button-p">
                <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>">
                    <p>View All Articles</p>
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/icon/arrow.png" alt="">
                </a>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>