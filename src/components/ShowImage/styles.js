//import styled component
import styled from 'styled-components';

//image const
const image = 'https://images.unsplash.com/photo-1580086320409-b5f0cb225046';

//create and export ImageContainer
export const ImageContainer = styled.div`
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${image});
  display: flex;
  justify-content:center;
  align-items: flex-end;
  height: 80vh;
`;

//create and export title
export const Title = styled.div`
  background: rgba(0,0,0,.5);
  width: 50%
`
