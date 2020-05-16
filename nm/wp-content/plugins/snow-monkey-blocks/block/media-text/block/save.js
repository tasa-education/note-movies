'use strict';

import classnames from 'classnames';

import { RichText, InnerBlocks } from '@wordpress/block-editor';

import { getColumnSize } from '../../../src/js/helper/helper';

export default function( { attributes, className } ) {
	const {
		titleTagName,
		title,
		imageID,
		imageURL,
		imageAlt,
		imageMediaType,
		caption,
		imagePosition,
		imageColumnSize,
		url,
		target,
	} = attributes;

	const { textColumnWidth, imageColumnWidth } = getColumnSize(
		imageColumnSize
	);

	const classes = classnames( 'smb-media-text', className );

	const rowClasses = classnames( 'c-row', 'c-row--margin', 'c-row--middle', {
		'c-row--reverse': 'left' === imagePosition,
	} );

	const textColumnClasses = classnames( 'c-row__col', 'c-row__col--1-1', [
		`c-row__col--lg-${ textColumnWidth }`,
	] );

	const imageColumnClasses = classnames( 'c-row__col', 'c-row__col--1-1', [
		`c-row__col--lg-${ imageColumnWidth }`,
	] );

	const image = (
		<img
			src={ imageURL }
			alt={ imageAlt }
			className={ `wp-image-${ imageID }` }
		/>
	);

	const video = <video controls src={ imageURL } />;

	let figure;
	if ( !! imageURL ) {
		if ( 'image' === imageMediaType || undefined === imageMediaType ) {
			if ( !! url ) {
				figure = (
					<a
						href={ url }
						target={ '_self' === target ? undefined : target }
						rel={
							'_self' === target
								? undefined
								: 'noopener noreferrer'
						}
					>
						{ image }
					</a>
				);
			} else {
				figure = image;
			}
		} else if ( 'video' === imageMediaType ) {
			figure = video;
		}
	}

	return (
		<div className={ classes }>
			<div className={ rowClasses }>
				<div className={ textColumnClasses }>
					{ ! RichText.isEmpty( title ) &&
						'none' !== titleTagName && (
							<RichText.Content
								className="smb-media-text__title"
								tagName={ titleTagName }
								value={ title }
							/>
						) }
					<div className="smb-media-text__body">
						<InnerBlocks.Content />
					</div>
				</div>
				<div className={ imageColumnClasses }>
					<div className="smb-media-text__figure">{ figure }</div>

					{ ! RichText.isEmpty( caption ) && (
						<div className="smb-media-text__caption">
							<RichText.Content value={ caption } />
						</div>
					) }
				</div>
			</div>
		</div>
	);
}
