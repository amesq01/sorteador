import { useEffect, useState } from 'react';

import * as C from './styles';
import { Navigate, useNavigate } from 'react-router-dom';

import logoIMG from '../../assets/logoNew.png';

import { authUser } from '../../contexts/userContext';
import { Loading } from '../../components/Loading';
import Marquee from 'react-fast-marquee';



export const Login = () => {

  const navigate = useNavigate();
  const { signIn, user }: any = authUser();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLog, setErrorLog] = useState('');
  const [logged, setLogged] = useState(false);






  useEffect(() => {


    if (user) {
      navigate('/home');
      console.log('usuario DENTRO userEffect', user);

    }
  }, []);
  console.log('depois aquiusereffect', user);

  async function handleSubmit(e: any) {

    e.preventDefault();

    try {
      await signIn(email, password);
      navigate('/home');
    } catch (error: any) {

      setErrorLog(error.message);
    }
  }

  return (
    <>

      <C.Container  >
        <C.Content>
          <C.LogoContainer>
            <C.Logo src={logoIMG} />
            <h1>Fórum Desembargador <span> Raimundo Ewerton De Paiva</span></h1>
            <h2>São Luís Gonzaga do Maranhão</h2>

          </C.LogoContainer>
          <C.InputsContainer onSubmit={handleSubmit}>
            <h1>SORTEADOR DE JURADOS</h1>
            <h2>Faça Login para acessar o Sistema</h2>

            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onFocus={() => setErrorLog('')}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errorLog && (
              <C.Error>
                {errorLog}
              </C.Error>
            )}

            <button >
              LOGIN
            </button>
            {/* <Link to="/home" className="button" >
            LOGIN
          </Link>*/}
            <span onClick={() => alert('acesso solicitado')}>
              Solicitar acesso
            </span>

          </C.InputsContainer>
          <C.Footer>
            <Marquee pauseOnHover gradient={false} gradientColor={[0, 0, 0]}>
              <span>2023 - Disponibilizado gratuitamente ao TJMA - Fórum de São Luís Gonzaga do Maranhão/MA por </span>
              <strong style={{ marginLeft: '.5rem', marginRight: '.5rem' }}>@AdailtonMesquita </strong> <span style={{ marginRight: '2rem' }}> - Projeto desenvolvido com o apoio do servidor do TJMA @FranciscoBogea</span>
            </Marquee>
          </C.Footer>
        </C.Content>
      </C.Container>

    </>
  );
};


