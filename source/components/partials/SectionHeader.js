// Core
import React from 'react';

export default (header) => {
	return (
		<section className = 'sectionHeading'>
			<h1>
				<span className = 'sectionNumber'>{ header.sectionNumber }</span>
				<span className = 'sectionName'>{ header.sectionName }</span>
			</h1>
		</section>
	);
}