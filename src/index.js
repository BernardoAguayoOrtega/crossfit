//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import hash router component
import { HashRouter as Router } from 'react-router-dom';
//import app component
import { App } from './components/App';
//import theme provider
import { ThemeProvider } from '@material-ui/core/styles';
//import theme
import { theme } from './Theme';

//create root const
const root = document.getElementById('root');

//render the app
render(
	<Router basename='/'>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Router>,
	root,
);
