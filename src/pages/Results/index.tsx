import { useEffect, useState } from 'react';

import Marquee from 'react-fast-marquee';

import logo from '../../../src/assets/logoNew.png';


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
  Footer,
} from './styles';



import { authUser } from '../../contexts/userContext';
import { db } from '../../utils/firebase';
import { collection, getDocs, orderBy, query, } from 'firebase/firestore';

import { ResultItem } from '../../components/ResultItem';
import { OverlayLoading } from '../../components/OverlayLoading';

export function Results() {


  async function handleLogout(e: any) {
    e.preventDefault();
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  const { user, logout } = authUser();


  const [dataBase, setDataBase] = useState([] as any);

  const [createdAt, setCreatedAt] = useState<string>();
  const [listAllJurors, setListAllJurors] = useState([] as any);
  const [listDrawnJurors, setListDrawnJurors] = useState([] as any);
  const [listJurorsNotDrawnConst, setListJurorsNotDrawnConst] = useState([] as any);
  const [listDispenseJurorsJudge, setListDispenseJurorsJudge] = useState([] as any);
  const [listAbsentWithJustification, setListAbsentWithJustification] = useState([] as any);
  const [listAbsentWithoutJustification, setListAbsentWithoutJustification] = useState([] as any);
  const [listAllProcessInfos, setListAllProcessInfos] = useState([] as any);
  const [listMotivatedDispenseJurorsAdv, setListMotivatedDispenseJurorsAdv] = useState([] as any);
  const [listUnMotivatedDispenseJurorsAdv, setListUnMotivatedDispenseJurorsAdv] = useState([] as any);
  const [listMotivatedDispenseJurorsMP, setListMotivatedDispenseJurorsMP] = useState([] as any);
  const [listUnMotivatedDispenseJurorsMP, setListUnMotivatedDispenseJurorsMP] = useState([] as any);

  useEffect(() => {

    const getDrawns = async () => {

      const ref = collection(db, 'teste2');
      const orderby = query(ref, orderBy('createdAt', 'asc'));
      const data = await getDocs(orderby);
      const results = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      const resultsLast: any = results[(results.length - 1)];
      const createdAt = new Date(resultsLast.createdAt.seconds * 1000).toLocaleDateString('pt-BR');
      const listAllJurors = resultsLast.listAllJurors;
      const listDrawnJurors = resultsLast.jurorsDrawn;
      const listJurorsNotDrawnConst = resultsLast.jurorsNotDrawnConst;
      const listDispenseJurorsJudge = resultsLast.listDispenseJurorsJudge;
      const listAbsentWithJustification = resultsLast.listAbsentWithJustification;
      const listAbsentWithoutJustification = resultsLast.listAbsentWithoutJustification;
      const listAllProcessInfos = resultsLast.listAllProcessInfos;
      const listMotivatedDispenseJurorsAdv = resultsLast.listMotivatedDispenseJurorsAdv;
      const listUnMotivatedDispenseJurorsAdv = resultsLast.listUnMotivatedDispenseJurorsAdv;
      const listMotivatedDispenseJurorsMP = resultsLast.listMotivatedDispenseJurorsMP;
      const listUnMotivatedDispenseJurorsMP = resultsLast.listUnMotivatedDispenseJurorsMP;

      setDataBase(resultsLast);

      setCreatedAt(createdAt);
      setListAllJurors(listAllJurors);
      setListDrawnJurors(listDrawnJurors);
      setListJurorsNotDrawnConst(listJurorsNotDrawnConst);
      setListDispenseJurorsJudge(listDispenseJurorsJudge);
      setListAbsentWithJustification(listAbsentWithJustification);
      setListAbsentWithoutJustification(listAbsentWithoutJustification);
      setListAllProcessInfos(listAllProcessInfos);
      setListMotivatedDispenseJurorsAdv(listMotivatedDispenseJurorsAdv);
      setListUnMotivatedDispenseJurorsAdv(listUnMotivatedDispenseJurorsAdv);
      setListMotivatedDispenseJurorsMP(listMotivatedDispenseJurorsMP);
      setListUnMotivatedDispenseJurorsMP(listUnMotivatedDispenseJurorsMP);
    };

    getDrawns();

  }, []);

  return (
    <>
      <Container>

        <Header>
          <LogoImg src={logo} />
          <Title>Sorteador de Jurados</Title>
        </Header>

        <SubHeader>

          <ProcessInfos>
            {listAllProcessInfos.map((item: any) => <span key={item}>{item}</span>)}
          </ProcessInfos>

          <UserInfo>
            <span>Usuário Logado:</span>
            <strong>{user.email === 'amesq1@hotmail.com' ? 'Adailton Mesquita' : 'Francisco José'}</strong>
            <button onClick={handleLogout} >Sair</button>
          </UserInfo>

        </SubHeader>

        <ContentContainer>

          <Content>

            <h3 style={{ marginBlock: '.8rem' }}>Sorteio realizado em: <span>{createdAt}</span></h3>

            <div style={{ display: 'flex', gap: '1.2rem', marginTop: '1.2rem', flexDirection: 'column' }}>
              <ResultItem data={listAllJurors} label='Lista geral dos jurados' />
              <ResultItem data={listDrawnJurors} label='Lista dos jurados aceitos' borderColor />
              <ResultItem data={listJurorsNotDrawnConst} label='Lista dos jurados não sorteados' />
              <ResultItem data={listDispenseJurorsJudge} label='Lista dos jurados dispensados pelo Juízo' />
              <ResultItem data={listAbsentWithJustification} label='Lista dos jurados ausentes com justificativa' />
              <ResultItem data={listAbsentWithoutJustification} label='Lista dos jurados ausentes sem justificativa' />
              <ResultItem data={listMotivatedDispenseJurorsAdv} label='Lista dos jurados dispensados com motivo pelo Advogado(a)' />
              <ResultItem data={listUnMotivatedDispenseJurorsAdv} label='Lista dos jurados dispensados sem motivo pelo Advogado(a)' />
              <ResultItem data={listMotivatedDispenseJurorsMP} label='Lista dos jurados dispensados com motivo pelo Ministério Público' />
              <ResultItem data={listUnMotivatedDispenseJurorsMP} label='Lista dos jurados dispensados sem motivo pelo Ministério Público' />
            </div>

          </Content >

          <Footer>
            <Marquee pauseOnHover gradient={false} gradientColor={[0, 0, 0]}>
              <span>2023 - Disponibilizado gratuitamente ao TJMA - Fórum de São Luís Gonzaga do Maranhão/MA por </span>
              <strong style={{ marginLeft: '.5rem', marginRight: '.5rem' }}>@AdailtonMesquita </strong> <span style={{ marginRight: '2rem' }}> - Projeto desenvolvido com o apoio do servidor do TJMA @FranciscoBogea</span>
            </Marquee>
          </Footer>

        </ContentContainer >

      </Container >

      {
        dataBase.length <= 0 && <OverlayLoading />
      }
    </>

  );
}

