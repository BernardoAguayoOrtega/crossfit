//import react
import React from 'react';
//import typographic from material ui
import { Typography } from '@material-ui/core';
//import image container
import { ImageContainer } from './styles';

//create and export Show Image component
export const ShowImage = () => {
	return (
		<ImageContainer>
			<Typography align='center' color='primary' variant='h3'>
				What are you waiting for?
			</Typography>
		</ImageContainer>
	);
};
