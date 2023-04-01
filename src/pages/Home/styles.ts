import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:  rgba(59,143,231, 0.15);
  min-height: 100vh;
  height: 100%;
  padding-bottom: 10rem;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  color: #333;
`;

export const Header = styled.header`
  display:flex;
  background-color: rgba(59,143,231, 0.2);
  width: 100% ;
  height: fit-content;
  padding:1.6rem 3rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0rem 0rem 1.6rem rgba(0,0,0,0.2);
`;

export const LogoImg = styled.img`
  height: 7rem;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  color: #333;
  text-transform: uppercase ;
  font-family: 'Gruppo', sans-serif;
  letter-spacing:.7rem ;
`;

export const ContentContainer = styled.main`
  width: 96% ;


`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;


`;

export const TextAreaJurors = styled.textarea`
  display: flex;
  line-height:3rem;
  min-height: 40rem;
  max-height: 40rem;
  padding: 2rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 75rem;
  min-width: 75rem;
  border: none;
  outline: none;
  font-weight: medium;
  font-size: 2rem;
  border-radius: .4rem;
  box-shadow: 0rem 0rem .4rem rgba(0,0,0,0.1);
  margin-top: 10rem;
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
  margin-top: 1rem;
  background-color:  rgba(59,143,231, 0.1);
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
  }
`;

export const SortButton = styled(AddListButton)`
  align-self: start;
  width: 25rem;

`;

export const ShowAcceptedDrawnJurors = styled.div``;
export const ShowListMotivedDispenseJurorsJudge = styled.div``;

export const Footer = styled.footer`
  position: absolute;
  bottom: .5rem;
  left: 4rem;
  font-size: 1.2rem
`;

