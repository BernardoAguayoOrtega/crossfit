//import react
import React from 'react';
//import typographic from material ui
import { Typography } from '@material-ui/core';
//import container 
import {Container} from './styles'

//created homePage functional component and export it
export const HomePage = () => (
	<Container>
		<Typography align='center' variant='h1' color='primary'>
			Im' the home page
		</Typography>
	</Container>
);
