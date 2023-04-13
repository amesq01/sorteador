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
  width: 7rem;
  height: 7rem;
  border: .8rem solid rgba(198,125,0,0.8);
  border-top-color: transparent;
  border-radius: 4rem;
  animation: ${rotate} 1.9s linear forwards ;
  position: absolute;
  top: 50% - 3rem;
  left: 50% - 3rem;


`;
