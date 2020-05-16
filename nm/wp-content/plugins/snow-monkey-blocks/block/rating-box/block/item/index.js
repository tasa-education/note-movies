'use strict';

import { __ } from '@wordpress/i18n';

import blockConfig from '../../../../src/js/config/block';
import attributes from './attributes.json';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

export const name = 'snow-monkey-blocks/rating-box--item';

export const settings = {
	title: __( 'Item', 'snow-monkey-blocks' ),
	description: __(
		'It is a child block of the rating box block.',
		'snow-monkey-blocks'
	),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'editor-alignleft',
	},
	category: blockConfig.blockCategories.common,
	parent: [ 'snow-monkey-blocks/rating-box' ],
	attributes,
	edit,
	save,
	deprecated,
};
