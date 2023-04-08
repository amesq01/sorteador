import styled from 'styled-components';

type bgColorProps ={
  backgroundColor: string
}

export const Container = styled.div<bgColorProps>`
  background-color: ${props => props.backgroundColor};
  padding: 1.2rem 1.6rem;
  font-size: 2rem;
  color:#f6f6f6;
  border-radius: .8rem ;
`;
