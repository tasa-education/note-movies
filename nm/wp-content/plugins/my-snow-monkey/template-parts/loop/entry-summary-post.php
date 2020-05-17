<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 * @version 7.0.0
 */

use Framework\Helper;

$template_args = [
	'entries_layout' => Helper::get_var( $_entries_layout, get_theme_mod( get_post_type() . '-entries-layout' ) ),
	'excerpt_length' => Helper::get_var( $_excerpt_length, null ),
];
?>

<a href="<?php the_permalink(); ?>">
	<section class="c-entry-summary c-entry-summary--post">
		<?php Helper::get_template_part( 'template-parts/loop/entry-summary/figure/figure', 'post' ); ?>

		<div class="c-entry-summary__body">
			<header class="c-entry-summary__header">
				<?php Helper::get_template_part( 'template-parts/loop/entry-summary/title/title', 'post' ); ?>
				<?php if ( MySnowMonkeyUtility::is_lower_days() ) : ?>
					<span>new</span>
				<?php endif; ?>
			</header>
			<?php if ( 'movies' === get_post_type() ) : ?>
				<?php $terms = get_the_terms( get_the_ID(), 'movie_tag' ); ?>
				<?php if ( is_array( $terms ) && ! is_wp_error( $terms ) ) : ?>
					<ul class="movie_tag">
						<?php foreach ( $terms as $term ) : ?>
							<?php printf( '<li class="movie-tag %s">%s</li>', $term->slug, $term->name ); ?>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>
			<?php endif; ?>

			<?php
			Helper::get_template_part(
				'template-parts/loop/entry-summary/content/content',
				'post',
				[
					'_entries_layout' => $template_args['entries_layout'],
					'_excerpt_length' => $template_args['excerpt_length'],
				]
			);
			?>

			<?php if ( 'movies' !== get_post_type() ) : ?>
				<?php Helper::get_template_part( 'template-parts/loop/entry-summary/meta/meta', 'post' ); ?>
			<?php endif; ?>
		</div>
	</section>
</a>
