'use strict';

import classnames from 'classnames';

import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import {
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';

import { toNumber } from '../../../src/js/helper/helper';

export default function( { attributes, setAttributes, className } ) {
	const { backgroundColor, borderColor, textColor, borderWidth } = attributes;

	const boxStyles = {
		backgroundColor: backgroundColor || undefined,
		borderColor: borderColor || undefined,
		color: textColor || undefined,
		borderWidth: borderWidth || undefined,
	};

	const classes = classnames( 'smb-box', className );

	const onChangeBorderWidth = ( value ) =>
		setAttributes( {
			borderWidth: toNumber( value, 1, 5 ),
		} );

	const onChangeBackgroundColor = ( value ) =>
		setAttributes( {
			backgroundColor: value,
		} );

	const onChangeBorderColor = ( value ) =>
		setAttributes( {
			borderColor: value,
		} );

	const onChangeTextColor = ( value ) =>
		setAttributes( {
			textColor: value,
		} );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Block Settings', 'snow-monkey-blocks' ) }
				>
					<RangeControl
						label={ __( 'Border width', 'snow-monkey-blocks' ) }
						value={ borderWidth }
						onChange={ onChangeBorderWidth }
						min="1"
						max="5"
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'snow-monkey-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __(
								'Background Color',
								'snow-monkey-blocks'
							),
						},
						{
							value: borderColor,
							onChange: onChangeBorderColor,
							label: __( 'Border Color', 'snow-monkey-blocks' ),
						},
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __( 'Text Color', 'snow-monkey-blocks' ),
						},
					] }
				>
					<ContrastChecker
						backgroundColor={ backgroundColor }
						textColor={ textColor }
					/>
				</PanelColorSettings>
			</InspectorControls>

			<div className={ classes } style={ boxStyles }>
				<div className="smb-box__body">
					<InnerBlocks />
				</div>
			</div>
		</>
	);
}
