'use strict';

import {
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
} from '@wordpress/block-editor';

import { memo, useMemo } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

const ToolbarEditButton = ( { id, src, allowedTypes, accept, onSelect } ) => (
	<BlockControls>
		<MediaReplaceFlow
			mediaId={ id }
			mediaURL={ src }
			allowedTypes={ allowedTypes }
			accept={ accept }
			onSelect={ onSelect }
		/>
	</BlockControls>
);

const Image = ( { src, alt, id } ) => (
	<img src={ src } alt={ alt } className={ `wp-image-${ id }` } />
);

const Video = ( { src } ) => <video controls src={ src } />;

const Figure = memo(
	( {
		id,
		src,
		alt,
		url,
		target,
		allowedTypes,
		accept,
		onSelect,
		mediaType,
	} ) => {
		let media;
		if ( 'image' === mediaType ) {
			media = <Image src={ src } alt={ alt } id={ id } />;

			if ( !! url ) {
				media = (
					<span
						href={ url }
						target={ '_self' === target ? undefined : target }
						rel={
							'_self' === target
								? undefined
								: 'noopener noreferrer'
						}
					>
						{ media }
					</span>
				);
			}
		} else if ( 'video' === mediaType ) {
			media = <Video src={ src } />;
		}

		return (
			<>
				<ToolbarEditButton
					id={ id }
					src={ src }
					allowedTypes={ allowedTypes }
					accept={ accept }
					onSelect={ onSelect }
				/>
				{ media }
			</>
		);
	},
	( p, n ) => {
		const keys = Object.keys( p );
		for ( const key of keys ) {
			if ( p[ key ] !== n[ key ] ) {
				return false;
			}
		}

		return true;
	}
);

export default function( props ) {
	const { src, onSelect, mediaType, allowedTypes = [ 'image' ] } = props;

	const mediaTypeFallback = ! mediaType && src ? 'image' : mediaType;

	let title = __( 'Media', 'snow-monkey-blocks' );
	if ( allowedTypes.length === 1 ) {
		if ( 'image' === allowedTypes[ 0 ] ) {
			title = __( 'Image', 'snow-monkey-blocks' );
		} else if ( 'video' === allowedTypes[ 0 ] ) {
			title = __( 'Video', 'snow-monkey-blocks' );
		}
	}

	const accept = useMemo( () => {
		return allowedTypes
			.map( ( type ) => {
				return `${ type }/*`;
			} )
			.join( ',' );
	}, [ allowedTypes ] );

	if ( ! src ) {
		return (
			<MediaPlaceholder
				icon="format-image"
				labels={ { title } }
				onSelect={ onSelect }
				accept={ accept }
				allowedTypes={ allowedTypes }
			/>
		);
	}

	return (
		<Figure
			{ ...props }
			accept={ accept }
			mediaType={ mediaTypeFallback }
		/>
	);
}
