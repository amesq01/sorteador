import { useState } from 'react';

import Marquee from 'react-fast-marquee';
import Modal from 'react-modal';
Modal.setAppElement('#root');

import logo from '../../../src/assets/logo.png';

import { ShowListJurors } from '../../components/ShowListJurors';
import { Loading } from '../../components/Loading';
import { Button } from '../../components/Button';

//import { customStyles } from '../../utils/constants';

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
  Buttons,
  AbsentsButtonsContainer,
  Footer,
} from './styles';
import { AbsentButton } from '../../components/AbsentButton';




export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  content: {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#a2cae8',
    padding: '2.4rem 9rem',
    border:'none',
    textAlign: 'center',
    fontSize:'5rem',
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
  const [nameAbsentJuror, setNameAbsentJuror] = useState('');
  const [formShow, setFormShow] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalAbsentJurorIsOpen, setAbsentJurorIsOpen] = useState(false);
  const [sortButtonState, setSortButtonState] = useState(false);

  const jurorsNotDrawnConst: (string)[] = listAllJurors
    .filter(nome => !jurorsDrawn.includes(nome) &&
      !listMotivedDispenseJurorsJudge.includes(nome) &&
      !listUnMotivedDispenseJurorsJudge.includes(nome) &&
      !listDispenseJurorsMP.includes(nome) &&
      !listDispenseJurorsAdv.includes(nome) &&
      !listAbsentWithJustification.includes(nome) &&
      !listAbsentWithoutJustification.includes(nome));

  const processInfo:Array<string> = [];

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

  function handleAddAllJurors(e:any){
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

  function handleAbsentJurorWithJustification(nameAbsentJuror:any){
    listAbsentWithJustification.push(nameAbsentJuror);
    setAbsentJurorIsOpen(false);

  }
  function handleAbsentJurorWithoutJustification(nameAbsentJuror:any){
    listAbsentWithoutJustification.push(nameAbsentJuror);
    setAbsentJurorIsOpen(false);

  }

  return (
    <>
      <Container>

        <Header>
          <LogoImg src={logo} />
          <Title>Sorteador de Jurados</Title>
        </Header>

        {
          processInfo.length >=1 &&
          <ProcessInfos>
            <span>Número: 0000227-47.2000.8.10.0127</span>
            <span>Classe: AÇÃO PENAL DE COMPETÊNCIA DO JÚRI</span>
            <span>Órgão julgador: Vara Única de São Luís Gonzaga do Maranhão</span>
          </ProcessInfos>
        }


        <ContentContainer>
          <Content>
            {/* <button style={{width: '20%', alignSelf:'center', position:'absolute', top: '30%', left:'50%', transform:'translate(-50%, -50%)', border:'none', backgroundColor:'#BEDAF6', padding: '2rem', fontSize: '2.5rem', fontWeight:'bold', color:'#333', borderRadius:'3rem', cursor:'pointer'}}>
Novo sorteio
            </button> */}
            <FormContainer onSubmit={e => e.preventDefault()} >
              {
                formShow &&
                <>
                  <TextAreaJurors className='lista-jurados' onChange={(e) => handleAddAllJurors(e)} />

                  <AddListButton onClick={handleShowAllNames}>
                    Adicionar Lista
                  </AddListButton>
                </>
              }

              {
                showAllNames &&
                <ShowsAllNamesContainer>
                  {jurorsNotDrawnConst.map((item) => {
                    if (jurorsNotDrawnConst.length != 0) {
                      return (
                        <div className="divShow" key={item}  >
                          <span onClick={() => openModalAbsentJuror(item)}>{item}</span>
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

              listAllJurors.length !== jurorsNotDrawnConst.length &&

              <ContainerShowDrawnJurors>

                <ShowListJurors data={jurorsDrawn} label='Selecionados' />

                <ShowListJurors data={listUnMotivedDispenseJurorsJudge} label='Dispensados com motivo pelo juízo ' />

                <ShowListJurors data={listMotivedDispenseJurorsJudge} label='Dispensados sem motivo pelo juízo' />

                <ShowListJurors data={listDispenseJurorsMP} label='Dispensados com motivo pelo Ministério Público' />

                <ShowListJurors data={listDispenseJurorsAdv} label='Dispensados com motivo pelo Advogado' />

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
                <Loading/>

                {
                  jurorsDrawn[(jurorsDrawn.length - 1)]
                }

                <Buttons>

                  <Button  fnc={handleDrawnsAcceptedsJurors} title='Aceito'/>
                  <Button  fnc={handleMotivedDispenseJurorsJudge} title='Juízo - Dispensa Motivada'/>
                  <Button  fnc={handleUnMotivedDispenseJurorsJudge} title='Juizo - dispensa não motivada'/>
                  <Button  fnc={handleDispenseJurorsMP} title='Dispensa MP'/>
                  <Button  fnc={handleDispenseJurorsAdv} title='Dispensa ADV'/>

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

              <span >{nameAbsentJuror}</span>

              <AbsentsButtonsContainer>

                <AbsentButton bgcolor='#E66F5A' fncButton={()=>handleAbsentJurorWithJustification(nameAbsentJuror)} buttonTitle='Ausente com Justificativa'/>

                <AbsentButton bgcolor='#509876' fncButton={()=>handleAbsentJurorWithoutJustification(nameAbsentJuror)} buttonTitle='Ausente sem Justificativa'/>

              </AbsentsButtonsContainer>

            </Modal>
            {/* FIM MODAL JURADO SORTEADO */}

            {/* FIM TODOS MODAIS */}

          </Content>

          <Footer>
            <Marquee pauseOnHover gradient={false} gradientColor={[0, 0, 0]}>
              <span>2023 - Disponibilizado gratuitamente ao TJMA - Fórum de São Luís Gonzaga do Maranhão/MA por </span>
              <strong style={{ marginLeft: '.5rem' }}>@AdailtonMesquita</strong>
            </Marquee>
          </Footer>

        </ContentContainer >

      </Container >

    </>
  );
}

