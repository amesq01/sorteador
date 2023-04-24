import styled from 'styled-components';


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
  text-align: right;
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
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

export const UserInfo = styled.div`
  padding: 2rem;
  padding-right: 2% ;
  display: flex;
  flex-direction:column;
  align-items: flex-end;
  text-align: right;

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

export const Content = styled.div`
  display:flex;
  flex:1;
  flex-direction: column;
  position: relative;

`;

export const Footer = styled.footer`
display: flex;
padding-top: 2rem;
padding-bottom:1.2rem;
width: 50%;
font-size: 1.2rem;
`;

