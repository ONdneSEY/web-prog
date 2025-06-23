
<?php 
/*
Template Name: Home
*/ 
get_header();
?>
        <header>
            <div class="header-main">

                <?php $img_center = get_field('img_center');
                    if ($img_center) : ?>
                        <div class="img-center">
                            <img src="<?php echo esc_url($img_center['img1']); ?>" alt="" class="img1">
                            <img src="<?php echo esc_url($img_center['img2']); ?>" alt="" class="img2">
                            <img src="<?php echo esc_url($img_center['img3']); ?>" alt="" class="img3">
                        </div>
                    <?php endif; ?>



                <?php $signature = get_field('signature');
                    if ($signature) : ?>
                        <div class="signature">
                           <p><?php echo esc_html($signature); ?></p>
                        </div>
                    <?php endif; ?>

                <?php $bg_header = get_field('bg_header');
                    if ($bg_header) : ?>
                        <div class="bg-header">
                            <img src="<?php echo esc_url($bg_header); ?>" alt="">
                        </div>
                    <?php endif; ?>
            </div>
        </header>
        <div id="breakpoint"></div>

        <?php $block1 = get_field('block1');
            if ($block1) : ?>
                <div class="block1">
                    <h2><?php echo esc_html($block1['headline_2']); ?></h2>
                    <img src="<?php echo esc_url($block1['top_left']); ?>" alt="" class="top-left">
                    <img src="<?php echo esc_url($block1['midel_right']); ?>" alt="" class="midel-right">
                    <img src="<?php echo esc_url($block1['midel_left']); ?>" alt="" class="midel-left">
                    <img src="<?php echo esc_url($block1['bottom_left']); ?>" alt="" class="bottom-left">
                </div>
        <?php endif; ?>

        <div class="m-right bg-blue">
            <div class="bg-grid">
                <div class="block2 p-inline">
                    <?php $text_box = get_field('text_box');
                        if ($text_box) : ?>
                            <div class="text-box">
                                <p><?php echo esc_html($text_box['parag']); ?></p>
                                <h3><?php echo esc_html($text_box['headline_3']); ?></h3>
                            </div>
                    <?php endif; ?>

                    <?php $content_box = get_field('content_box_1');
                        if ($content_box) : ?>
                            <div class="content-wrap">
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $content_box_2 = get_field('content_box_2');
                        if ($content_box_2) : ?>
                            <div class="content-wrap">
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box_2['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box_2['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box_2['description']); ?></p>
                                    </div>
                                </div>

                                <?php $signature_box = get_field('signature_box');
                                    if ($signature_box) : ?>
                                    <div class="signature-box">
                                        <div class="label-box">
                                            <img src="<?php echo esc_url($signature_box['image']); ?>" alt="">
                                        </div>
                                        <div class="line"></div>
                                        <p class="comment"><?php echo esc_html($signature_box['comment']); ?></p>
                                    </div>
                                <?php endif; ?>
                            </div>
                    <?php endif; ?>

                    <?php $content_box = get_field('content_box_3');
                        if ($content_box) : ?>
                            <div class="content-wrap right">
                                <div></div>
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $content_box = get_field('content_box_4');
                        if ($content_box) : ?>
                            <div class="content-wrap right">
                                <div></div>
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $content_box = get_field('content_box_5');
                        if ($content_box) : ?>
                            <div class="content-wrap">
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $button_post_1 = get_field('button_post_1');
                        if ($button_post_1) : ?>
                            <div class="button">
                                <p><?php echo esc_html($button_post_1['text']); ?></p>
                                <img src="<?php echo esc_url($button_post_1['arrow']); ?>" alt="">
                            </div>
                    <?php endif; ?>


                    <?php $img = get_field('bottom_left');
                        if ($img) : ?>
                            <div class="bottom-left">
                                <img src="<?php echo esc_url($img); ?>" alt="">
                            </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <div class="carusel-wrap">
            <div class="carusel">
                <div class="carusel-content">
                    <?php $headlone_2 = get_field('headlone_2');
                    if ($headlone_2) : ?>
                           <h2><?php echo esc_html($headlone_2); ?></h2>
                    <?php endif; ?>

                    <?php $slide_1 = get_field('slide_1');
                        if ($slide_1) : ?>
                            <div class="img-wrap" data-slide="1">
                                <img id="imagen1" src="<?php echo esc_url($slide_1['slide_1_image']); ?>" alt="" class="imagn">
                                <div class="signature">
                                    <img id="imagen2" src="<?php echo esc_url($slide_1['slide_1_signature_1']); ?>" alt="">
                                    <div class="row">
                                        <img id="imagen3" src="<?php echo esc_url($slide_1['slide_1_signature_2']); ?>" alt="">
                                        <img id="imagen4" src="<?php echo esc_url($slide_1['slide_1_signature_3']); ?>" alt="">
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>
                    <?php $slide_2 = get_field('slide_2');
                        if ($slide_2) : ?>
                            <div class="img-wrap" data-slide="2">
                                <img id="imagen1" src="<?php echo esc_url($slide_2['slide_2_image']); ?>" alt="" class="imagn">
                                <div class="signature">
                                    <img id="imagen2" src="<?php echo esc_url($slide_2['slide_2_signature_1']); ?>" alt="">
                                    <div class="row">
                                        <img id="imagen3" src="<?php echo esc_url($slide_2['slide_2_signature_2']); ?>" alt="">
                                        <img id="imagen4" src="<?php echo esc_url($slide_2['slide_2_signature_3']); ?>" alt="">
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $slide_3 = get_field('slide_3');
                        if ($slide_3) : ?>
                            <div class="img-wrap" data-slide="3">
                                <img id="imagen1" src="<?php echo esc_url($slide_3['slide_3_image']); ?>" alt="" class="imagn">
                                <div class="signature">
                                    <img id="imagen2" src="<?php echo esc_url($slide_3['slide_3_signature_1']); ?>" alt="">
                                    <div class="row">
                                        <img id="imagen3" src="<?php echo esc_url($slide_3['slide_3_signature_2']); ?>" alt="">
                                        <img id="imagen4" src="<?php echo esc_url($slide_3['slide_3_signature_3']); ?>" alt="">
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $slide_4 = get_field('slide_4');
                        if ($slide_4) : ?>
                            <div class="img-wrap" data-slide="4">
                                <img id="imagen1" src="<?php echo esc_url($slide_4['slide_4_image']); ?>" alt="" class="imagn">
                                <div class="signature">
                                    <img id="imagen2" src="<?php echo esc_url($slide_4['slide_4_signature_1']); ?>" alt="">
                                    <div class="row">
                                        <img id="imagen3" src="<?php echo esc_url($slide_4['slide_4_signature_2']); ?>" alt="">
                                        <img id="imagen4" src="<?php echo esc_url($slide_4['slide_4_signature_3']); ?>" alt="">
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $slide_5 = get_field('slide_5');
                        if ($slide_5) : ?>
                            <div class="img-wrap" data-slide="5">
                                <img id="imagen1" src="<?php echo esc_url($slide_5['slide_5_image']); ?>" alt="" class="imagn">
                                <div class="signature">
                                    <img id="imagen2" src="<?php echo esc_url($slide_5['slide_5_signature_1']); ?>" alt="">
                                    <div class="row">
                                        <img id="imagen3" src="<?php echo esc_url($slide_5['slide_5_signature_2']); ?>" alt="">
                                        <img id="imagen4" src="<?php echo esc_url($slide_5['slide_5_signature_3']); ?>" alt="">
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $slide_6 = get_field('slide_6');
                        if ($slide_6) : ?>
                            <div class="img-wrap" data-slide="6">
                                <img id="imagen1" src="<?php echo esc_url($slide_6['slide_6_image']); ?>" alt="" class="imagn">
                                <div class="signature">
                                    <img id="imagen2" src="<?php echo esc_url($slide_6['slide_6_signature_1']); ?>" alt="">
                                    <div class="row">
                                        <img id="imagen3" src="<?php echo esc_url($slide_6['slide_6_signature_2']); ?>" alt="">
                                        <img id="imagen4" src="<?php echo esc_url($slide_6['slide_6_signature_3']); ?>" alt="">
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>
                    <?php $slide_7 = get_field('slide_7');
                        if ($slide_7) : ?>
                            <div class="img-wrap" data-slide="7">
                                <img id="imagen1" src="<?php echo esc_url($slide_7['slide_7_image']); ?>" alt="" class="imagn">
                                <div class="signature">
                                    <img id="imagen2" src="<?php echo esc_url($slide_7['slide_7_signature_1']); ?>" alt="">
                                    <div class="row">
                                        <img id="imagen3" src="<?php echo esc_url($slide_7['slide_7_signature_2']); ?>" alt="">
                                        <img id="imagen4" src="<?php echo esc_url($slide_7['slide_7_signature_3']); ?>" alt="">
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>
                </div>
                <div class="point-wrap">
                    <div class="point active" data-slide="1"></div>
                    <div class="point" data-slide="2"></div>
                    <div class="point" data-slide="3"></div>
                    <div class="point" data-slide="4"></div>
                    <div class="point" data-slide="5"></div>
                    <div class="point" data-slide="6"></div>
                    <div class="point" data-slide="7"></div>
                </div>
            </div>
        </div>

        <div class="m-left bg-green">
            <div class="bg-grid">
                <div class="block2 block2-p p-inline">

                <?php $text_box = get_field('text_box');
                    if ($text_box) : ?>
                        <div class="text-box type2">
                            <p><?php echo esc_html($text_box['parag']); ?></p>
                            <h3><?php echo esc_html($text_box['headline_3']); ?></h3>
                        </div>
                <?php endif; ?>

                    <?php $content_box = get_field('content_box_6');
                        if ($content_box) : ?>
                            <div class="content-wrap right">
                                <div></div>
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $content_box = get_field('content_box_7');
                        if ($content_box) : ?>
                            <div class="content-wrap right">
                                <div></div>
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $content_box = get_field('content_box_8');
                        if ($content_box) : ?>
                            <div class="content-wrap">
                                <div class="content-box full-blok">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $content_box = get_field('content_box_9');
                        if ($content_box) : ?>
                            <div class="content-wrap">
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <?php $content_box = get_field('content_box_10');
                        if ($content_box) : ?>
                            <div class="content-wrap">
                                <div class="content-box">
                                    <img src="<?php echo esc_url($content_box['images_post']); ?>" alt="">
                                    <div class="text-box">
                                        <h3><?php echo esc_html($content_box['headline_3']); ?></h3>
                                        <p><?php echo esc_html($content_box['description']); ?></p>
                                    </div>
                                </div>
                            </div>
                    <?php endif; ?>

                    <div class="img-list"></div>

                    <?php $button_post_1 = get_field('button_post_2');
                        if ($button_post_1) : ?>
                            <div class="button button-p">
                                <p><?php echo esc_html($button_post_1['text']); ?></p>
                                <img src="<?php echo esc_url($button_post_1['arrow']); ?>" alt="">
                            </div>
                    <?php endif; ?>


                    <?php $img = get_field('bottom_left_2');
                        if ($img) : ?>
                            <div class="img-bottom">
                                <img src="<?php echo esc_url($img); ?>" alt="">
                            </div>
                    <?php endif; ?>

                </div>
            </div>
        </div>

        <div class="bg-blue">
            <div class="bg-grid">
                <div class="statistics-wrap">
                    <div class="p-inline">
                        <?php $text_box = get_field('statistics_title');
                            if ($text_box) : ?>
                                <p><?php echo esc_html($text_box); ?></p>
                        <?php endif; ?>

                        <div class="statistics">
                            <div class="">
                                <?php $statistics_element = get_field('statistics_stories');
                                    if ($statistics_element) : ?>
                                        <div class="element">
                                            <div class="text">
                                                <p class="numder"><?php echo esc_html($statistics_element['number']); ?></p>
                                                <?php if ($statistics_element['mark']) : ?>
                                                    <p class="mark"><?php echo esc_html($statistics_element['mark']); ?></p>
                                                <?php endif; ?>
                                                <?php if ($statistics_element['img_stroke']) : ?>
                                                    <img class="stroke" src="<?php echo esc_url($statistics_element['img_stroke']); ?>" alt="">
                                                <?php endif; ?>
                                            </div>
                                            <p class="descript"><?php echo esc_html($statistics_element['descript']); ?></p>
                                        </div>
                                <?php endif; ?>

                                <?php $statistics_element = get_field('statistics_families');
                                    if ($statistics_element) : ?>
                                        <div class="element">
                                            <div class="text">
                                                <p class="numder"><?php echo esc_html($statistics_element['number']); ?></p>
                                                <?php if ($statistics_element['mark']) : ?>
                                                    <p class="mark"><?php echo esc_html($statistics_element['mark']); ?></p>
                                                <?php endif; ?>

                                                <?php if ($statistics_element['img_stroke']) : ?>
                                                    <img class="stroke" src="<?php echo esc_url($statistics_element['img_stroke']); ?>" alt="">
                                                <?php endif; ?>
                                            </div>
                                            <p class="descript"><?php echo esc_html($statistics_element['descript']); ?></p>
                                        </div>
                                <?php endif; ?>

                                <?php $statistics_element = get_field('statistics_physicians');
                                    if ($statistics_element) : ?>
                                        <div class="element">
                                            <div class="text">
                                                <p class="numder"><?php echo esc_html($statistics_element['number']); ?></p>
                                                <?php if ($statistics_element['mark']) : ?>
                                                    <p class="mark"><?php echo esc_html($statistics_element['mark']); ?></p>
                                                <?php endif; ?>
                                                <?php if ($statistics_element['img_stroke']) : ?>
                                                    <img class="stroke" src="<?php echo esc_url($statistics_element['img_stroke']); ?>" alt="">
                                                <?php endif; ?>
                                            </div>
                                            <p class="descript"><?php echo esc_html($statistics_element['descript']); ?></p>
                                        </div>
                                <?php endif; ?>

                                <?php $statistics_element = get_field('statistics_years');
                                    if ($statistics_element) : ?>
                                        <div class="element">
                                            <div class="text">
                                                <p class="numder"><?php echo esc_html($statistics_element['number']); ?></p>
                                                <?php if ($statistics_element['mark']) : ?>
                                                    <p class="mark"><?php echo esc_html($statistics_element['mark']); ?></p>
                                                <?php endif; ?>

                                                <?php if ($statistics_element['img_stroke']) : ?>
                                                    <img class="underline" src="<?php echo esc_url($statistics_element['img_stroke']); ?>" alt="">
                                                <?php endif; ?>
                                            </div>
                                            <p class="descript"><?php echo esc_html($statistics_element['descript']); ?></p>
                                        </div>
                                <?php endif; ?>

                                <?php $statistics_element = get_field('statistics_offices');
                                    if ($statistics_element) : ?>
                                        <div class="element">
                                            <div class="text">
                                                <p class="numder"><?php echo esc_html($statistics_element['number']); ?></p>
                                                <?php if ($statistics_element['mark']) : ?>
                                                    <p class="mark"><?php echo esc_html($statistics_element['mark']); ?></p>
                                                <?php endif; ?>
                                                <?php if ($statistics_element['img_stroke']) : ?>
                                                    <img class="underline" src="<?php echo esc_url($statistics_element['img_stroke']); ?>" alt="">
                                                <?php endif; ?>
                                            </div>
                                            <p class="descript"><?php echo esc_html($statistics_element['descript']); ?></p>
                                        </div>
                                <?php endif; ?>

                                <?php $statistics_element = get_field('statistics_specialities');
                                    if ($statistics_element) : ?>
                                        <div class="element">
                                            <div class="text">
                                                <p class="numder"><?php echo esc_html($statistics_element['number']); ?></p>
                                                <?php if ($statistics_element['mark']) : ?>
                                                    <p class="mark"><?php echo esc_html($statistics_element['mark']); ?></p>
                                                <?php endif; ?>
                                                <?php if ($statistics_element['img_stroke']) : ?>
                                                    <img class="underline1" src="<?php echo esc_url($statistics_element['img_stroke']); ?>" alt="">
                                                <?php endif; ?>
                                            </div>
                                            <p class="descript"><?php echo esc_html($statistics_element['descript']); ?></p>
                                        </div>
                                <?php endif; ?>

                                <?php $statistics_element = get_field('statistics_you');
                                    if ($statistics_element) : ?>
                                        <div class="element">
                                            <div class="text">
                                                <p class="numder"><?php echo esc_html($statistics_element['number']); ?></p>
                                                <?php if ($statistics_element['mark']) : ?>
                                                    <p class="mark"><?php echo esc_html($statistics_element['mark']); ?></p>
                                                <?php endif; ?>

                                                <?php if ($statistics_element['img_stroke']) : ?>
                                                    <img class="underline1" src="<?php echo esc_url($statistics_element['img_stroke']); ?>" alt="">
                                                <?php endif; ?>
                                            </div>
                                            <p class="descript"><?php echo esc_html($statistics_element['descript']); ?></p>
                                        </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>

                    <div class="slider2-wrap">
                        <?php $slider_2_title = get_field('slider_2_title');
                            if ($slider_2_title) : ?>
                                <p class="title"><?php echo esc_html($slider_2_title); ?></p>
                        <?php endif; ?>

                        <div class="slider2">
                            <?php $slider_2_slid_1 = get_field('slider_2_slid_1');
                                if ($slider_2_slid_1) : ?>
                                    <img id="main" src="<?php echo esc_url($slider_2_slid_1['slider_2_slid_1_image']); ?>" alt="">
                            <?php endif; ?>
                            
                            <div class="element-box">
                                <?php if ($slider_2_slid_1) : ?>
                                        <p id="title2" class="title" data-slide="1"><?php echo esc_html($slider_2_title); ?></p>
                                        <h3 class="title" data-slide="1"><?php echo esc_html($slider_2_slid_1['slider_2_slid_1_headline_3']); ?></h3>
                                        <p data-slide="1"><?php echo esc_html($slider_2_slid_1['slider_2_slid_1_text']); ?></p>
                                <?php endif; ?>


                                <div class="point-wrap">
                                    <div class="point2 active" data-slide="1"></div>
                                    <div class="point2" data-slide="2"></div>
                                    <div class="point2" data-slide="3"></div>
                                    <div class="point2" data-slide="4"></div>
                                </div>

                                
                                <?php if ($slider_2_slid_1['slider_2_slid_1_button']) : ?>
                                        <div class="button button-p" data-slide="1">
                                            <p><?php echo esc_html($slider_2_slid_1['slider_2_slid_1_button']['text']); ?></p>
                                            <img src="<?php echo esc_url($slider_2_slid_1['slider_2_slid_1_button']['arrow']); ?>" alt="">
                                        </div>
                                <?php endif; ?>

                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div class="locations-wrap p-inline">
            <?php $text_box = get_field('locations_title');
                if ($text_box) : ?>
                    <p><?php echo esc_html($text_box); ?></p>
            <?php endif; ?>

            <div class="locations-box">
                <div class="locations">
                    <?php $text_box = get_field('locations_headline_1');
                        if ($text_box) : ?>
                            <h1><?php echo esc_html($text_box); ?></h1>
                    <?php endif; ?>

                    <?php $button = get_field('locations_button');
                        if ($button_post_1) : ?>
                            <div class="button button-p">
                                <p><?php echo esc_html($button['text']); ?></p>
                                <img src="<?php echo esc_url($button['arrow']); ?>" alt="">
                            </div>
                    <?php endif; ?>
                </div>

                <?php $post_box = get_field('post_box');
                    if ($post_box) : ?>
                        <div class="post-wrap">
                            <img src="<?php echo esc_url($post_box['img']); ?>" alt="">
                            <p><?php echo esc_html($post_box['post_locations']); ?> <br>
                            <?php echo esc_html($post_box['post_number']); ?> <br>
                            <?php echo esc_html($post_box['post_mail']); ?></p>
                        </div>
                <?php endif; ?>
            </div>

            <?php $img_bottom = get_field('locations_img_bottom');
                if($img_bottom) : ?>
                    <div class="img-bottom">
                        <img src="<?php echo esc_url($img_bottom); ?>" alt="">
                    </div>
            <?php endif; ?>
        </div>

        <div class="bg-green m-right">
            <div class="block3 bg-grid">
                <?php $network_title_box = get_field('network_title_box');
                    if($network_title_box) : ?>
                        <div class="text-box p-inline">
                            <p><?php echo esc_html($network_title_box['text']); ?></p>
                            <h3><?php echo esc_html($network_title_box['headline_3']); ?></h3>
                        </div>
                <?php endif; ?>

            
                <div class="colum-2">
                    
                    <div class="image"></div>

                    <div class="statistics-wrap p-inline">
                        <div class="statistics">
                            <?php $network_statistics = get_field('network_statistics_experts');
                                if($network_statistics) : ?>
                                    <div class="element">
                                        <div class="text">
                                            <p class="numder"><?php echo esc_html($network_statistics['numder']); ?></p>
                                            <p class="mark"><?php echo esc_html($network_statistics['mark']); ?></p>
                                            <img class="underline" src="<?php echo esc_url($network_statistics['underline']); ?>" alt="">
                                        </div>
                                        <p class="descript"><?php echo esc_html($network_statistics['descript']); ?></p>
                                    </div>
                            <?php endif; ?>
                            

                            

                            <?php $network_statistics = get_field('network_statistics_cities');
                                if($network_statistics) : ?>
                                    <div class="element">
                                        <div class="text">
                                            <p class="numder"><?php echo esc_html($network_statistics['numder']); ?></p>
                                            <p class="mark"><?php echo esc_html($network_statistics['mark']); ?></p>
                                            <img class="underline" src="<?php echo esc_url($network_statistics['underline']); ?>" alt="">
                                        </div>
                                        <p class="descript"><?php echo esc_html($network_statistics['descript']); ?></p>
                                    </div>
                            <?php endif; ?>

                            <?php $network_statistics = get_field('network_statistics_affiliates');
                                if($network_statistics) : ?>
                                    <div class="element">
                                        <div class="text">
                                            <p class="numder"><?php echo esc_html($network_statistics['numder']); ?></p>
                                            <p class="mark"><?php echo esc_html($network_statistics['mark']); ?></p>
                                            <img class="underline" src="<?php echo esc_url($network_statistics['underline']); ?>" alt="">
                                        </div>
                                        <p class="descript"><?php echo esc_html($network_statistics['descript']); ?></p>
                                    </div>
                            <?php endif; ?>
                        </div>

                         <?php $button = get_field('network_button');
                            if ($button) : ?>
                                <div class="button button-p">
                                    <p><?php echo esc_html($button['text']); ?></p>
                                    <img src="<?php echo esc_url($button['arrow']); ?>" alt="">
                                </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

        </div>

<?php get_footer()?>