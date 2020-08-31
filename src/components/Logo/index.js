//import react
import React from 'react';
//import the typography
import { Typography } from '@material-ui/core';
//import container
import { Container } from './styles'

export function Logo(props) {
	return (
		<Container>
			<Typography align='right' color='secondary'>Bernardo CrossFit</Typography>
		</Container>
	);
}
