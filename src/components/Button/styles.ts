import styled from 'styled-components';


export const Container = styled.button`
  display: flex;
  padding: 1.2rem 2.4rem;
  border:none;
  outline: none;
  border-radius: 0.8rem;
  background-color: rgba(255, 255,255, 0.5);

  :hover{
    background-color: rgba(255, 255, 255, .7);
    scale: 1.1 ;
  }
`;

export const DrawnJuror = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;

`;
