//import react
import React from 'react'
//import Grid from material ui component
import {Grid} from '@material-ui/core'
//import Feature
import {Feature} from '../Feature'

//create and export functional component
export const FeatureList = () => {
  return(
    <Grid>
      <Feature title='example' description='example' />
    </Grid>
  )
}