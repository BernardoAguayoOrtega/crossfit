//import react
import React from 'react';
//import Typography material ui design
import { Typography } from '@material-ui/core';
//import button material ui design
import Button from '@material-ui/core/Button';
//import container
import { Container } from './styles';

//create and export Feature component
export const Feature = ({ title, description, background }) => {
	return (
		<Container background={background}>
			<Typography>{title}</Typography>
			<Typography>{description}</Typography>
			<Button variant='contained' color='primary' href='#'>
				See more
			</Button>
		</Container>
	);
};
