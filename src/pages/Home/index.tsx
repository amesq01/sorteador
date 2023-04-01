import { useState } from 'react';

import Modal from 'react-modal';
Modal.setAppElement('#root');

import logo from '../../../src/assets/logo.png';
import { Loading } from '../../components/Loading';

import {
  Container,
  ContentContainer,
  Header,
  LogoImg,
  Title,
  FormContainer,
  TextAreaJurors,
  AddListButton,
  ShowsResult,
  SortButton,
  ShowAcceptedDrawnJuros,
  Footer,
} from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function Home() {

  const [listAllJurors, setListAllJurors] = useState<string[]>([]);
  const [jurorsDrawn, setJurorsDrawn] = useState<string[]>([]);
  const [listMotivedDispenseJurorsJudge, setListMotivedDispenseJurorsJudge]=useState(['']);

  const [showAllNames, setShowAllNames] = useState(false);
  const [formShow, setFormShow] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sortButtonState, setSortButtonState] = useState(false);
  //const [jurorsNotDrawn, setJurorsNotDrawn] = useState<string[]>([]);

  const jurorsNotDrawnConst:(string)[] = listAllJurors.filter(nome => !jurorsDrawn.includes(nome) && !listMotivedDispenseJurorsJudge.includes(nome));


  //Início configuração MODAL
  let subtitle: any;


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  //fim configuração MODAL

  function handleShowAllNames() {
    setShowAllNames(true);
    setFormShow(false);
    setSortButtonState(true);

  }

  function handleSortJurors() {
    const jurorDrawn = jurorsNotDrawnConst[Math.floor(Math.random() * jurorsNotDrawnConst.length)];
    setJurorsDrawn(prev => [...prev, jurorDrawn]);

    if (jurorsNotDrawnConst.length === 0) {
      alert('chegou ao fim da lista');
    }
    openModal();


  }

  function handleMotivedDispenseJurorsJudge(){

    console.log(jurorsDrawn + 'ok');
    const getLastItemSorted= jurorsDrawn.pop();
    console.log(getLastItemSorted);
    console.log(jurorsDrawn + 'ok');
    setListMotivedDispenseJurorsJudge(prev =>[...prev, 'oi']);

    const novoArray = jurorsDrawn;

    console.log(listMotivedDispenseJurorsJudge);


    setIsOpen(false);

  }
  function handleUnMotivedDispenseJurorsJudge(){
    console.log(listMotivedDispenseJurorsJudge);
    setIsOpen(false);

  }

  return (
    <>
      <Container>

        <Header>
          <LogoImg src={logo} />
          <Title>
            Sorteador de Jurados


          </Title>


        </Header>


        <ContentContainer>

          <Loading />

          <FormContainer onSubmit={e => e.preventDefault()} >


            {

              formShow &&
        <>
          <TextAreaJurors className='lista-jurados' onChange={(e) => setListAllJurors(e.target.value.split('\n'))} />

          <AddListButton onClick={handleShowAllNames}>
            Adicionar Lista
          </AddListButton>
        </>

            }
            {
              showAllNames &&
            <ShowsResult>
              {jurorsNotDrawnConst.map((item, index) => {
                if (jurorsNotDrawnConst.length != 0) {

                  return (
                    <div className="divShow" key={item}>
                      <ul >
                        <li>{item}</li>
                      </ul>
                    </div>
                  );
                }
              }).sort()}
            </ShowsResult>

            }


            {
              sortButtonState && <SortButton onClick={handleSortJurors} >
                  Sortear
              </SortButton>
            }

          </FormContainer>

          <ShowAcceptedDrawnJuros>
            {jurorsDrawn.sort().map((item, index) => {
              if (jurorsDrawn.length != 0) {
                return (
                  <div className="divShow" key={item}>
                    <ul >
                      <li>{item}</li>
                    </ul>
                  </div>
                );
              }
            }).sort()}
          </ShowAcceptedDrawnJuros>





          <div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div>
                {
                  jurorsDrawn[(jurorsDrawn.length - 1)]
                }
                <div className="buttons">
                  <button
                    onClick={handleMotivedDispenseJurorsJudge}
                  >Aceito</button>
                  <button onClick={handleUnMotivedDispenseJurorsJudge}>
                    Dispensa MM
                  </button>
                  <button>
                    Dispensa MP
                  </button>
                  <button>
                    Dispensa ADV
                  </button>

                </div>
              </div>
            </Modal>
          </div>
        </ContentContainer>

        <Footer>
          <span>2023 - Disponibilizado gratuitamente ao TJMA - Fórum de São Luís Gonzaga do Maranhão/MA.</span>
          <strong> @AdailtonMesquita</strong>
        </Footer>

      </Container>
    </>
  );
}

