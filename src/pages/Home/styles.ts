import styled, { keyframes } from 'styled-components';

type mtProps = {
  mt: boolean;
}

const teste = keyframes`
 0%{
  opacity: 0;
  display: none
 }

 100%{
  opacity:1;
  display: flex;
 }

`;
const teste2 = keyframes`
 0%{
  opacity: 0;
  pointer-events: none
 }

 50%{
  opacity: 0;
  pointer-events: none;
 }



 100%{
  opacity:1;
  pointer-events: none;
 }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:  rgba(59,143,231, 0.15);
  height: 100%;
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  max-width: 100%;
`;

export const Header = styled.header`
  display:flex;
  background-color: rgba(59,143,231, 0.2);
  width: 100% ;
  height: fit-content;
  padding:2rem 2%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0rem 0rem 1.6rem rgba(0,0,0,0.2);
`;

export const LogoImg = styled.img`
  height: 6.5rem;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  color: #333;
  text-transform: uppercase ;
  font-family: 'Gruppo', sans-serif;
  letter-spacing:.7rem ;
`;

export const ProcessInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-left: 2%;
  margin-block: 2rem;
  border: .1rem dashed #c6c6c6;
  padding: 2rem
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex:1;
  margin: 0 auto;
  width: 96% ;
  justify-content: space-between;
`;

export const Content = styled.div<mtProps>`
  display:flex;
  flex:1;
  flex-direction: column;
  position: relative;
  margin-top: ${({ mt }) => mt === true ? '1rem' : '0rem'};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextAreaJurors = styled.textarea<mtProps>`
  display: flex;
  line-height:3rem;
  min-height: 40rem;
  max-height: 40rem;
  padding: 2rem 2rem;
  background-color: #f3f9ff;
  width: 100%;
  max-width: 75rem;
  min-width: 75rem;
  border: none;
  outline: none;
  font-weight: medium;
  font-size: 2rem;
  border-radius: .4rem;
  box-shadow: 0rem 0rem .4rem rgba(0,0,0,0.1);
  margin-top: ${({ mt }) => mt === true ? '0rem' : '10rem'};
  `;

export const AddListButton = styled.button`
  width: 75rem;
  padding: 1.2rem;
  border-radius: .4rem;
  border: none;
  outline: none;
  margin-top: 1.2rem;
  background-color: rgba(59,143,231, 01);
  font-size: 1.6rem;
  text-transform: uppercase;
  color:#fff;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

export const ShowsAllNamesContainer = styled.div`
  color:#252525;
  background-color: rgba(59,143,231, 0.1);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: .8rem ;
  grid-column-gap: 2rem;
  width: 100%;
  font-weight:500;

  ul {
    list-style-type: none ;
  }

  .divShow {
    background-color: rgba(0,0,0, 0.03);
    padding: 1rem;
    margin-top: 1rem ;
    width: fit-content;
    border-radius: .8rem;
    display: flex;
    gap: .8rem;
    align-items: center;
    cursor:pointer;
  }
`;

export const SortButton = styled(AddListButton)`
  align-self: start;
  width: 25rem;
`;

export const ContainerShowDrawnJurors = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 100%;
  margin-top:1.2rem;

`;

export const ModalShowDrawnJuror = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #252525;
  font-size: 2.5rem;
  padding: 2rem 6rem;
  animation: ${teste} 2s forwards;
  position: relative;
`;

export const ModalJurorTitle = styled.strong`
  font-size: 4.8rem;
  animation: ${teste2} 4s;
  text-align: center ;
  color: #333;
`;

export const Buttons = styled.div`
  display:flex;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: space-around;
  padding: 2rem;
  animation: ${teste2} 5s;
`;

export const ModalShowAbsentJuror = styled(ModalShowDrawnJuror)`
  width: 100%;
`;

export const ModalAbsentJurorTitle = styled(ModalJurorTitle)`
  animation: none;
  display: flex;
  justify-content: center;
  margin: 0 20rem;
  width: 100%;

`;

export const AbsentsButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 3.2rem;
  align-items:center;
`;

export const Footer = styled.footer`
display: flex;
padding-top: 2rem;
padding-bottom:1.2rem;
width: 50%;
font-size: 1.2rem;
`;

