//import react
import React from 'react';
//import ImageContainer
import { ShowImage } from '../../components/ShowImage';
//import logo
import { Logo } from '../../components/Logo';
//import container
import { Page } from './styles';
//import Feature List
import {FeatureList} from '../../components/FeatureList'

//created homePage functional component and export it
export const HomePage = () => (
	<Page>
		<Logo />
		<ShowImage />
		<FeatureList/>
	</Page>
);
