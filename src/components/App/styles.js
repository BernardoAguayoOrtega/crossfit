//import create global style
import { createGlobalStyle } from 'styled-components';

//create and export the global style
export const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
  }
	body{
		background: #0f2027; /* fallback for old browsers */
		background: -webkit-linear-gradient(
		to right,
		#2c5364,
		#203a43,
		#0f2027
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#2c5364,
		#203a43,
		#0f2027
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
`;
