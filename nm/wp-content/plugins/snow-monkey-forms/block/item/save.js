import classnames from 'classnames';

import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default function( { attributes, className } ) {
	const { label, description, isDisplayLabelColumn } = attributes;

	const classes = classnames( 'smf-item', className, {
		'smf-item--divider': ! isDisplayLabelColumn,
	} );

	return (
		<div className={ classes } tabIndex="-1">
			{ isDisplayLabelColumn && (
				<div className="smf-item__col smf-item__col--label">
					<div className="smf-item__label">
						<RichText.Content value={ label } />
					</div>
					{ ! RichText.isEmpty( description ) && (
						<div className="smf-item__description">
							<RichText.Content value={ description } />
						</div>
					) }
				</div>
			) }

			<div className="smf-item__col smf-item__col--controls">
				<div className="smf-item__controls">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
