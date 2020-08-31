//import styled component
import styled from 'styled-components';

//create container styled component and export it
export const Container = styled.div`
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${(props) => props.background});
	margin: .5rem;
	border-radius: 1rem;
`;

//export sub container
export const SubContainer = styled.div`
	background: rgba(0,0,0,.7);
	padding: .6rem;
	border-radius: 1rem;
`
