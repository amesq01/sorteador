import { useState } from 'react';
import { Container, ContentContainer, Header, LogoImg, Title, FormContainer, TextAreaJurors, AddButton, ShowsResult, SortButton } from './styles';
import Modal from 'react-modal';
Modal.setAppElement('#root');

import logo from '../../../src/assets/logo.png';


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
  const [showAllName, setShowAllName] = useState(false);
  const [formShow, setFormShow] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);

  const jurorsNotDrawnConst = listAllJurors.filter(nome => !jurorsDrawn.includes(nome));
  //const [jurorsNotDrawn, setJurorsNotDrawn] = useState<string[]>([]);

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



  function AddJurors(e: any) {
    e.preventDefault();
  }

  function handleShowAllName() {
    setShowAllName(true);
    setFormShow(false);
  }

  function handleSort() {
    const jurorDrawn = jurorsNotDrawnConst[Math.floor(Math.random() * jurorsNotDrawnConst.length)];
    setJurorsDrawn(prev => [...prev, jurorDrawn]);

    if (jurorsNotDrawnConst.length === 0) {
      alert('chegou ao fim da lista');
    }
    openModal();
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
          {
            formShow &&

            <FormContainer onSubmit={AddJurors} >

              <TextAreaJurors className='lista-jurados' value='teste' onChange={(e) => setListAllJurors(e.target.value.split('\n'))} />

              <AddButton onClick={handleShowAllName}>
                Adicionar Lista
              </AddButton>


            </FormContainer>
          }
          {
            showAllName &&
            <ShowsResult>
              {jurorsNotDrawnConst.sort().map((item, index) => {
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

          <SortButton onClick={handleSort} >
            Sortear
          </SortButton>


          <div>
            <button onClick={openModal}>Open Modal</button>
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
                    onClick={closeModal}
                  >Aceito</button>
                  <button>
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

        <span>Disponibilizado gratuitamente ao TJMA - Fórum de São Luís Gonzaga do Maranhão/MA.</span>
        <span>@AdailtonMesquita</span>

      </Container>
    </>
  );
}

