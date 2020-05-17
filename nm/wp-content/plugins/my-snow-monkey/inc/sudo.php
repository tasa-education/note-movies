<?php
/**
 * すどう対応分
 *
 * @package do_actionJapan2020
 * @since 1.0.0
 */


if ( !class_exists( 'noteMoviesSudou' ) ) :
class noteMoviesSudou {


	public function __construct() {
		add_action( 'pre_get_posts', array( $this, 'get_posts_by_post_type' ) );
		add_action( 'wp_footer', array( $this, 'add_credits' ), 9999 );
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


	/**
	 * フッターにクレジットを追加
	 */
	public function add_credits() {
echo <<< EOM

<!--
--------
------------
このサイトは、WordPress を使って地域社会を盛り上げるための
チャリティーハッカソン 「do_action Japan 2020」で集まった有志により作成されました。

【メンバー】
ディレクター - 大串 肇
デザイナー兼ライター - 伊東 けいこ
開発者 - 静海 義明
SNS担当 - 鈴木 毅
テスター - 幸田 良佑
開発者 - すどう まりこ
------------
--------
-->

EOM;
	}
}
new noteMoviesSudou();
endif;
