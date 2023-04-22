import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { UserContextProvider, authUser } from './contexts/userContext';
import { Private } from './pages/Private';
import { Loading } from './components/Loading';




export default function App() {

  const { user } = authUser();
  console.log('user APP', user);

  return (


    <Router>
      <UserContextProvider >
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path='/home' element={<Private> <Home /></Private>} />
          {/* O :email acima faz com quer traga o parametro email da pagina de login para Home */}
        </Routes>
      </UserContextProvider>
    </Router>
  );
}
