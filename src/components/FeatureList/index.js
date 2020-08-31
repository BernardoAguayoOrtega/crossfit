//import react
import React, { useState, useEffect } from 'react';
//import Grid from material ui component
import { Grid } from '@material-ui/core';
//import Feature
import { Feature } from '../Feature';
//import the data
import { data as allItems } from '../../data';

//create and export functional component
export const FeatureList = () => {
	//use state hook
	const [data, setData] = useState([]);
	//use effect hook
	useEffect(() => {
		setData(allItems);
	}, []);

	console.log(data);

	return (
		<Grid>
			{data.map((item) => (
				<Feature key={item.id}
					title={item.title}
					description={item.description}
					background={item.background}
				/>
			))}
		</Grid>
	);
};
