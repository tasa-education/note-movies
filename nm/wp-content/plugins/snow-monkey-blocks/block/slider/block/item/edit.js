'use strict';

import classnames from 'classnames';

import {
	RichText,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	Button,
	Popover,
	ToolbarGroup,
	PanelBody,
} from '@wordpress/components';

import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import Figure from '../../../../src/js/component/figure';
import LinkControl from '../../../../src/js/component/link-control';
import ImageSizeSelectControl from '../../../../src/js/component/image-size-select-control';
import { getResizedImages } from '../../../../src/js/helper/helper';

export default function( {
	attributes,
	setAttributes,
	isSelected,
	className,
} ) {
	const {
		imageID,
		imageURL,
		imageAlt,
		imageSizeSlug,
		caption,
		url,
		target,
	} = attributes;

	const [ isLinkUIOpen, setIsLinkUIOpen ] = useState( false );
	const toggleLinkUIOpen = () => setIsLinkUIOpen( ! isLinkUIOpen );
	const closeLinkUIOpen = () => setIsLinkUIOpen( false );
	useEffect( () => {
		if ( ! isSelected ) {
			closeLinkUIOpen();
		}
	}, [ isSelected ] );

	const { resizedImages } = useSelect( ( select ) => {
		if ( ! imageID ) {
			return {
				resizedImages: {},
			};
		}

		const { getMedia } = select( 'core' );
		const media = getMedia( imageID );
		if ( ! media ) {
			return {
				resizedImages: {},
			};
		}

		const { getSettings } = select( 'core/block-editor' );
		const { imageSizes } = getSettings();

		return {
			resizedImages: getResizedImages( imageSizes, media ),
		};
	} );

	const classes = classnames( 'smb-slider__item', className );

	const onSelectImage = ( media ) => {
		const newImageURL =
			!! media.sizes && !! media.sizes[ imageSizeSlug ]
				? media.sizes[ imageSizeSlug ].url
				: media.url;

		setAttributes( {
			imageURL: newImageURL,
			imageID: media.id,
			imageAlt: media.alt,
		} );
	};

	const onRemoveImage = () =>
		setAttributes( {
			imageURL: '',
			imageAlt: '',
			imageID: 0,
		} );

	const onChangeCaption = ( value ) =>
		setAttributes( {
			caption: value,
		} );

	const onChangeUrl = ( { url: newUrl, opensInNewTab } ) => {
		setAttributes( {
			url: newUrl,
			target: ! opensInNewTab ? '_self' : '_blank',
		} );
	};

	const onChangeImageSizeSlug = ( value ) => {
		const newImageURL = resizedImages[ value ] || imageURL;

		setAttributes( {
			imageURL: newImageURL,
			imageSizeSlug: value,
		} );
	};

	const item = (
		<>
			<div className="smb-slider__item__figure">
				<Figure
					src={ imageURL }
					id={ imageID }
					alt={ imageAlt }
					onSelect={ onSelectImage }
					onRemove={ onRemoveImage }
					isSelected={ isSelected }
				/>

				{ isLinkUIOpen && (
					<Popover
						position="bottom center"
						onClose={ closeLinkUIOpen }
					>
						<LinkControl
							url={ url }
							target={ target }
							onChange={ onChangeUrl }
						/>
					</Popover>
				) }
			</div>

			{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
				<RichText
					className="smb-slider__item__caption"
					placeholder={ __( 'Write caption…', 'snow-monkey-blocks' ) }
					value={ caption }
					onChange={ onChangeCaption }
				/>
			) }
		</>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Block Settings', 'snow-monkey-blocks' ) }
				>
					<ImageSizeSelectControl
						label={ __( 'Images size', 'snow-monkey-blocks' ) }
						id={ imageID }
						slug={ imageSizeSlug }
						onChange={ onChangeImageSizeSlug }
					/>
				</PanelBody>
			</InspectorControls>

			{ !! url ? (
				<span
					className={ classes }
					href={ url }
					target={ '_self' === target ? undefined : target }
					rel={
						'_self' === target ? undefined : 'noopener noreferrer'
					}
				>
					{ item }
				</span>
			) : (
				<div className={ classes }>{ item }</div>
			) }

			<BlockControls>
				<ToolbarGroup>
					<Button
						icon="admin-links"
						className="components-toolbar__control"
						label={ __( 'Link', 'snow-monkey-blocks' ) }
						aria-expanded={ isLinkUIOpen }
						onClick={ toggleLinkUIOpen }
					/>
				</ToolbarGroup>
			</BlockControls>
		</>
	);
}
