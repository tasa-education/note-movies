<?php
/**
 * 検索機能カスタマイズ
 *
 * @package do_actionJapan2020
 * @since 1.0.0
 */


if ( !class_exists( 'noteMoviesSearch' ) ) :
class noteMoviesSearch {


	public function __construct() {
		add_action( 'pre_get_posts', array( $this, 'get_posts_by_post_type' ) );
	}


	/**
	 * 検索できるpost_typeを限定
	 */
	public function get_posts_by_post_type( $query ) {
		if ( $query->is_search() ) {
			$query->set( 'post_type', 'movies' );
		}
		return $query;
	}
}
new noteMoviesSearch();
endif;
