<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>


        <header id="" class="site-header">
            <nav id="main-navigation" class="main-navigation">
                <ul>
                    <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                </ul>
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="line line-1"></span>
                    <span class="line line-2"></span>
                    <span class="line line-3"></span>
                </button>
            </nav><!-- #main-navigation -->
            <div class="menu__content">
                <img src="wp-content/themes/foce-child/assets/images/logo.png" alt="">
                <ul>
                    <li class="menu__content--histoire"><a href="#story">Histoire</a></li>
                    <li class="menu__content--characters"><a href="#characters">Personnages</a></li>
                    <li class="menu__content--place"><a href="#place">Lieu</a></li>
                    <li class="menu__content--studio"><a href="#studio">Studio Koukaki</a></li>
                </ul>

                <div class="menu__content--link-footer">
                    <a href="#">STUDIO KOUKAKI</a>
                </div>
            </div>
        </header><!-- #masthead -->