<?php

function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/theme.css', ['swiperjs-style'], filemtime(get_stylesheet_directory() . '/css/theme.css'));
    wp_enqueue_style('swiperjs-style', get_stylesheet_directory_uri() . '/css/swiperjs.css)', [], filemtime(get_stylesheet_directory() . '/css/swiperjs.css'));
    wp_enqueue_script('theme-script', get_stylesheet_directory_uri() . '/js/themeScript.js', ['swiperjs-script'], filemtime(get_stylesheet_directory() . '/js/themeScript.js'), true);
    wp_enqueue_script('swiperjs-script',  get_stylesheet_directory_uri() . '/js/swiperjs.js', [], filemtime(get_stylesheet_directory() . '/js/swiperjs.js'), true);
}

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

// Get customizer options form parent theme
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // prevent update to child theme mods
    }, 10, 2);
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}
