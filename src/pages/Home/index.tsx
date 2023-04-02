import { useState } from 'react';

import Modal from 'react-modal';
Modal.setAppElement('#root');

import logo from '../../../src/assets/logo.png';
import absentJustifyImg from '../../../src/assets/absent_justify.svg';
import absentUnjustifyImg from '../../../src/assets/absent_unjustify.svg';

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
  ShowsAllNamesContainer,
  SortButton,
  ShowAcceptedDrawnJurors,
  Footer,
} from './styles';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .9)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(59,143,231, 1)'
  },
};

export function Home() {


  const [listAllJurors, setListAllJurors] = useState<string[]>([]);
  const [jurorsDrawn, setJurorsDrawn] = useState<string[]>([]);
  const [listMotivedDispenseJurorsJudge] = useState<string[]>([]);
  const [listUnMotivedDispenseJurorsJudge] = useState<string[]>([]);
  const [listDispenseJurorsMP] = useState<string[]>([]);
  const [listDispenseJurorsAdv] = useState<string[]>([]);
  const [listAbsentWithJustification] = useState<string[]>([]);
  const [listAbsentWithoutJustification] = useState<string[]>([]);

  const [showAllNames, setShowAllNames] = useState(false);
  const [namebsentJuror, setNameAbsentJuror] = useState('');
  const [formShow, setFormShow] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalAbsentJurorIsOpen, setAbsentJurorIsOpen] = useState(false);
  const [sortButtonState, setSortButtonState] = useState(false);


  const jurorsNotDrawnConst: (string)[] = listAllJurors.filter(nome => !jurorsDrawn.includes(nome) && !listMotivedDispenseJurorsJudge.includes(nome) && !listUnMotivedDispenseJurorsJudge.includes(nome) && !listDispenseJurorsMP.includes(nome) && !listDispenseJurorsAdv.includes(nome) && !listAbsentWithJustification.includes(nome) && !listAbsentWithoutJustification.includes(nome));


  //Início configuração MODAL NOME SORTEADO
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
  //fim configuração MODAL NOME SORTEADO

  //Início configuração MODAL JURADO AUSENTE

  function openModalAbsentJuror(index:any) {
    console.log(index);
    setAbsentJurorIsOpen(true);
    setNameAbsentJuror(index);
  }

  function afterOpenModalAbsentJuror() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModalAbsentJuror() {


    setAbsentJurorIsOpen(false);
  }
  //fim configuração MODAL JURADO AUSENTE

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

  function handleDrawnsAcceptedsJurors() {
    setIsOpen(false);
  }

  function handleMotivedDispenseJurorsJudge() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listMotivedDispenseJurorsJudge.push(addNewDrawn);
    setIsOpen(false);
  }

  function handleUnMotivedDispenseJurorsJudge() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listUnMotivedDispenseJurorsJudge.push(addNewDrawn);
    setIsOpen(false);
  }

  function handleDispenseJurorsMP() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listDispenseJurorsMP.push(addNewDrawn);
    setIsOpen(false);

  }

  function handleDispenseJurorsAdv() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listDispenseJurorsAdv.push(addNewDrawn);
    setIsOpen(false);
    console.log(jurorsDrawn);
  }

  return (
    <>
      <Container>

        <Header>
          <LogoImg src={logo} />
          <Title>Sorteador de Jurados</Title>
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
              <ShowsAllNamesContainer>
                {jurorsNotDrawnConst.map((item, id) => {
                  if (jurorsNotDrawnConst.length != 0) {
                    return (
                      <div className="divShow" key={item}  >
                        <span onClick={()=>openModalAbsentJuror(item)}>{item}</span>
                      </div>
                    );
                  }
                }).sort()}
              </ShowsAllNamesContainer>
            }

            {
              sortButtonState && <SortButton onClick={handleSortJurors} >
                Sortear
              </SortButton>
            }

          </FormContainer>

          {

            listAllJurors.length!== jurorsNotDrawnConst.length &&

  <div style={{
    display: 'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    columnGap:'1.2rem',
    marginTop: '2rem',
    listStyleType: 'none',


  }}  >


    <ShowAcceptedDrawnJurors style={{
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '.8rem'
    }}>
      <h2>Selecionados</h2>
      {jurorsDrawn.map((item, index) => {
        if (jurorsDrawn.length != 0) {
          return (
            <div className="divShow" key={item}>
              <ul >
                <li>{item}</li>
              </ul>
            </div>
          );
        }
      })}
    </ShowAcceptedDrawnJurors>

    <div style={{
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '.8rem',
      height: 'fit-content',


    }}>
      <h2>Dispensados com motivo pelo juízo </h2>
      {listMotivedDispenseJurorsJudge.map((item, index) => {
        if (listMotivedDispenseJurorsJudge.length != 0) {
          return (
            <div className="divShow" key={item}>
              <ul >
                <li>{item}</li>
              </ul>
            </div>
          );
        }
      })}
    </div>
    <div style={{
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '.8rem',
      height: 'fit-content',
    }}>
      <h2>Dispensados sem motivo pelo juízo </h2>
      {listUnMotivedDispenseJurorsJudge.map((item, index) => {
        if (listUnMotivedDispenseJurorsJudge.length != 0) {
          return (
            <div className="divShow" key={item}>
              <ul >
                <li>{item}</li>
              </ul>
            </div>
          );
        }
      })}
    </div>
    <div style={{
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '.8rem',
      height: 'fit-content',

    }}>
      <h2>Dispensados pelo Ministério Público </h2>
      {listDispenseJurorsMP.map((item, index) => {
        if (listDispenseJurorsMP.length != 0) {
          return (
            <div className="divShow" key={item}>
              <ul >
                <li>{item}</li>
              </ul>
            </div>
          );
        }
      })}
    </div>
    <div style={{
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '.8rem',
      height: 'fit-content',

    }}>
      <h2 style={{ display: 'flex', marginBottom: '2rem' }}>Dispensados pelo advogado </h2>
      {listDispenseJurorsAdv.map((item, index) => {
        if (listDispenseJurorsAdv.length != 0) {
          return (
            <div className="divShow" key={item}>
              <ul style={{ listStyleType: 'none' }}>
                <li>{item}</li>
              </ul>
            </div>
          );
        }
      })}
    </div>

    <div style={{
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '.8rem',
      height: 'fit-content',

    }}>
      <h2 style={{ display: 'flex', marginBottom: '2rem' }}>Dispensados pelo advogado </h2>
      {listAbsentWithJustification.map((item, index) => {
        if (listAbsentWithJustification.length != 0) {
          return (
            <div className="divShow" key={item}>
              <ul style={{ listStyleType: 'none' }}>
                <li>{item}</li>
              </ul>
            </div>
          );
        }
      })}

    </div>

  </div>
          }

          {/* INÍCIO TODOS MODAIS */}

          {/* INÍCIO MODAL JURADO SORTEADO */}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >


            <div className='modalName' style={{
              width: '80rem',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <h1 style={{
                padding: '2rem 4rem'
              }}>

                {
                  jurorsDrawn[(jurorsDrawn.length - 1)]
                }
              </h1>
              <div className="buttons" style={{ display: 'flex', padding: '2rem', gap: '1.2rem' }}>
                <button style={{ padding: '1.2rem' }} onClick={handleDrawnsAcceptedsJurors}> Aceito</button>
                <button style={{ padding: '1.2rem' }} onClick={handleMotivedDispenseJurorsJudge}>Juizo - dispensa motivada</button>
                <button style={{ padding: '1.2rem' }} onClick={handleUnMotivedDispenseJurorsJudge}>
                    Juizo - dispensa não motivada
                </button>
                <button style={{ padding: '1.2rem' }} onClick={handleDispenseJurorsMP}>
                    Dispensa MP
                </button>
                <button style={{ padding: '1.2rem' }} onClick={handleDispenseJurorsAdv}>
                    Dispensa ADV
                </button>

              </div>
            </div>
          </Modal>
          {/* FIM MODAL JURADO SORTEADO */}


          {/* INÍCIO MODAL JURADO AUSENTE */}
          <Modal
            isOpen={modalAbsentJurorIsOpen}
            onAfterOpen={afterOpenModalAbsentJuror}
            onRequestClose={closeModalAbsentJuror}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="span-absent-juror" style={{
              display:'flex',
              justifyContent:'center',
              alignItems: 'center',

              fontSize: '3.6rem'
            }}>

              <span >{namebsentJuror}</span>
            </div>


            <div className="absents" style={{
              display:'flex',
              gap:'5rem',
              marginTop: '3rem',


            }}>
              <span className="justify" style={{
                display:'flex',
                padding:'2rem',
                justifyContent:'center',
                alignItems: 'center',
                background: 'green',
                borderRadius: '.8rem',
                color:'white'
              }} onClick={()=>{
                listAbsentWithJustification.push(namebsentJuror);
                setAbsentJurorIsOpen(false);
                alert([listAbsentWithJustification]);
              }}>Ausente Justificado</span>
              <span className="unjustify" style={{
                display:'flex',
                padding:'2rem',
                justifyContent:'center',
                alignItems: 'center',
                background: 'red',
                borderRadius: '.8rem'
              }}>Ausente Injustificado</span>
            </div>
          </Modal>
          {/* FIM MODAL JURADO SORTEADO */}

          {/* FIM TODOS MODAIS */}

        </ContentContainer >



        <Footer>
          <span>2023 - Disponibilizado gratuitamente ao TJMA - Fórum de São Luís Gonzaga do Maranhão/MA por </span>
          <strong style={{marginLeft: '.5rem'}}>@AdailtonMesquita</strong>
        </Footer>
      </Container >
    </>
  );
}

