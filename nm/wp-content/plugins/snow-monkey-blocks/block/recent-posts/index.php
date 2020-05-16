<?php
/**
 * @package snow-monkey-blocks
 * @author inc2734
 * @license GPL-2.0+
 */

use Snow_Monkey\Plugin\Blocks;
use Snow_Monkey\Plugin\Blocks\App\DynamicBlocks;

/**
 * editor_script
 */
$asset = include( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/recent-posts/editor.asset.php' );
wp_register_script(
	'snow-monkey-blocks/recent-posts/editor',
	SNOW_MONKEY_BLOCKS_DIR_URL . '/dist/block/recent-posts/editor.js',
	array_merge( $asset['dependencies'], [ 'snow-monkey-blocks-editor' ] ),
	filemtime( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/recent-posts/editor.js' ),
	true
);

/**
 * nopro
 */
wp_enqueue_script(
	'snow-monkey-blocks/recent-posts/nopro',
	! Blocks\is_pro() && ! is_admin() ? SNOW_MONKEY_BLOCKS_DIR_URL . '/dist/block/recent-posts/nopro.js' : null,
	[],
	filemtime( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/recent-posts/nopro.js' ),
	true
);

/**
 * nopro
 */
wp_enqueue_style(
	'snow-monkey-blocks/recent-posts/nopro',
	! Blocks\is_pro() && ! is_admin() ? SNOW_MONKEY_BLOCKS_DIR_URL . '/dist/block/recent-posts/nopro.css' : null,
	[],
	filemtime( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/recent-posts/nopro.css' )
);

/**
 * nopro
 */
wp_enqueue_style(
	'snow-monkey-blocks/recent-posts/nopro/editor',
	! Blocks\is_pro() && is_admin() ? SNOW_MONKEY_BLOCKS_DIR_URL . '/dist/block/recent-posts/nopro-editor.css' : null,
	[],
	filemtime( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/recent-posts/nopro-editor.css' )
);

$attributes = file_get_contents( __DIR__ . '/block/attributes.json' );
$attributes = json_decode( $attributes, true );
$supports = file_get_contents( __DIR__ . '/block/supports.json' );
$supports = json_decode( $supports, true );

register_block_type(
	'snow-monkey-blocks/recent-posts',
	[
		'editor_script'   => 'snow-monkey-blocks/recent-posts/editor',
		'attributes'      => $attributes,
		'supports'        => $supports,
		'render_callback' => function( $attributes ) {
			return DynamicBlocks::render( 'recent-posts', $attributes );
		},
	]
);
