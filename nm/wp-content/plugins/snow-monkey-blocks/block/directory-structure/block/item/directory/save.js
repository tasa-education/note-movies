'use strict';

import classnames from 'classnames';

import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default function( { attributes, className } ) {
	const blockClasses = classnames(
		'smb-directory-structure__item',
		'smb-directory-structure__item--directory',
		className
	);

	const itemNameClasses = 'smb-directory-structure__item__name';

	const itemListClasses = 'smb-directory-structure__item__list';

	const iconStyles = {
		color: attributes.iconColor || undefined,
	};

	return (
		<div className={ blockClasses }>
			<p>
				<span className="fa-fw" style={ iconStyles }>
					<i
						className={ `${ attributes.iconVendor } fa-${ attributes.iconClass }` }
					/>
				</span>
				<span className={ itemNameClasses }>
					<RichText.Content value={ attributes.name } />
				</span>
			</p>
			<div className={ itemListClasses }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
