//import react
import React from 'react';
//import Typography material ui design
import { Typography } from '@material-ui/core';

//create and export Feature component
export const Feature = ({ title, description, background }) => {
	return (
		<Container background={background}>
			<Typography>{title}</Typography>
      <Typography>{description}</Typography>
		</Container>
	);
};
