'use strict';

import { useEffect, useRef } from '@wordpress/element';

import { apply } from '../categories-list';

export default function( { articleCategoriesList } ) {
	const ulRef = useRef();

	useEffect( () => {
		setTimeout( () => apply( ulRef.current ), 0 );
	}, [ ulRef ] );

	return (
		<ul className="smb-categories-list__list" ref={ ulRef }>
			{ articleCategoriesList }
		</ul>
	);
}
