import { useState } from 'react';

import Marquee from 'react-fast-marquee';

import Modal from 'react-modal';
Modal.setAppElement('#root');

import { ShowListJurors } from '../../components/ShowListJurors';
import { Button } from '../../components/Button';
import { AbsentButton } from '../../components/AbsentButton';
import { Spin } from '../../components/Spin';

import logo from '../../../src/assets/logoNew.png';

import { customStyles } from '../../utils/constants';

import { PlusCircle } from '@phosphor-icons/react';

import {
  Container,
  Header,
  LogoImg,
  Title,
  SubHeader,
  ProcessInfos,
  UserInfo,
  ContentContainer,
  Content,
  FormContainer,
  ButtonNewDrawn,
  TextAreaJurors,
  AddListButton,
  ShowsAllNamesContainer,
  SortButton,
  SaveSortButton,
  ContainerShowDrawnJurors,
  ModalShowDrawnJuror,
  ModalJurorTitle,
  Buttons,
  ModalShowAbsentJuror,
  ModalAbsentJurorTitle,
  AbsentsButtonsContainer,
  ModalShowProcessInfos,
  ModalShowProcessInfosTitle,
  TextAreaProcessInfos,
  SaveProcessInfosButton,
  Footer,
} from './styles';



import { authUser } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { addDoc, collection } from 'firebase/firestore';



