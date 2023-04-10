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
  color:#333;

  :hover{
    background-color: rgba(255, 255, 255, 1);
    font-weight: medium;
    color: #295872;
    font-weight: bold;
    padding: 1.2rem 1.6rem;



  }
`;

export const DrawnJuror = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;


`;
