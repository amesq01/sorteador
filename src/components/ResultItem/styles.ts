import styled from 'styled-components';

type borderProps = {
  border?: boolean;
}


export const Container = styled.div<borderProps>`
  display:flex;
  flex-direction:column;
  background-color:#fff;
  border-radius: .8rem;
  max-width: 100%;
  overflow:hidden;
  height: fit-content;
  border: ${({ border }) => border === true ? '.2rem dashed green' : 'none'};

`;


export const Label = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-right-radius:1.2rem;
  background-color:#bedaf7;
  gap: 1.2rem;
  font-weight:600;
  padding: .4rem 1.2rem;
  font-weight:bold;
  font-size: 1.4rem;
  text-align: center;
  text-transform:uppercase;
  max-width: fit-content;


`;
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr  ;

  padding:.8rem;
  gap: .8rem;
`;

export const Item = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  font-weight: 500;

`;
