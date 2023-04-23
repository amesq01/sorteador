import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { UserContextProvider, authUser } from './contexts/userContext';
import { Private } from './pages/Private';
import { Loading } from './components/Loading';
import { Results } from './pages/Results';




export default function App() {

  const { user } = authUser();
  console.log('user APP', user);

  return (


    <Router>
      <UserContextProvider >
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path='/home' element={<Private> <Home /></Private>} />
          <Route path='/results' element={<Private> <Results /></Private>} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}
