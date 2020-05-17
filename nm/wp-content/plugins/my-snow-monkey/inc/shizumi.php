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
		add_action( 'snow_monkey_entry_meta_items', array( $this, 'movie_tag_published' ), 50 );
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

	/**
	 * 動画ページのタイトル下に分類タグ追加
	 */
	public function movie_tag_published() {
		if ( ! is_singular( 'movies' ) ) {
			return;
		}

		$movie_tags = get_the_terms( get_the_ID(), 'movie_tag' );

		if ( ! $movie_tags && ! is_wp_error( $movie_tags ) ) {
			return;
		}
		?>
		<?php foreach ( $movie_tags as $movie_tag ) : ?>
			<li class="c-meta__item c-meta__item--categories">
				<span class="screen-reader-text"><?php echo esc_html( $movie_tag->label ); ?></span>
				<i class="fas fa-clipboard-list" aria-hidden="true"></i>
				<a href="<?php echo esc_url( get_term_link( $movie_tag ) ); ?>"><?php echo esc_html( $movie_tag->name ); ?></a>
			</li>
		<?php endforeach; ?>
		<?php
	}
}

new Shizumi();
