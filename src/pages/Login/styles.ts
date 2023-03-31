import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0, 0, 0.1);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: "Ruda", sans-serif;

`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(90deg, #3b8fe7 0%, rgba(0,0,0, 0.2) 100%);
  width: 95vw;
  max-width: 1200px;
  height: 95vh;
  max-height: 700px;
  box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  position: relative;

`;
export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #252525;
  font-family: "Gruppo", sans-serif;




  h1 {
    text-align: center;
    font-size:32px;
    font-weight: 500;
    margin-top: 40px;
    margin-bottom: 40px;
    line-height:35px;

    span{

      display: block;
    }
  }
  h2 {
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    font-weight: 500;
  }
  `;
export const Logo = styled.img`
  height: 85px;
  opacity: 0.6;

`;

export const Footer = styled.footer`

    position: absolute;
    padding:5px 0 5px 20px;
    left: 0;
    bottom: 0;
    font-family: "Ruda", sans-serif;
    color: #333;
    font-size: 12px;
    font-weight: bold;
    width: 100%;
    font-family: "Gruppo", sans-serif;
    line-height: 1.4;

`;

export const InputsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 0.2px solid rgba(255, 255, 255, 0.1);


  h1 {
    text-align: center;
    font-family: "Gruppo", sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #333;
  }
  h2 {
    text-align: flex-end;
    font-family: "Gruppo", sans-serif;
    font-size: 12px;
    font-weight: normal;
    margin-top: 10px;
    color: #333;
    font-weight: 700;
    margin-bottom: 35px;
  }
  input {
    width: 80%;
    max-width: 600px;
    height: 45px;
    margin-bottom: 10px;
    padding-left: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    outline: none;
    border: none;
    border-radius: 3px;
    font-family: "Gruppo", sans-serif;
    font-weight: bold;
    letter-spacing: 2px;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #4d3535;
      font-family: "Gruppo", sans-serif;

    }
  }
  button {
    width: 80%;
    max-width: 600px;
    height: 45px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: #3b8fe7;
    outline: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    border-radius: 3px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Gruppo", sans-serif;
    letter-spacing: 4px

  }
  span {
    font-size: 13px;
    font-weight: bold;
    color: #252525;
    display: flex;
    width: 80%;
    justify-content: flex-end;
    cursor: pointer;
    font-family: "Gruppo", sans-serif;

  }


`;
