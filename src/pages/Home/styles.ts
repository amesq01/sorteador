import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #252525;
  min-height: 100vh;
  height: 100%;
`;

export const ContentContainer = styled.main`

  width: 70%;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3.2rem;
  margin-bottom: 2rem;
  color: #ccc;

`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextAreaJurors = styled.textarea`
  display: block;
  height: 8rem;
  background-color: #c8c8c8;
  align-self: center;
  width: 100%;
  border: none;
  outline: none;

  border-radius: .4rem;
  `;

export const AddButton = styled.button`
  width: 12rem;
  padding: 1.2rem;
  border-radius: .4rem;
  border: none;
  outline: none;
  margin-top: 1.2rem;
`;


export const ShowsResult = styled.div``;
