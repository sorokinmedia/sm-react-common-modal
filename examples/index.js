import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalForm } from '../lib';

function App() {
	return (
		<div>
			<ModalForm showAlert="Error" />
		</div>)
}

App.propTypes = {}
App.defaultProps = {}

render(<App />, document.getElementById('root'));
