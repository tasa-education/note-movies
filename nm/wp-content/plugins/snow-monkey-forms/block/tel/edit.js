import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import {
	NameControl,
	ValueControl,
	PlaceholderControl,
	MaxLengthControl,
	SizeControl,
	IdControl,
	ClassControl,
} from '../components';
import { stringToNumber, uniqId } from '../helper';
import withValidations from '../../hoc/with-validations';

const edit = ( { attributes, setAttributes } ) => {
	const {
		name,
		value,
		placeholder,
		maxlength,
		size,
		id,
		controlClass,
		description,
	} = attributes;

	if ( '' === name ) {
		setAttributes( { name: `tel-${ uniqId() }` } );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Attributes', 'snow-monkey-forms' ) }>
					<NameControl
						value={ name }
						onChange={ ( attribute ) =>
							setAttributes( { name: attribute } )
						}
					/>

					<ValueControl
						value={ value }
						onChange={ ( attribute ) =>
							setAttributes( { value: attribute } )
						}
					/>

					<PlaceholderControl
						value={ placeholder }
						onChange={ ( attribute ) =>
							setAttributes( { placeholder: attribute } )
						}
					/>

					<MaxLengthControl
						value={ maxlength }
						onChange={ ( attribute ) => {
							setAttributes( {
								maxlength: stringToNumber(
									attribute,
									maxlength
								),
							} );
						} }
					/>

					<SizeControl
						value={ size }
						onChange={ ( attribute ) => {
							setAttributes( {
								size: stringToNumber( attribute, size ),
							} );
						} }
					/>

					<IdControl
						value={ id }
						onChange={ ( attribute ) =>
							setAttributes( { id: attribute } )
						}
					/>

					<ClassControl
						value={ controlClass }
						onChange={ ( attribute ) =>
							setAttributes( { controlClass: attribute } )
						}
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Block settings', 'snow-monkey-forms' ) }
				>
					<TextControl
						label={ __( 'Description', 'snow-monkey-forms' ) }
						value={ description }
						onChange={ ( attribute ) =>
							setAttributes( { description: attribute } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="smf-placeholder" data-name={ name }>
				<div className="smf-text-control">
					<input
						type="tel"
						name={ name }
						value={ value }
						placeholder={ placeholder }
						maxLength={ maxlength || undefined }
						size={ size || undefined }
						disabled="disabled"
						id={ id || undefined }
						className={ `smf-text-control__control ${ controlClass }` }
					/>
				</div>
				{ description && (
					<div className="smf-control-description">
						{ description }
					</div>
				) }
			</div>
		</>
	);
};

export default compose( withValidations )( edit );
