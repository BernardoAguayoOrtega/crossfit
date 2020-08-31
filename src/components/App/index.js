//import react
import React from 'react';
//import Main page component
import { HomePage } from '../../pages/HomePage';
//import global styled
import { GlobalStyle } from './styles';

//create functional component and export it
export const App = () => {
	return (
		<>
			<GlobalStyle />
			<HomePage />
		</>
	);
};
