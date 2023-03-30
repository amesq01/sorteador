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




  return (
    <C.Container>
      <C.Content>
        <C.LogoContainer>
          <C.Logo src={logoIMG} />
          <h1>MINISTÉRIO PÚBLICO DO MARANHÃO</h1>
          <h2>PROCURADORIA GERAL DE JUSTIÇA</h2>
          <h2>COORDENADORIA DE GESTÃO DE PESSOAS</h2>
        </C.LogoContainer>
        <C.InputsContainer>
          <h1>SIMULADOR DE APOSENTADORIA</h1>
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

          <button type="submit" onClick={() => alert(email)}>
            LOGIN
          </button>
          {/* <Link to="/home" className="button" >
            LOGIN
          </Link>*/}
          <span onClick={() => alert('acesso solicitado')}>
            Solicitar acesso
          </span>
          <footer>
            © Licenciado gratuitamente por Adailton Mesquita e Adriano Mesquita
            ao Ministério Público do Estado do Maranhão - ano 2021 -2022.
          </footer>
        </C.InputsContainer>
      </C.Content>
    </C.Container>
  );
};
