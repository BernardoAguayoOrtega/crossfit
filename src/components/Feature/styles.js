//import styled component
import styled from 'styled-components';

//create container styled component and export it
export const Container = styled.div`
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${props => props.background});
`;
