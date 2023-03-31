import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home/:email' element={<Home />} />
        {/* O :email acima faz com quer traga o parametro email da pagina de login para Home */}
      </Routes>
    </Router>
  );
}
