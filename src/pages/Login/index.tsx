import { useState } from 'react';

import * as C from './styles';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import logoIMG from '../../assets/logo.png';

import { auth } from '../../utils/firebase';




import { signInWithEmailAndPassword } from 'firebase/auth';



export const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function enter() {
    alert(email);
    signInWithEmailAndPassword(auth, email, password)
      .then((teste) => {
        const user = teste.user;
        const email = user.email;
        console.log(user.email);
        navigate(`/home/${email}`,);
      })
      .catch(error => alert(error));

  }

  return (
    <C.Container bg={bac} >
      <C.Content>
        <C.LogoContainer>
          <C.Logo src={logoIMG} />
          <h1>Fórum Desembargador <span> Raimundo Ewerton De Paiva</span></h1>
          <h2>São Luís Gonzaga do Maranhão</h2>

        </C.LogoContainer>
        <C.InputsContainer>
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
            <div
              style={{
                display: 'flex',
                width: '80%',
                justifyContent: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: 10,
                  color: '#f6f6f6',
                  fontWeight: '300',
                }}
              >
                Email ou senha invalidos
              </h1>
            </div>
          )}

          <button type="submit" onClick={enter}>
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
