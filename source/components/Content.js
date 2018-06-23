// Core
import React, { Component } from 'react';

// Data
import content from '../data/content';
const dataTop = content.dataTop;
const dataBottom = content.dataBottom;

// Components
import SectionHeader from './partials/SectionHeader';
import SectionBlock from './partials/SectionBlock';
import Functions from './partials/Functions';

export default class Content extends Component {
	render () {
		const topRow = dataTop.map((d) => (
			(<section className = { d.params.className ? d.params.className : '' } key = { Functions({ name: 'RandomKey' }) }>
				<SectionHeader
				sectionNumber = { d.header.sectionNumber }
				sectionName = { d.header.sectionName }
				key = { Functions({ name: 'RandomKey' }) }
				/>
				<SectionBlock
				type = { d.params.type }
				items = { d.items }
				key = { Functions({ name: 'RandomKey' }) }
				/>
			</section>)
		));
		const bottomRow = dataBottom.map((d) => (
			<div className = { d.params.className ? d.params.className : '' } key = { Functions({ name: 'RandomKey' }) }>
				<SectionHeader
				sectionNumber = { d.header.sectionNumber }
				sectionName = { d.header.sectionName }
				key = { Functions({ name: 'RandomKey' }) }
				/>
				<SectionBlock
				type = { d.params.type }
				items = { d.items }
				key = { Functions({ name: 'RandomKey' }) }
				/>
			</div>
		));

		return (
			<div className = 'content'>
				<div>
					<div className = 'topRow'>{ topRow }</div>
					<div className = 'bottomRow'>{ bottomRow }</div>
				</div>
			</div>
		);
	}
}