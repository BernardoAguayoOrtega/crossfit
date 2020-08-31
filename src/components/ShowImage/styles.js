//import styled component
import styled from 'styled-components';

//image const
const image = '../../images/image4.jpg';

//create and export ImageContainer
export const ImageContainer = styled.div`
	background-size: contain;
	background-image: url(${image});
`;