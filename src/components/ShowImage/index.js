//import react
import React from 'react';
//import typographic from material ui
import { Typography } from '@material-ui/core';
//import image container
import { ImageContainer } from './styles';
//import title
import { Title } from './styles'

//create and export Show Image component
export const ShowImage = () => {
	return (
		<ImageContainer>
			<Title>
				<Typography 
				align='center' 
				color='primary' 
				variant='subtitle1'>
					What are you waiting for?
				</Typography>
			</Title>
		</ImageContainer>
	);
};