export function Home() {

  const [listAllJurors, setListAllJurors] = useState<string[]>([]);
  const [listAllProcessInfos, setListAllProcessInfos] = useState<string[]>([]);
  const [jurorsDrawn, setJurorsDrawn] = useState<string[]>([]);
  const [listDispenseJurorsJudge] = useState<string[]>([]);
  const [listMotivatedDispenseJurorsMP] = useState<string[]>([]);
  const [listUnMotivatedDispenseJurorsMP] = useState<string[]>([]);
  const [listMotivatedDispenseJurorsAdv] = useState<string[]>([]);
  const [listUnMotivatedDispenseJurorsAdv] = useState<string[]>([]);
  const [listAbsentWithJustification] = useState<string[]>([]);
  const [listAbsentWithoutJustification] = useState<string[]>([]);

  const [showAllNames, setShowAllNames] = useState(false);
  const [showDispenseOptionsMP, setShowDispenseOptionsMP] = useState(false);
  const [showDispenseOptionsAdv, setShowDispenseOptionsAdv] = useState(false);
  const [nameAbsentJuror, setNameAbsentJuror] = useState('');
  const [formShow, setFormShow] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalAbsentJurorIsOpen, setAbsentJurorIsOpen] = useState(false);
  const [modalProcessInfosIsOpen, setModalProcessInfosIsOpen] = useState(false);
  const [sortButtonState, setSortButtonState] = useState(false);
  const [appearButtonNewDrawn, setAppearButtonNewDrawn] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const jurorsNotDrawnConst: (string)[] = listAllJurors
    .filter(nome => !jurorsDrawn.includes(nome) &&
      !listDispenseJurorsJudge.includes(nome) &&
      !listMotivatedDispenseJurorsMP.includes(nome) &&
      !listUnMotivatedDispenseJurorsMP.includes(nome) &&
      !listMotivatedDispenseJurorsAdv.includes(nome) &&
      !listUnMotivatedDispenseJurorsAdv.includes(nome) &&
      !listAbsentWithJustification.includes(nome) &&
      !listAbsentWithoutJustification.includes(nome));

  const processInfo: Array<string> = [];

  const createdAt = new Date();
  console.log('const Data', createdAt);

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

  function openModalAbsentJuror(index: any) {
    setNameAbsentJuror(index);
    setAbsentJurorIsOpen(true);
  }

  function afterOpenModalAbsentJuror() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModalAbsentJuror() {
    setAbsentJurorIsOpen(false);
  }
  //fim configuração MODAL JURADO AUSENTE


  //Início configuração MODAL INFORMAÇÕES DO PROCESSO

  function openModalProcessInfos() {

    setModalProcessInfosIsOpen(true);
  }

  function afterOpenModalProcessInfos() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModalProcessInfos() {
    setModalProcessInfosIsOpen(false);
  }
  //fim configuração MODAL JURADO AUSENTE

  function handleAddAllJurors(e: any) {
    const newJuror = (e.target.value.split('\n'));
    const filterJuror = newJuror.filter((juror: string) => juror !== '');
    setListAllJurors(filterJuror);
  }

  function handleAddProcessInfos(e: any) {
    const info = (e.target.value.split('\n'));
    const filterInfos = info.filter((info: string) => info !== '');
    setListAllProcessInfos(filterInfos);
    console.log(processInfo);

  }

  function handleShowAllNames() {
    setShowAllNames(true);
    setFormShow(false);
    setSortButtonState(true);
  }



  function handleShowProcessInfos() {
    setAppearButtonNewDrawn(false);
    closeModalProcessInfos();
    setShowContent(true);
  }

  function handleSortJurors() {
    if (jurorsDrawn.length < 7) {
      const jurorDrawn = jurorsNotDrawnConst[Math.floor(Math.random() * jurorsNotDrawnConst.length)];
      setJurorsDrawn(prev => [...prev, jurorDrawn]);
      if (jurorsNotDrawnConst.length === 0) {
        alert('chegou ao fim da lista');
      }
      handleResetShowOptionsDispenseMPorAdv();
      openModal();
    } else {
      alert('Os sete jurados já foram sorteados');
    }
  }

  async function handleSaveSort(e: any) {
    e.preventDefault();
    const collectionRef = collection(db, 'teste2');
    await addDoc(collectionRef, {
      listAllJurors,
      jurorsDrawn,
      jurorsNotDrawnConst,
      listDispenseJurorsJudge,
      listMotivatedDispenseJurorsMP,
      listUnMotivatedDispenseJurorsMP,
      listMotivatedDispenseJurorsAdv,
      listUnMotivatedDispenseJurorsAdv,
      listAbsentWithJustification,
      listAbsentWithoutJustification,
      listAllProcessInfos,
      createdAt,
    });

    setTimeout(() => {
      navigate('/results');
      alert('sorteio salvo');
    }, 500);

  }

  function handleDrawnsAcceptedsJurors() {
    closeModal();
  }

  function handleDispenseJurorsJudge() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listDispenseJurorsJudge.push(addNewDrawn);
    closeModal();
  }

  function handleResetShowOptionsDispenseMPorAdv() {
    setShowDispenseOptionsMP(false);
    setShowDispenseOptionsAdv(false);

  }

  function handleShowOptionDispenseMP() {
    setShowDispenseOptionsMP(!showDispenseOptionsMP);
  }

  function handleShowOptionDispenseAdv() {
    setShowDispenseOptionsAdv(!showDispenseOptionsAdv);
  }

  function handleMotivatedDispenseJurorsMP() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listMotivatedDispenseJurorsMP.push(addNewDrawn);
    closeModal();
  }

  function handleUnMotivatedDispenseJurorsMP() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listUnMotivatedDispenseJurorsMP.push(addNewDrawn);
    closeModal();
  }

  function handleMotivatedDispenseJurorsAdv() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listMotivatedDispenseJurorsAdv.push(addNewDrawn);
    closeModal();

  }

  function handleUnMotivatedDispenseJurorsAdv() {
    const addNewDrawn: any = jurorsDrawn.pop();
    listUnMotivatedDispenseJurorsAdv.push(addNewDrawn);
    closeModal();
  }

  function handleAbsentJurorWithJustification(nameAbsentJuror: any) {
    listAbsentWithJustification.push(nameAbsentJuror);
    closeModalAbsentJuror();
  }

  function handleAbsentJurorWithoutJustification(nameAbsentJuror: any) {
    listAbsentWithoutJustification.push(nameAbsentJuror);
    closeModalAbsentJuror();
  }

  function handleAddNewDrawn() {
    openModalProcessInfos();
  }



  async function handleLogout(e: any) {
    e.preventDefault();
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  const { user, logout } = authUser();



  return (
    <>
      <Container>

        <Header>
          <LogoImg src={logo} />
          <Title>Sorteador de Jurados</Title>
        </Header>


        <SubHeader>

          {


            listAllProcessInfos.length >= 1 &&

            <ProcessInfos>
              {
                listAllProcessInfos.map(info =>
                  <span key={info}>{info}</span>)
              }
            </ProcessInfos>
          }
          <UserInfo>
            <span>Usuário Logado:</span>
            <strong>{user.email === 'amesq1@hotmail.com' ? 'Adailton Mesquita' : 'Francisco José'}</strong>
            <button onClick={handleLogout} >Sair</button>
          </UserInfo>
        </SubHeader>

        <ContentContainer>
          <Content mt={showAllNames}>

            {
              appearButtonNewDrawn &&

              <ButtonNewDrawn onClick={handleAddNewDrawn}>
                <PlusCircle size={40} color="#555" weight="bold" />
                <span>Novo sorteio</span>
              </ButtonNewDrawn>
            }
            {
              showContent &&
              <FormContainer onSubmit={e => e.preventDefault()} >
                {
                  formShow && listAllProcessInfos.length > 0 &&
                  <>
                    <TextAreaJurors className='lista-jurados' onChange={(e) => handleAddAllJurors(e)} mt={showAllNames} />

                    <AddListButton onClick={handleShowAllNames}>
                      Adicionar Lista
                    </AddListButton>
                  </>
                }

                {
                  showAllNames && jurorsNotDrawnConst.length > 0 &&
                  <ShowsAllNamesContainer>
                    {jurorsNotDrawnConst.map((item) => {
                      if (jurorsNotDrawnConst.length != 0) {
                        return (
                          <div className="divShow" key={item} onClick={() => openModalAbsentJuror(item)}>
                            <span >{item}</span>
                          </div>
                        );
                      }
                    }).sort()}
                  </ShowsAllNamesContainer>
                }

                {
                  sortButtonState && jurorsNotDrawnConst.length > 0 && jurorsDrawn.length < 7 &&

                  <SortButton onClick={handleSortJurors} >
                    Sortear
                  </SortButton>
                }
                {
                  jurorsDrawn.length > 6 &&

                  <SaveSortButton onClick={handleSaveSort} >
                    Salvar Sorteio
                  </SaveSortButton>
                }

              </FormContainer>
            }


            {

              listAllJurors.length !== jurorsNotDrawnConst.length &&

              <ContainerShowDrawnJurors>

                <ShowListJurors data={jurorsDrawn} label='Selecionados' borderColor />

                <ShowListJurors data={listDispenseJurorsJudge} label='Dispensados pelo juízo' />

                <ShowListJurors data={listMotivatedDispenseJurorsMP} label='Dispensados com motivo pelo Ministério Público' />

                <ShowListJurors data={listUnMotivatedDispenseJurorsMP} label='Dispensados sem motivo pelo Ministério Público' />

                <ShowListJurors data={listMotivatedDispenseJurorsAdv} label='Dispensados com motivo pelo Advogado' />

                <ShowListJurors data={listUnMotivatedDispenseJurorsAdv} label='Dispensados sem motivo pelo Advogado' />

                <ShowListJurors data={listAbsentWithJustification} label='Ausentes com Justificativa' />

                <ShowListJurors data={listAbsentWithoutJustification} label='Ausentes sem Justificativa' />

              </ContainerShowDrawnJurors>
            }


            {/* INÍCIO TODOS MODAIS */}

            {/* INÍCIO MODAL JURADO SORTEADO */}
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              style={customStyles}
            >
              <ModalShowDrawnJuror>

                <Spin />

                <ModalJurorTitle>
                  {jurorsDrawn[(jurorsDrawn.length - 1)]}
                </ModalJurorTitle>

                <Buttons>

                  <Button fnc={handleDrawnsAcceptedsJurors} title='Aceito' />

                  <Button fnc={handleDispenseJurorsJudge} title='Juízo - Dispensa' />

                  <div style={{ position: 'relative' }}>
                    <Button fnc={handleShowOptionDispenseMP} title='MINISTÉRIO PÚBLICO - DISPENSA' />

                    {
                      showDispenseOptionsMP &&

                      <div style={{ position: 'absolute', zIndex: '1000', display: 'flex', gap: '2rem', width: '100%', marginTop: '.4rem', justifyContent: 'center', alignItems: 'center' }}>
                        <Button font paddingHorizontal fnc={handleMotivatedDispenseJurorsMP} title='COM MOTIVO' />

                        <Button paddingHorizontal fnc={handleUnMotivatedDispenseJurorsMP} title='SEM MOTIVO' />
                      </div>
                    }

                  </div>

                  <div style={{ position: 'relative' }}>

                    <Button fnc={handleShowOptionDispenseAdv} title='ADVOGADO (A)  - DISPENSA' />

                    {
                      showDispenseOptionsAdv &&

                      <div style={{ position: 'absolute', zIndex: '1000', display: 'flex', gap: '2rem', width: '100%', marginTop: '.4rem', justifyContent: 'center', alignItems: 'center' }}>
                        <Button paddingHorizontal fnc={handleMotivatedDispenseJurorsAdv} title='Com Motivo' />

                        <Button paddingHorizontal fnc={handleUnMotivatedDispenseJurorsAdv} title='Sem Motivo' />
                      </div>
                    }
                  </div>

                </Buttons>

              </ModalShowDrawnJuror>
            </Modal>
            {/* FIM MODAL JURADO SORTEADO */}


            {/* INÍCIO MODAL JURADO AUSENTE */}
            <Modal
              isOpen={modalAbsentJurorIsOpen}
              onAfterOpen={afterOpenModalAbsentJuror}
              onRequestClose={closeModalAbsentJuror}
              style={customStyles}
            >
              <ModalShowAbsentJuror>

                <ModalAbsentJurorTitle>
                  {nameAbsentJuror}
                </ModalAbsentJurorTitle>

                <AbsentsButtonsContainer>

                  <AbsentButton bgcolor='#509876' fncButton={() => handleAbsentJurorWithJustification(nameAbsentJuror)} buttonTitle='Ausente com Justificativa' />

                  <AbsentButton bgcolor='#E66F5A' fncButton={() => handleAbsentJurorWithoutJustification(nameAbsentJuror)} buttonTitle='Ausente sem Justificativa' />

                </AbsentsButtonsContainer>
              </ModalShowAbsentJuror>

            </Modal>
            {/* FIM MODAL JURADO SORTEADO */}

            {/* INÍCIO MODAL Process INFOS */}
            <Modal
              isOpen={modalProcessInfosIsOpen}
              onAfterOpen={afterOpenModalProcessInfos}

              style={customStyles}
            >
              <ModalShowProcessInfos>

                <ModalShowProcessInfosTitle>
                  Informações do Processo
                </ModalShowProcessInfosTitle>

                <>
                  <TextAreaProcessInfos

                    placeholder='Exemplo:

Processo: 00000-00.0000.0.0000
Réu(s): Fulano de Tal...
Advogado(s): Fulano de Tal...
Tipicidade Penal: Art. 121 cpb...'
                    className='lista-jurados'
                    onChange={(e) => handleAddProcessInfos(e)}
                  />

                  <SaveProcessInfosButton onClick={handleShowProcessInfos}>
                    Salvar Informações
                  </SaveProcessInfosButton>
                </>


              </ModalShowProcessInfos>

            </Modal>
            {/* FIM MODAL PROCESS INFOS */}

            {/* FIM TODOS MODAIS */}

          </Content>

          <Footer>
            <Marquee pauseOnHover gradient={false} gradientColor={[0, 0, 0]}>
              <span>2023 - Disponibilizado gratuitamente ao TJMA - Fórum de São Luís Gonzaga do Maranhão/MA por </span>
              <strong style={{ marginLeft: '.5rem', marginRight: '.5rem' }}>@AdailtonMesquita </strong> <span style={{ marginRight: '2rem' }}> - Projeto desenvolvido com o apoio do servidor do TJMA @FranciscoBogea</span>
            </Marquee>
          </Footer>

        </ContentContainer >




      </Container >

    </>
  );
}

