import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { UserContextProvider, authUser } from './contexts/userContext';
import { Private } from './pages/Private';
import { Results } from './pages/Results';

import 'react-toastify/dist/ReactToastify.css';


export default function App() {

  const { user } = authUser();

  return (

    <UserContextProvider >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/home' element={<Private> <Home /></Private>} />
          <Route path='/results' element={<Private> <Results /></Private>} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}
