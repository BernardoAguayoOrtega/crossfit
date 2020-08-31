//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import hash router component
import { HashRouter as Router } from 'react-router-dom';
//import app component
import { App } from './components/App';

//create root const
const root = document.getElementById('root');

//render the app
render(
	<Router basename='/'>
		<App />
	</Router>,
	root,
);
