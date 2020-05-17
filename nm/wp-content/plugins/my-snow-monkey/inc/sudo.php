<?php
/**
 * [*ここにこのファイルの概要を記載します。]
 *
 * [*ここにこのファイルの説明を記載します。]
 *
 * @link [関数やメソッド等の追加情報へのリンク]
 *
 * @package do_actionJapan2020
 * @subpackage [ファイル内のすべての関数や定義が属するコンポーネントを指定する]
 * @since x.x.x [ファイルが追加されたバージョンを指定する]
 */


/**
 * 検索機能カスタマイズ
 */
if (!class_exists('noteMoviesSearch')) :
class noteMoviesSearch {


	/**
	 * 検索できるpost_typeを限定
	 */
	public function get_posts_by_post_type($query) {
		if ($query->is_search() && $query->is_main_query() && !is_admin()) {
			$get_post_type = get_query_var('post_type');

			if ($get_post_type === 'movies') {
				$query->set('post_type', array('movies'));
			}
		}
	}
}
endif;
