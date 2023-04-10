import styled from 'styled-components';

type borderProps = {
  border?: boolean;
}


export const Container = styled.div<borderProps>`
  display:flex;
  flex-direction:column;
  background-color:#fff;
  border-radius: .8rem;
  width: 25rem;
  max-width: 35rem;
  overflow:hidden;
  height: fit-content;
  border: ${({ border }) => border === true ? '.15rem dashed green' : 'none'};



`;


export const Label = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  height:8rem;
  background-color:#bedaf7;
  font-weight:600;
  padding: .8rem 1.2rem;
  font-weight:bold;
  font-size: 1.6rem;
  text-align:center;
  width: 100%;
  text-transform:uppercase;


`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction:column;
  padding:.8rem;
  gap: 1.2rem

`;

export const Item = styled.span`
  display: flex;
  align-items: center;



`;
