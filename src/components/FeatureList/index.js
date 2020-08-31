//import react
import React, { useState, useEffect } from 'react';
//import Grid from material ui component
import { Grid } from '@material-ui/core';
//import Feature
import { Feature } from '../Feature';
//import the data
import { data as allItems } from '../../data';
//import make styles
import { makeStyles } from '@material-ui/core/styles';

//create and export functional component
export const FeatureList = () => {
	//use state hook
	const [data, setData] = useState([]);
	//use effect hook
	useEffect(() => {
		setData(allItems);
	}, []);

	return (
		<Grid
			container
			alignContent='center'
			alignItems='center'
			justify='space-evenly'>
			{data.map((item) => (
				<Feature
					key={item.id}
					title={item.title}
					description={item.description}
					background={item.background}
				/>
			))}
		</Grid>
	);
};
