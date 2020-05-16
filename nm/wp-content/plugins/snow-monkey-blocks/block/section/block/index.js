'use strict';

import { __ } from '@wordpress/i18n';

import blockConfig from '../../../src/js/config/block';
import attributes from './attributes.json';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import example from './example';

export const name = 'snow-monkey-blocks/section';

export const settings = {
	title: __( 'Section', 'snow-monkey-blocks' ),
	description: __(
		'Contents can be separated by appropriate margins.',
		'snow-monkey-blocks'
	),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'text',
	},
	category: blockConfig.blockCategories.section,
	supports: {
		align: [ 'wide', 'full' ],
		anchor: true,
	},
	attributes,
	edit,
	save,
	deprecated,
	example,
};
