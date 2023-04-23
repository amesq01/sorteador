import { useEffect, useState } from 'react';

import Marquee from 'react-fast-marquee';

import logo from '../../../src/assets/logo.png';


import {
  Container,
  Header,
  LogoImg,
  Title,
  ContentContainer,
  Content,
  Footer,
} from './styles';



import { authUser } from '../../contexts/userContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DrawnJuror } from '../../components/Button/styles';



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
  const [drawns, setDrawns] = useState([] as any);


  useEffect(() => {
    const getDrawns = async () => {
      const data = await getDocs(collection(db, 'teste2'));
      const results = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      const a = results[0];
      console.log(a);

      setDrawns(a);
      console.log('lista', drawns);


    };
    getDrawns();
  }, []);


  return (
    <>
      <Container>

        <Header>
          <LogoImg src={logo} />
          <Title>Sorteador de Jurados</Title>
          <span>Usuário LOGADO: {user.email} <button onClick={handleLogout}>Sair</button></span>
        </Header>



        <ContentContainer>
          <Content>
            <h1>ok

            </h1>
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

