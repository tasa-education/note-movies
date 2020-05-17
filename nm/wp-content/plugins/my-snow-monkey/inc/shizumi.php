<?php
/**
 * しずみ対応分処理
 *
 * @package do_actionJapan2020
 * @since 1.0.0
 */

class Shizumi {
	public function __construct() {
		add_filter( 'inc2734_wp_view_controller_template_part_root_hierarchy', array( $this, 'custom_root_hierarchy' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'add_scripts' ) );
	}

	public function custom_root_hierarchy( $hierarchy ) {
		$hierarchy[] = MY_SNOW_MONKEY_PATH;
		return $hierarchy;
	}

	public function add_scripts() {
		if ( is_admin() ) {
			return;
		}

		wp_enqueue_style( 'note-movies-style', MY_SNOW_MONKEY_URI . 'assets/css/style.css', [ 'snow-monkey' ], filemtime( MY_SNOW_MONKEY_PATH . 'assets/css/style.css' ) );
	}
}

new Shizumi();
