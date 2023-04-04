import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color:#fff;
  border-radius: .8rem;
  max-width: 35rem;
  overflow:hidden;
  height: fit-content;



`;


export const Label = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  height:8rem;
  background-color:#bedaf7;
  font-weight:600;
  padding: .4rem 1.2rem;
  font-size: 2rem;
  text-align:center;
  width: 100%;
  text-transform:uppercase;


`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction:column;
  padding:1.2rem;
  gap: 1.2rem

`;

export const Item = styled.span`

`;
