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
import { Navigate, useNavigate } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, getDocs, orderBy, query,  } from 'firebase/firestore';
import { DrawnJuror } from '../../components/Button/styles';
import { ResultItem } from '../../components/ResultItem';



export function Results() {


  // Obtém uma referência para a coleção




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

  //const [drawns, setDrawns] = useState([] as any);


  useEffect(() => {



    const getDrawns = async () => {
      const ref = collection(db, 'teste2');
      const orderby = query(ref, orderBy('createdAt', 'asc'));
      const data = await getDocs(orderby);
      const results = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      const resultsLast:any = results[(results.length -1)];
      console.log(resultsLast);
      const createdAt = new Date (resultsLast.createdAt.seconds*1000).toLocaleDateString('pt-BR');
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
            {listAllProcessInfos.map((item:any)=> <span key={item}>{item}</span> )}
          </ProcessInfos>
          <UserInfo>
            <span>Usuário Logado:</span>
            <span>{user.email}</span>
            <button onClick={handleLogout} >Sair</button>
          </UserInfo>
        </SubHeader>


        <ContentContainer>
          <Content>
            <h2>Sorteio realizado em: <span>{createdAt}</span></h2>

            <div style={{display:'flex', gap:'1.2rem', marginTop:'1.2rem'}}>

              <ResultItem data={listAllJurors} label='Lista de Todos os Jurados' />
              <ResultItem data={listDrawnJurors} label='Lista de Todos os Jurados Aceitos' borderColor />
              <ResultItem data={listJurorsNotDrawnConst} label='Lista de Todos os Jurados não sorteados'  />
              <ResultItem data={ listDispenseJurorsJudge   } label='Lista de Todos os Jurados Dispensados pelo Juízo'  />
              <ResultItem data={listAbsentWithJustification} label='Lista de Todos os Jurados ausentes com justificativa'  />
              <ResultItem data={   listAbsentWithoutJustification } label='Lista de Todos os Jurados ausentes sem justificativa'  />
              <ResultItem data={  listMotivatedDispenseJurorsAdv  } label='Lista de Todos os Jurados dispensados com motivo pelo Advogado(a)'  />
              <ResultItem data={  listUnMotivatedDispenseJurorsAdv  } label='Lista de Todos os Jurados dispensados sem motivo pelo Advogado(a)'  />
              <ResultItem data={  listMotivatedDispenseJurorsMP  } label='Lista de Todos os Jurados dispensados com motivo pelo Ministério Público'  />
              <ResultItem data={  listUnMotivatedDispenseJurorsMP  } label='Lista de Todos os Jurados dispensados sem motivo pelo Ministério Público'  />
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

    </>
  );
}

