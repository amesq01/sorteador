import styled from 'styled-components';


export const Container = styled.button`
  display: flex;
  padding: 1.2rem 1.6rem;
  border:none;
  outline: none;
  border-radius: 0.8rem;
  background-color: rgba(255, 255,255, 0.5);

  :hover{
    background-color: rgba(255, 255, 255, 1);
    scale: 1.1 ;
    font-weight: bold;
    color: #295872;


  }
`;

export const DrawnJuror = styled.span`
  font-size: 2rem;
  text-transform: uppercase;

`;
