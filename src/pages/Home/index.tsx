import { useState } from 'react';

import Marquee from 'react-fast-marquee';
import Modal from 'react-modal';
Modal.setAppElement('#root');

import { ShowListJurors } from '../../components/ShowListJurors';
import { Button } from '../../components/Button';
import { AbsentButton } from '../../components/AbsentButton';
import { Spin } from '../../components/Spin';

import logo from '../../../src/assets/logo.png';

import { customStyles } from '../../utils/constants';

import {
  Container,
  Header,
  ProcessInfos,
  ContentContainer,
  Content,
  LogoImg,
  Title,
  FormContainer,
  TextAreaJurors,
  AddListButton,
  ShowsAllNamesContainer,
  SortButton,
  ContainerShowDrawnJurors,
  ModalShowDrawnJuror,
  ModalJurorTitle,
  Buttons,
  ModalShowAbsentJuror,
  ModalAbsentJurorTitle,
  AbsentsButtonsContainer,
  Footer,
} from './styles';

export function Home() {

  const [listAllJurors, setListAllJurors] = useState<string[]>([]);
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
  const [sortButtonState, setSortButtonState] = useState(false);

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

  function handleAddAllJurors(e: any) {
    const newJuror = (e.target.value.split('\n'));
    const filterJuror = newJuror.filter((juror: string) => juror !== '');
    setListAllJurors(filterJuror);
  }

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
    handleResetShowOptionsDispenseMPorAdv();
    openModal();
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

  return (
    <>
      <Container>

        <Header>
          <LogoImg src={logo} />
          <Title>Sorteador de Jurados</Title>
        </Header>

        {
          processInfo.length >= 1 &&

          <ProcessInfos>
            <span>Número: 0000227-47.2000.8.10.0127</span>
            <span>Classe: AÇÃO PENAL DE COMPETÊNCIA DO JÚRI</span>
            <span>Órgão julgador: Vara Única de São Luís Gonzaga do Maranhão</span>
          </ProcessInfos>
        }


        <ContentContainer>
          <Content mt={showAllNames}>
            {/* <button style={{width: '20%', alignSelf:'center', position:'absolute', top: '30%', left:'50%', transform:'translate(-50%, -50%)', border:'none', backgroundColor:'#BEDAF6', padding: '2rem', fontSize: '2.5rem', fontWeight:'bold', color:'#333', borderRadius:'3rem', cursor:'pointer'}}>
Novo sorteio
            </button> */}
            <FormContainer onSubmit={e => e.preventDefault()} >
              {
                formShow &&
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
                sortButtonState && jurorsNotDrawnConst.length > 0 && <SortButton onClick={handleSortJurors} >
                  Sortear
                </SortButton>
              }

            </FormContainer>

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

