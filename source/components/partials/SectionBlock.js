// Core
import React from 'react';

// Components
import SkillsList from './SkillsList';
import Functions from './Functions';

export default (elem) => {
	const items = elem.items;

	return elem.type == 'skills' ? items.map((item) => (
		<div className = 'skill' key = { Functions({ name: 'RandomKey' }) }>
			<span>{ item.name }</span>
			<SkillsList
			count = { 10 }
			active = { item.active }
			/>
		</div>
	)) : elem.type == 'positions' ? items.map((item) => (
		<div className = 'workplace' key = { Functions({ name: 'RandomKey' }) }>
			<div className = 'leftColumn'>
				<span className = 'period'>{ item.period }</span>
				<span className = 'position'>{ item.position }</span>
			</div>
			<div className = 'rightColumn'>
				<span className = 'location'>{ item.location }</span>
				<span className = 'company'>{ item.company }</span>
			</div>
		</div>
	)) : elem.type == 'contacts' ? items.map((item) => (
		<div className = 'contact' key = { Functions({ name: 'RandomKey' }) }>
			<span className = 'action'>{ item.action }</span>
			<span className = 'address'>{ item.address }</span>
		</div>
	)) : elem.type == 'education' ? items.map((item) => (
		item.copyright ? (<span className = 'copyright' key = { Functions({ name: 'RandomKey' }) }>{ item.copyright }</span>) : (
			<div className = 'eduspace' key = { Functions({ name: 'RandomKey' }) }>
				<span className = 'period'>{ item.period }</span>
				<span className = 'eduspace'>{ item.eduspace }</span>
				<span className = 'degree'>{ item.degree }</span>
			</div>
		)
	)) : null;
}