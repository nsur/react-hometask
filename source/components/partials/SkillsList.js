// Core
import React from 'react';

// Components
import Functions from './Functions';

function ListItem(props) {
	// Correct! There is no need to specify the key here:
	return <li className = { props.classes }></li>;
}

export default (data) => {
	const itemsCounter = new Array(data.count);

	for(var i = 0;i < itemsCounter.length; i++){
		itemsCounter[i] = i + 1;
	}
	const listItems = itemsCounter.map((number, index) =>
			// Correct! Key should be specified inside the array.
			<ListItem
			classes = { index < data.active ? '' : 'inactive' }
			key = { Functions({ name: 'RandomKey' }) }
			/>
	);
	return (
		<ul>{ listItems }</ul>
	);
}