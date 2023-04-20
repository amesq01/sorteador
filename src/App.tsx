import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { UserContextProvider } from './contexts/userContext';



export default function App() {



  return (

    <Router>
      <UserContextProvider >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/home' element={<Home />} />
          {/* O :email acima faz com quer traga o parametro email da pagina de login para Home */}
        </Routes>
      </UserContextProvider>
    </Router>
  );
}
