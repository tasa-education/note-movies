<?php
/**
 * @package snow-monkey-blocks
 * @author inc2734
 * @license GPL-2.0+
 */
?>

<!-- wp:snow-monkey-blocks/section-with-bgimage {"titleTagName":"none","lgImageID":0,"height":"wide","maskColor":"#000000","maskOpacity":0.6,"align":"full"} -->
<div class="wp-block-snow-monkey-blocks-section-with-bgimage alignfull smb-section smb-section-with-bgimage smb-section-with-bgimage--left smb-section-with-bgimage--wide" style="color:#fff">
	<div class="smb-section-with-bgimage__mask" style="background-color:#000000"></div>
	<div class="smb-section-with-bgimage__bgimage smb-section-with-bgimage__bgimage--lg" style="opacity:0.6">
		<img src="<?php echo esc_url( SNOW_MONKEY_BLOCKS_DIR_URL ); ?>/dist/img/photos/mountain-landscape-and-tree-at-sunset.jpg" alt="" class="wp-image-0"/>
	</div>
	<div class="c-container">
		<div class="smb-section__body">
			<!-- wp:snow-monkey-blocks/media-text {"imageID":0,"imagePosition":"left","imageColumnSize":"50"} -->
			<div class="wp-block-snow-monkey-blocks-media-text smb-media-text">
				<div class="c-row c-row--margin c-row--middle c-row--reverse">
					<div class="c-row__col c-row__col--1-1 c-row__col--lg-1-2">
						<h2 class="smb-media-text__title">Lorem ipsum</h2>
						<div class="smb-media-text__body">
							<!-- wp:paragraph -->
							<p>
								dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<!-- /wp:paragraph -->

							<!-- wp:button {"className":"is-style-default"} -->
							<div class="wp-block-button is-style-default">
								<a class="wp-block-button__link" href="https://example.com">Button</a>
							</div>
							<!-- /wp:button -->
						</div>
					</div>
					<div class="c-row__col c-row__col--1-1 c-row__col--lg-1-2">
						<div class="smb-media-text__figure">
							<img src="<?php echo esc_url( SNOW_MONKEY_BLOCKS_DIR_URL ); ?>/dist/img/photos/man-sitting-at-table-with-coffee-cup-using-digital-tablet.jpg" alt="" class="wp-image-0"/>
						</div>
					</div>
				</div>
			</div>
			<!-- /wp:snow-monkey-blocks/media-text -->
		</div>
	</div>
</div>
<!-- /wp:snow-monkey-blocks/section-with-bgimage -->
