import styled from 'styled-components';

import bgImg15 from '../../assets/bg15.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: rgba(0,0, 0, 0.1);
  background-image:  url(${bgImg15});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(90deg, #3b8fe7 0%, rgba(0,0,0, 0.15) 100%);
  width: 95vw;
  max-width: 1200px;
  height: 95vh;
  max-height: 700px;
  box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  position: relative;

  @media (max-width:500px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;
export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width:500px){
    width: 100%;
  }

  h1 {
    text-align: center;
    font-size:32px;
    line-height: 40px;
    font-weight: 400;
    margin-top: 50px;
    margin-bottom: 50px;

    span{
      display: block;
    }

    @media (max-width:500px){
    display: none;
  }
  }

  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 400;

    @media (max-width:500px){
    display: none;
  }
  }
  `;

export const Logo = styled.img`
  height: 85px;
  opacity: 1;

  @media (max-width:850px){
    height: 65px;
  }

  @media (max-width:600px){
    height: 45px;
  }

`;


export const InputsContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 0.2px solid rgba(255, 255, 255, 0.1);

  @media (max-width:500px){
    width: 100%;
    margin-top: 80px;
  }

  h1 {
    text-align: center;
    font-family: "Gruppo", sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #333;

    @media (max-width:500px){
      font-size: 28px;
  }
  }

  h2 {
    text-align: flex-end;
    font-family: "Gruppo", sans-serif;
    font-size: 12px;
    font-weight: normal;
    margin-top: 12px;
    color: #333;
    font-weight: 700;
    margin-bottom: 44px;
  }

  input {
    width: 80%;
    max-width: 600px;
    height: 45px;
    margin-bottom: 16px;
    padding-left: 8px;
    background-color: rgba(255, 255, 255, 0.5);
    outline: none;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    letter-spacing: .3px;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #333;
    }
  }

  button {
    width: 80%;
    max-width: 600px;
    height: 45px;
    margin-bottom: 10px;
    background-color: #3b8fe7;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
    border-radius: 3px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Gruppo", sans-serif;
    letter-spacing: 4px;
    :hover {
      background-color: #3a8ad7;
    }
  }

  span {
    font-size: 10px;
    display: flex;
    width: 80%;
    justify-content: flex-end;
    cursor: pointer;
  }
`;

export const Error = styled.div`
  display: flex;
  color: red;
  margin-bottom: 16px;
  font-size: 12px;
  text-align: flex-start;
  width: 80%;
`;

export const About = styled.div`
  position: relative; cursor: pointer;
  width: fit-content;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(255,255,255, 0.6);
  font-size: 1.4rem ;


strong:hover{
  color: white;
}


`;

export const Footer = styled.footer`
    position: absolute;
    padding:5px 0 5px 20px;
    left: 0;
    bottom: 0;
    color: #333;
    font-size: 12px;
    font-weight: bold;
    width: 50%;
    font-family: "Gruppo", sans-serif;
    line-height: 1.4;
`;

