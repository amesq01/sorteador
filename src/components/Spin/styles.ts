import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from{
  transform: rotate(0deg) ;


}
  to {
    transform: rotate(360deg);
    opacity:0 ;
    display:none;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 6rem;
  height: 6rem;
  border: 1.2rem dotted rgba(198,125,0,0.8);
  border-radius: 3rem;
  animation: ${rotate} 1.9s linear forwards ;
  position: absolute;
  top: 50% - 3rem;
  left: 50% - 3rem;


`;
