'use strict';

import ServerSideRender from '@wordpress/server-side-render';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	Placeholder,
	SelectControl,
	RangeControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	Spinner,
} from '@wordpress/components';

import {
	InspectorControls,
	InspectorAdvancedControls,
} from '@wordpress/block-editor';

import { toNumber } from '../../../src/js/helper/helper';

export default function( { attributes, setAttributes } ) {
	const {
		postType,
		postsPerPage,
		layout,
		ignoreStickyPosts,
		noPostsText,
		myAnchor,
	} = attributes;

	const allPostTypes = useSelect( ( select ) => {
		const { getPostTypes } = select( 'core' );
		return getPostTypes( { per_page: -1 } ) || [];
	}, [] );

	const postTypes = useMemo(
		() =>
			allPostTypes.filter(
				( type ) =>
					type.viewable &&
					! type.hierarchical &&
					'media' !== type.rest_base
			),
		[ allPostTypes ]
	);

	const onChangePostType = ( value ) =>
		setAttributes( {
			postType: value,
		} );

	const onChangePostsPerPage = ( value ) =>
		setAttributes( {
			postsPerPage: toNumber( value, 1, 12 ),
		} );

	const onChangeLayout = ( value ) =>
		setAttributes( {
			layout: value,
		} );

	const onChangeIgnoreStickyPosts = ( value ) =>
		setAttributes( {
			ignoreStickyPosts: value,
		} );

	const onChangeNoPostsText = ( value ) =>
		setAttributes( {
			noPostsText: value,
		} );

	const onChangeMyAnchor = ( value ) =>
		setAttributes( {
			myAnchor: value.replace( /[\s#]/g, '-' ),
		} );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Block Settings', 'snow-monkey-blocks' ) }
				>
					<SelectControl
						label={ __( 'Post Type', 'snow-monkey-blocks' ) }
						value={ postType }
						onChange={ onChangePostType }
						options={ postTypes.map( ( _postType ) => ( {
							label: _postType.name,
							value: _postType.slug,
						} ) ) }
					/>

					<RangeControl
						label={ __( 'Number of posts', 'snow-monkey-blocks' ) }
						value={ postsPerPage }
						onChange={ onChangePostsPerPage }
						min="1"
						max="12"
					/>

					<SelectControl
						label={ __( 'Layout', 'snow-monkey-blocks' ) }
						value={ layout }
						onChange={ onChangeLayout }
						options={ [
							{
								value: 'rich-media',
								label: __( 'Rich media', 'snow-monkey-blocks' ),
							},
							{
								value: 'simple',
								label: __( 'Simple', 'snow-monkey-blocks' ),
							},
							{
								value: 'text',
								label: __( 'Text', 'snow-monkey-blocks' ),
							},
							{
								value: 'panel',
								label: __( 'Panels', 'snow-monkey-blocks' ),
							},
						] }
					/>

					<ToggleControl
						label={ __(
							'Ignore sticky posts',
							'snow-monkey-blocks'
						) }
						checked={ ignoreStickyPosts }
						onChange={ onChangeIgnoreStickyPosts }
					/>

					<TextareaControl
						label={ __(
							'Text if no posts matched',
							'snow-monkey-blocks'
						) }
						help={ __( 'Allow HTML', 'snow-monkey-blocks' ) }
						value={ noPostsText || '' }
						onChange={ onChangeNoPostsText }
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorAdvancedControls>
				<TextControl
					label={ __( 'HTML Anchor', 'snow-monkey-blocks' ) }
					help={ __(
						'Anchors lets you link directly to a section on a page.',
						'snow-monkey-blocks'
					) }
					value={ myAnchor || '' }
					onChange={ onChangeMyAnchor }
				/>
			</InspectorAdvancedControls>

			{ ! allPostTypes ? (
				<Placeholder
					icon="editor-ul"
					label={ __( 'Recent posts', 'snow-monkey-blocks' ) }
				>
					<Spinner />
				</Placeholder>
			) : (
				<ServerSideRender
					block="snow-monkey-blocks/recent-posts"
					attributes={ attributes }
					className="components-disabled"
				/>
			) }
		</>
	);
}
