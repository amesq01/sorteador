import styled, { keyframes } from 'styled-components';

const rotate = keyframes`

from {
  transform: rotate(0deg) ;
}
  to {
    transform: rotate(360deg);

  }
`;




export const Container = styled.div`

  position: fixed;
  z-index: 1000;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Title = styled.h2`
display:block-inline;
margin-top: 2rem;
`;

export const Spinner = styled.div`
  display: flex;
  width: 7rem;
  height: 7rem;
  border: .8rem solid rgba(198,125,0,0.8);
  border-top-color: transparent;
  border-radius: 4rem;
  animation: ${rotate} 1.9s linear infinite forwards ;



`;

