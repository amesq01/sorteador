import styled from 'styled-components';


export const Container = styled.button`
  display: flex;
  padding: 1.2rem;
  border:none;
  outline: none;
  border-radius: 0.8rem;
  background-color: rgba(255, 255,255, 0.5);
  align-items: center;
  justify-content: center;

  :hover{
    background-color: rgba(255, 255, 255, 1);
    scale: 1.1 ;
    font-weight: medium;
    color: #295872;


  }
`;

export const DrawnJuror = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;

`;
