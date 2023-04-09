import styled from 'styled-components';

type bgColorProps = {
  backgroundColor: string
}

export const Container = styled.div<bgColorProps>`
  background-color: ${props => props.backgroundColor};
  padding: 1.2rem 1.6rem;
  font-size: 2rem;
  color:#f4f4f4;
  border-radius: .8rem ;
  cursor: pointer;
`;
