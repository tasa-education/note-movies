<?php
/**
 * @package snow-monkey-blocks
 * @author inc2734
 * @license GPL-2.0+
 */

/**
 * style
 */
wp_register_style(
	'snow-monkey-blocks/btn-box',
	SNOW_MONKEY_BLOCKS_DIR_URL . '/dist/block/btn-box/style.css',
	[ 'snow-monkey-blocks' ],
	filemtime( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/btn-box/style.css' )
);

/**
 * editor_script
 */
$asset = include( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/btn-box/editor.asset.php' );
wp_register_script(
	'snow-monkey-blocks/btn-box/editor',
	SNOW_MONKEY_BLOCKS_DIR_URL . '/dist/block/btn-box/editor.js',
	array_merge( $asset['dependencies'], [ 'snow-monkey-blocks-editor' ] ),
	filemtime( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/btn-box/editor.js' ),
	true
);

/**
 * editor_style
 */
wp_register_style(
	'snow-monkey-blocks/btn-box/editor',
	SNOW_MONKEY_BLOCKS_DIR_URL . '/dist/block/btn-box/editor.css',
	[ 'snow-monkey-blocks-editor' ],
	filemtime( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/btn-box/editor.css' )
);

register_block_type(
	'snow-monkey-blocks/btn-box',
	[
		'style'         => ! is_admin() ? 'snow-monkey-blocks/btn-box' : null,
		'editor_script' => 'snow-monkey-blocks/btn-box/editor',
		'editor_style'  => 'snow-monkey-blocks/btn-box/editor',
	]
);

/**
 * excerpt_allowed_blocks
 */
add_filter(
	'excerpt_allowed_blocks',
	function( $allowed_blocks ) {
		return array_merge(
			$allowed_blocks,
			[
				'snow-monkey-blocks/btn-box',
			]
		);
	}
);
