<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <img class="banner__image" src="wp-content/themes/foce-child/assets/images/banner.png" alt="image banniere fleurs d'oranger & chats errants">
        <img class="banner__logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        <video src="wp-content/themes/foce-child/assets/video/Studio+Koukaki-vidéo+header+sans+son.mp4" width="1440" autoplay muted loop></video>
    </section>
    <section id="story" class="story">
        <h2><span class="animation-titre">L'histoire</span></h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>

        <article id="characters">
            <?php get_template_part('templates/template-personnage'); ?>
        </article>


        <article id="place" class="place">
            <img src="wp-content/themes/foce-child/assets/images/big_cloud.png" class="place__big-cloud" alt="gros nuage">
            <img src="wp-content/themes/foce-child/assets/images/little_cloud.png" class="place__little-cloud" alt="petit nuage ">
            <div>
                <h3><span class="animation-titre">Le Lieu</span></h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>

        </article>
    </section>


    <section id="studio">
        <h2><span class="animation-titre">Studio Koukaki</span></h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
    <section id="nomination" class="nomination">
        <?php get_template_part('templates/template-nomination'); ?>
    </section>
</main><!-- #main -->

<?php
get_footer();