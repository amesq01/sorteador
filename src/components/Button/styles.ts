import styled from 'styled-components';

type Props = {
  font?: boolean,
  paddingHorizontal?:boolean
}

export const Container = styled.button<Props>`
  display: flex;
  padding: ${({paddingHorizontal})=> paddingHorizontal ? '1.2rem' : '1.2rem 4rem'};
  border:none;
  outline: none;
  border-radius: 0.8rem;
  background-color: rgba(255, 255,255, 0.5);
  align-items: center;
  justify-content: center;
  color:#333;
  position: relative;


  :hover{
    background-color: rgba(255, 255, 255, 1);
    font-weight: medium;
    color: #295872;
    font-weight: bold;
    padding: ${({paddingHorizontal})=> paddingHorizontal ? '1.2rem' : '1.2rem 5rem'};



  }
`;

export const DrawnJuror = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;


`;
