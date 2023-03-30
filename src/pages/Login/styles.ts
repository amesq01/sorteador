import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3b8fe7;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: "Ruda", sans-serif;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(90deg, #3b8fe7 0%, rgba(255, 31, 0, 0.65) 100%);
  width: 90vw;
  max-width: 1150px;
  height: 90vh;
  max-height: 650px;
  box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    max-height: 1024px;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
      180deg,
      #3b8fe7 0%,
      rgba(255, 31, 0, 0.65) 120%
    );
  }
`;
export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  margin-top: -40px;
  h1 {
    text-align: center;
    font-family: "Ruda", sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
  h2 {
    text-align: center;
    font-family: "Ruda", sans-serif;
    font-size: 16px;
    font-weight: normal;
  }
  @media (max-width: 600px) {
    width: 100%;
    gap: 4px;
    margin-top: 50px;
    h1 {
      font-size: 18px;
      font-weight: bold;
    }
    h2 {
      font-size: 15px;
    }
  }
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    width: 95px;
    height: 90px;
  }
`;

export const InputsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 0.2px solid #848484;
  position: relative;
  h1 {
    text-align: center;
    font-family: "Ruda", sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #edc8c8;
  }
  h2 {
    text-align: center;
    font-family: "Ruda", sans-serif;
    font-size: 12px;
    font-weight: normal;
    margin-top: 10px;
    color: #edc8c8;
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
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #4d3535;
    }
  }
  button {
    width: 80%;
    max-width: 600px;
    height: 45px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: #a32320;
    outline: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    border-radius: 3px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 10px;
    color: #edc8c8;
    display: flex;
    width: 80%;
    justify-content: flex-end;
    cursor: pointer;
  }
  footer {
    position: absolute;
    bottom: 5px;
    font-family: "Ruda", sans-serif;
    color: #ccc;
    font-size: 8px;
    width: 100%;
    text-align: center;
    line-height: 1.4;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 120px;
    h1 {
      font-size: 20px;
    }
    h2 {
      margin-top: 5px;
      margin-bottom: 80px;
    }
    input {
      width: 90%;
    }
    button {
      width: 90%;
    }
    span {
      display: flex;
      width: 90%;
      justify-content: flex-end;
      text-align: right;
    }
    footer {
      position: fixed;
      bottom: 5px;
      font-family: "Ruda", sans-serif;
      color: #ccc;
      font-size: 8px;
      width: 90%;
      text-align: center;
      line-height: 1.4;
    }
  }
`;
