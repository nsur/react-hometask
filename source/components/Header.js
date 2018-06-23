// Core
import React, { Component } from 'react';

// Data
import person from '../data/header';
import avatar from '../theme/assets/images/elon-musk';

export default class Header extends Component {
	render () {
		return (
			<div className = 'header'>
				<div>
					<h1>{ person.name }</h1>
					<span>{ person.activity }</span>
					<p>{ person.description }</p>
				</div>
				<img src = { avatar } />
			</div>
		);
	}
}