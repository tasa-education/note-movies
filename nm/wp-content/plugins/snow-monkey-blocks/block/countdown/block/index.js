'use strict';

import { __ } from '@wordpress/i18n';

import blockConfig from '../../../src/js/config/block';
import attributes from './attributes.json';
import edit from './edit';
import save from './save';
import example from './example';

const icon = (
	<svg
		role="img"
		focusable="false"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path d="M9.166,1.666l0,1.667l1.668,0l0,-1.667l-1.668,0Zm3.621,0.469l-0.574,1.589c2.589,0.914 4.453,3.364 4.453,6.276c0,3.692 -2.974,6.666 -6.666,6.666c-3.692,0 -6.667,-2.974 -6.667,-6.666c0,-1.067 0.26,-2.077 0.703,-2.969l-1.511,-0.729c-0.554,1.116 -0.859,2.37 -0.859,3.698c0,4.593 3.741,8.334 8.334,8.334c4.593,0 8.334,-3.741 8.334,-8.334c0,-3.622 -2.307,-6.721 -5.547,-7.865Zm-8.621,2.865l5,5.834l1.668,0l0,-1.668l-6.668,-4.166Z" />
	</svg>
);

export const name = 'snow-monkey-blocks/countdown';

export const settings = {
	title: __( 'Countdown Timer', 'snow-monkey-blocks' ),
	description: __(
		'Display the countdown until the set date and time (Front-end only)',
		'snow-monkey-blocks'
	),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: icon,
	},
	category: blockConfig.blockCategories.common,
	styles: [
		{
			name: 'default',
			label: __( 'Default', 'snow-monkey-blocks' ),
			isDefault: true,
		},
		{
			name: 'inline',
			label: __( 'Inline', 'snow-monkey-blocks' ),
		},
	],
	keywords: [ __( 'Countdown', 'snow-monkey-blocks' ) ],
	attributes,
	edit,
	save,
	example,
};
