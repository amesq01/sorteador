import { useEffect, useState } from 'react';

import * as C from './styles';
import { Navigate, useNavigate } from 'react-router-dom';

import logoIMG from '../../assets/logo.png';

import { authUser } from '../../contexts/userContext';
import { Loading } from '../../components/Loading';



export const Login = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLog, setErrorLog] = useState('');

  const { signIn, user }: any = authUser();

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }), [];

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
          2023 - © Licenciado gratuitamente por Adailton Mesquita.
        </C.Footer>
      </C.Content>
    </C.Container>
  );
};
