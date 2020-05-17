<?php
/**
 * Plugin name: My Snow Monkey
 * Description: このプラグインに、あなたの Snow Monkey 用カスタマイズコードを書いてください。
 * Version: 0.1.1
 *
 * @package my-snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 */

/**
 * Snow Monkey 以外のテーマを利用している場合は有効化してもカスタマイズが反映されないようにする
 */
$theme = wp_get_theme( get_template() );
if ( 'snow-monkey' !== $theme->template && 'snow-monkey/resources' !== $theme->template ) {
	return;
}

define( 'MY_SNOW_MONKEY_PATH', plugin_dir_path( __FILE__ ) );

// すどうさん
require plugin_dir_path( __FILE__ ) . 'inc/sudo.php';
$nm_search = new noteMoviesSearch();

// 検索できるpost_typeを限定
add_action( 'pre_get_posts', array( $nm_search, 'get_posts_by_post_type' ) );








// しずみ
require plugin_dir_path( __FILE__ ) . 'inc/class-my-snow-monkey-utility.php';
require plugin_dir_path( __FILE__ ) . 'inc/shizumi.php';

add_filter(
	'snow_monkey_get_template_part_args',
	function( $args ) {
		if ( 'template-parts/content/prev-next-nav' === $args['slug'] ) {
			$args['vars']['_in_same_term'] = true;
			$args['vars']['_taxonomy'] = 'grade';
		}
		return $args;
	}
);
