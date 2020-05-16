'use strict';

import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';

export default function( { attributes, className } ) {
	const { imageID, imageURL, imageAlt, caption, url, target } = attributes;

	const classes = classnames( 'smb-slider__item', className );

	const item = (
		<>
			<div className="smb-slider__item__figure">
				<img
					src={ imageURL }
					alt={ imageAlt }
					className={ `wp-image-${ imageID }` }
				/>
			</div>

			{ ! RichText.isEmpty( caption ) && (
				<div className="smb-slider__item__caption">
					<RichText.Content value={ caption } />
				</div>
			) }
		</>
	);

	return !! url ? (
		<a
			className={ classes }
			href={ url }
			target={ '_self' === target ? undefined : target }
			rel={ '_self' === target ? undefined : 'noopener noreferrer' }
		>
			{ item }
		</a>
	) : (
		<div className={ classes }>{ item }</div>
	);
}
