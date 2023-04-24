import styled, { keyframes } from 'styled-components';

type mtProps = {
  mt?: boolean;
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
  padding:1.2rem 2%;
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
  letter-spacing:.7rem;
  text-align: right;
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100% ;

`;
export const ProcessInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-left: 2%;
  margin-block: 1.2rem;
  border: .1rem dashed #c6c6c6;
  padding: .4rem .8rem;
  font-size: 1.4rem;

`;

export const UserInfo = styled.div`
  padding: .8rem;
  padding-right: 2% ;
  display: flex;
  flex-direction:column;
  align-items: flex-end;
  flex:1;
  text-align: right;
  font-size: 1.4rem;

  button {
    display: flex;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: bold;
  }
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

export const ButtonNewDrawn = styled.div`

  position: absolute;
  top: 35%;
  transform: translate(-50%);
  left: 50%;
  outline:.2rem dashed rgba(0, 0, 0, 0.15);
  padding: 1.2rem 3rem;
  font-size: 2.5rem;
  font-weight:bold;
  color:#555;
  border-radius:3rem;
  cursor:pointer;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
 align-items: center;
 gap: 1rem;


  :hover{
    background: rgba(255, 255, 255, 0.4);
    outline: .2rem dashed  rgba(0, 0, 0, 0.25);
    color: #444;
    scale: 1.01;
  }
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
  min-height: 30rem;
  max-height: 30rem;
  padding: 2rem 2rem;
  background-color: #f3f9ff;
  width: 100%;
  max-width: 70rem;
  min-width: 70rem;
  border: none;
  outline: none;
  font-weight: medium;
  font-size: 2rem;
  border-radius: .4rem;
  box-shadow: 0rem 0rem .4rem rgba(0,0,0,0.1);
  margin-top: ${({ mt }) => mt === true ? '0rem' : '1.2rem'};
  `;

export const AddListButton = styled.button`
  width: 70rem;
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
  padding: .8rem 1.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: .8rem ;
  grid-row-gap: .8rem ;
  grid-column-gap: 2rem;
  width: 100%;
  font-weight:600;

  ul {
    list-style-type: none ;
  }

  .divShow {
    background-color: rgba(0,0,0, 0.035);
    padding: .8rem;
    width: fit-content;
    border-radius: .8rem;
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    cursor:pointer;

  }
`;

export const SortButton = styled(AddListButton)`
  align-self: start;
  width: 25rem;
`;
export const SaveSortButton = styled(AddListButton)`
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
  padding: 4rem 6rem;
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
  gap: 1.2rem;
  margin-top: 2rem;
  justify-content: center;
  padding: 1.2rem 2rem;
  animation: ${teste2} 4.8s;

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
  margin-top: 4rem;
  gap: 3.2rem;
  align-items:center;

`;


export const ModalShowProcessInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  color: #252525;
  font-size: 2.5rem;
  padding: 1.2rem 6rem;
  animation: ${teste} 2s forwards;

  span {
    font-size: 1.2rem;
  }

  strong {
    font-size: 2rem;
  }


`;


export const ModalShowProcessInfosTitle = styled(ModalAbsentJurorTitle)`
  font-size: 2.8rem;
  text-transform: uppercase;
  color: #444;
`;

export const TextAreaProcessInfos = styled.textarea`
  display: flex;
  background-color: #f3f9ff;
  width: 100%;
  max-width: 75rem;
  min-width: 75rem;
  height: 30rem;
  min-height: 30rem;
  border: none;
  outline: none;
  font-weight: medium;
  font-size: 2rem;
  border-radius: .4rem;
  box-shadow: 0rem 0rem .4rem rgba(0,0,0,0.1);
  margin-top: 2.4rem;
  padding: 1.2rem;

  &::placeholder {
       color: rgba(0,0,0,0.3);
   }

`;

export const SaveProcessInfosButton = styled.button`
  padding: 1.2rem 2.4rem;
  border-radius: .4rem;
  border: none;
  outline: none;
  margin-top: 2.4rem;
  background-color: rgba(59,143,231, .8);
  font-size: 1.6rem;
  text-transform: uppercase;
  color:#fff;
  font-weight: bold;
  letter-spacing: 0.1rem;
  cursor: pointer;

  :hover{
    background-color: rgba(59,143,231, 1);


  }
`;

export const Footer = styled.footer`
display: flex;
padding-top: 2rem;
padding-bottom:1.2rem;
width: 50%;
font-size: 1.2rem;
`;

