'use strict';

import { __ } from '@wordpress/i18n';

import blockConfig from '../../../src/js/config/block';
import attributes from './attributes.json';
import supports from './supports.json';
import edit from './edit';
import save from './save';
import example from './example';

export const name = 'snow-monkey-blocks/taxonomy-posts';

export const settings = {
	title: __( 'Taxonomy posts', 'snow-monkey-blocks' ),
	description: __(
		'You can display recent posts linked to any taxonomy.',
		'snow-monkey-blocks'
	),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'editor-ul',
	},
	category: blockConfig.blockCategories.common,
	attributes,
	supports,
	edit,
	save,
	example,
};
