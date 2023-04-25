import { useEffect, useState } from 'react';

import * as C from './styles';
import { useNavigate } from 'react-router-dom';

import logoIMG from '../../assets/logoNew.png';

import { authUser } from '../../contexts/userContext';
import Marquee from 'react-fast-marquee';
import { About } from '../../components/About';



export const Login = () => {

  const navigate = useNavigate();

  const { signIn, user }: any = authUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLog, setErrorLog] = useState('');
  const [aboutFocus, setAboutFocus] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await signIn(email, password);
      navigate('/home');
    }

    catch (error: any) {
      setErrorLog(error.message);
    }
  }

  function handleFocusAbout() {
    setAboutFocus(true);
  }
  function handleFocusAboutLevar() {
    setAboutFocus(false);
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

            {
              errorLog && (
                <C.Error>
                  {errorLog}
                </C.Error>
              )}

            <button >
              LOGIN
            </button>

            <span onClick={() => alert('Função indisponível no momento')}>
              Solicitar acesso
            </span>

          </C.InputsContainer>

          <C.Footer>

            <div onMouseEnter={handleFocusAbout} onMouseLeave={handleFocusAboutLevar} style={{
              position: 'relative', cursor: 'pointer', width: '90%', fontSize: '1.2rem', fontWeight: 'bold', color: 'rgba(255,255,255, 0.6)', fontFamily: 'Open Sans'
            }}>© Sobre
              {
                aboutFocus && <About />
              }
            </div>
            {/* <Marquee pauseOnHover gradient={false} gradientColor={[0, 0, 0]}>
              <span>2023 - Disponibilizado gratuitamente ao TJMA - Fórum de São Luís Gonzaga do Maranhão/MA por </span>
              <strong style={{ marginLeft: '.5rem', marginRight: '.5rem' }}>@AdailtonMesquita </strong> <span style={{ marginRight: '2rem' }}> - Projeto desenvolvido com o apoio do servidor do TJMA @FranciscoBogea</span>
            </Marquee> */}
          </C.Footer>

        </C.Content>
      </C.Container >

    </>
  );
};


