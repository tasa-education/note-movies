'use strict';

import { __ } from '@wordpress/i18n';

import blockConfig from '../../../src/js/config/block';
import attributes from './attributes.json';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import example from './example';

export const name = 'snow-monkey-blocks/media-text';

export const settings = {
	title: __( 'Media text', 'snow-monkey-blocks' ),
	description: __(
		'Set media and words side-by-side for a richer layout.',
		'snow-monkey-blocks'
	),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'align-left',
	},
	category: blockConfig.blockCategories.common,
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	save,
	deprecated,
	example,
};
