

import { Route, Routes} from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/register' element={ <RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
