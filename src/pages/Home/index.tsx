import { useState } from 'react';
import { Container, ContentContainer, Title, FormContainer, TextAreaJurors, AddButton, ShowsResult, SortButton } from './styles';



export function Home() {

  const [lista, setLista] = useState(['']);
  const [listaSorteados, setListaSorteados] = useState(['']);
  const [listaSorteadosDispensadoMP, setListaSorteadosDispensadoMP] = useState(['']);
  const [listaSorteadosDispensadoADV, setListaSorteadosDispensadoADV] = useState(['']);
  const [listaSorteadosDispensadoMM, setListaSorteadosDispensadoMM] = useState(['']);

  const [showAllName, setShowAllName]= useState(false);
  const [formShow, setFormShow]= useState(true);



  function AddJurors(e: any) {

    e.preventDefault();

  }

  function handleShowAllName(){
    setShowAllName(true);
    setFormShow(false);
  }

  function handleSort(){
    const addList = lista.slice((0.5 - Math.random()), 1);
    console.log(addList);

  }

  return (
    <>
      <Container>

        <ContentContainer>

          <Title>
            Sorteador de Jurados
          </Title>
          {

            formShow &&
  <FormContainer onSubmit={AddJurors} >

    <TextAreaJurors className='lista-jurados' wrap=',' onChange={(e) => setLista(e.target.value.split('\n'))} />

    <AddButton  onClick={handleShowAllName}>
    Adicionar Lista
    </AddButton>


  </FormContainer>


          }
          {
            showAllName &&
          <ShowsResult>
            {lista.map((item, index)=>{
              if(lista.length!=0){

                return(
                  <div className="divShow" key={item}>
                    <ul >
                      <li>{item}</li>
                    </ul>
                  </div>
                );
              }
            })}
          </ShowsResult>

          }



          <SortButton onClick={handleSort} >
              Sortear
          </SortButton>

        </ContentContainer>

      </Container>
    </>
  );
}
