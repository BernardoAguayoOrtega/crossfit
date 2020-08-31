//create multi theme
import { createMuiTheme } from '@material-ui/core/styles'

//create and export theme const
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#67b7f7',
    },
    secondary: {
      main: '#b22a00',
    },
    text:{
      primary: '#fff'
    }
  },
});