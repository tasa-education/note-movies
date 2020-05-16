'use strict';

import classnames from 'classnames';

import { RichText, InnerBlocks } from '@wordpress/block-editor';

import { getVideoId } from './utils';

export default function( { attributes, className } ) {
	const {
		titleTagName,
		title,
		subtitle,
		lede,
		videoURL,
		videoWidth,
		videoHeight,
		height,
		contentsAlignment,
		maskColor,
		maskColor2,
		maskColorAngle,
		maskOpacity,
		textColor,
		isSlim,
	} = attributes;

	const classes = classnames(
		'smb-section',
		'smb-section-with-bgimage',
		'smb-section-with-bgvideo',
		`smb-section-with-bgimage--${ contentsAlignment }`,
		`smb-section-with-bgimage--${ height }`,
		className
	);

	const bgvideoClasses = classnames( 'smb-section-with-bgimage__bgimage' );

	const containerClasses = classnames( 'c-container', {
		'u-slim-width': !! isSlim,
	} );

	const sectionStyles = {
		color: textColor || undefined,
	};

	const maskStyles = {};
	if ( maskColor ) {
		maskStyles.backgroundColor = maskColor;
		if ( maskColor2 ) {
			maskStyles.backgroundImage = `linear-gradient(${ maskColorAngle }deg, ${ maskColor } 0%, ${ maskColor2 } 100%)`;
		}
	}

	const bgvideoStyles = {
		opacity: maskOpacity,
	};

	return (
		<div className={ classes } style={ sectionStyles }>
			<div
				className="smb-section-with-bgimage__mask"
				style={ maskStyles }
			/>
			<div className={ bgvideoClasses } style={ bgvideoStyles }>
				{ videoURL && (
					<>
						<iframe
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							src={ `https://www.youtube.com/embed/${ getVideoId(
								videoURL
							) }?controls=0&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${ getVideoId(
								videoURL
							) }&playsinline=1&modestbranding=1` }
							width={ videoWidth }
							height={ videoHeight }
							frameBorder="0"
							title={ videoURL }
						/>
						<img
							src={ `https://i.ytimg.com/vi/${ getVideoId(
								videoURL
							) }/maxresdefault.jpg` }
							alt=""
						/>
					</>
				) }
			</div>
			<div className={ containerClasses }>
				{ ! RichText.isEmpty( title ) &&
					! RichText.isEmpty( subtitle ) &&
					'none' !== titleTagName && (
						<RichText.Content
							tagName="div"
							className="smb-section__subtitle"
							value={ subtitle }
						/>
					) }

				{ ! RichText.isEmpty( title ) && 'none' !== titleTagName && (
					<RichText.Content
						tagName={ titleTagName }
						className="smb-section__title"
						value={ title }
					/>
				) }

				{ ! RichText.isEmpty( title ) &&
					! RichText.isEmpty( lede ) &&
					'none' !== titleTagName && (
						<RichText.Content
							tagName="div"
							className="smb-section__lede"
							value={ lede }
						/>
					) }

				<div className="smb-section__body">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
