import { useState } from 'react';

import * as C from './styles';
import { useNavigate } from 'react-router-dom';

import logoIMG from '../../assets/logo.png';
import { auth } from '../../utils/firebase';

import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function Login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const email = user.email;
        navigate('./home');
      }).catch((err) => {
        setError(err);
        setEmail('');
        setPassword('');
      }
      );

  }

  return (
    <C.Container  >
      <C.Content>
        <C.LogoContainer>
          <C.Logo src={logoIMG} />
          <h1>Fórum Desembargador <span> Raimundo Ewerton De Paiva</span></h1>
          <h2>São Luís Gonzaga do Maranhão</h2>

        </C.LogoContainer>
        <C.InputsContainer onSubmit={e => e.preventDefault()}>
          <h1>SORTEADOR DE JURADOS</h1>
          <h2>Faça Login para acessar o Sistema</h2>

          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onFocus={() => setError('')}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error && (
            <C.Error>




              Email ou senha inválidos

            </C.Error>
          )}

          <button type="submit" onClick={Login}>
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
