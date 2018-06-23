// Core
import React from 'react';

const functionsList = {
	RandomKey: function() {
		return (Math.floor(Math.random() * 100000)).toString();
	}
};

export default (data) => {
	return functionsList[data.name] ? functionsList[data.name](data.args) : null;
}