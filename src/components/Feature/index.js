//import react
import React from 'react';
//import Typography material ui design
import { Typography } from '@material-ui/core';
//import button material ui design
import Button from '@material-ui/core/Button';
//import container
import { Container, SubContainer } from './styles';

//create and export Feature component
export const Feature = ({
	title,
	description,
	background = 'https://images.unsplash.com/photo-1580086320409-b5f0cb225046',
}) => {
	return (
		<Container background={background}>
			<SubContainer>
				<Typography color='textPrimary'>{title}</Typography>
				<Typography color='textPrimary'>{description}</Typography>
				<Button variant='contained' color='secondary' href='#'>
					See more
				</Button>
			</SubContainer>
		</Container>
	);
};
