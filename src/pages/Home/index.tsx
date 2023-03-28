import { useState } from 'react';
import { Container, ContentContainer, Title, FormContainer, TextAreaJurors, AddButton, ShowsResult } from './styles';



export function Home() {

  const [lista, setLista] = useState('');


  function AddJurors(e: any) {

    e.preventDefault();

  }


  return (
    <>
      <Container>

        <ContentContainer>

          <Title>
            Sorteador de Jurados
          </Title>

          <FormContainer onSubmit={AddJurors} >

            <TextAreaJurors className='lista-jurados' wrap='' onChange={(e) => setLista(e.target.value)} />

            <AddButton >
              Adicionar Lista
            </AddButton>


          </FormContainer>

          <ShowsResult>
            {lista}
          </ShowsResult>

        </ContentContainer>

      </Container>
    </>
  );
}
