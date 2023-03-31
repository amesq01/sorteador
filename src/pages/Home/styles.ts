import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 10rem;
`;

export const ContentContainer = styled.main`


  width: 90% ;
  height: 100%;
  margin-top: 3rem;

`;

export const Header = styled.header`
  width: 100% ;
  height: fit-content;

  padding:1.6rem 4rem;

  display:flex;
  align-items: center;
  justify-content: space-between;
  background-color: ghostwhite;
  border-bottom: .4rem solid rgba(0,0,0,0.01);
`;

export const LogoImg = styled.img`
  height: 7rem;

`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3.6rem;
  color: #252525;
  text-transform: uppercase ;
  font-family: 'Gruppo', cursive;
  letter-spacing:.8rem ;

`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;




`;

export const TextAreaJurors = styled.textarea`
  display: flex;
  line-height:3rem;
  min-height: 20rem;
  max-height: 40rem;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  max-width: 60rem;
  min-width: 60rem;
  border: none;
  outline: none;

  font-weight: bold;
  font-size: 1.8rem;
  border-radius: .4rem;
  `;

export const AddButton = styled.button`
  width: 60rem;
  padding: 1.2rem;
  border-radius: .4rem;
  border: none;
  outline: none;
  margin-top: 1.2rem;
  background-color: green;
  font-size: 2rem;
  text-transform: uppercase;
  color:#fff;
  font-weight: bold;
  letter-spacing: 0.1rem;


`;


export const ShowsResult = styled.div`

  color:#fff;
  margin-top: 1rem;
  background-color: #333;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: .8rem ;
  grid-column-gap: 2rem;
  width: 100%;


  ul {
    list-style-type: none ;
  }

  .divShow {
    background-color: rgba(255, 255, 255, .1);
    padding: 1rem;
    margin-top: 1rem ;
    width: fit-content;
    border-radius: .8rem;
  }
`;

export const SortButton = styled(AddButton)``;

