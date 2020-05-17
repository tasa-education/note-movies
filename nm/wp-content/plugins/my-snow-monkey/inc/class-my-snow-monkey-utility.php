<?php
/**
 * ユーティリティークラス
 *
 * @package do_actionJapan2020
 * @since 1.0.0
 */

class MySnowMonkeyUtility {
	/**
	 * 投稿が指定された日数以下かどうかを調べる
	 *
	 * @param $span
	 * @param int $post_id
	 */
	public static function is_lower_days( $span = 10, $post_id = 0 ) {
		if ( 0 === $post_id ) {
			$post_id = get_the_ID();
		}

		if ( ! $post_id ) {
			return false;
		}

		$tz      = new DateTimeZone( 'Asia/Tokyo' );

		$post_date = new DateTime( get_the_time( 'Y/m/d' ), $tz );
		$current = new DateTime( 'now', $tz );

		$interval = $post_date->diff( $current )->format( '%r%a' );

		return $interval < $span;
	}
}
