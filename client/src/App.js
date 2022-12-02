import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import N1 from './components/N1';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import N2 from './components/N2';
import N3 from './components/N3';
import Home from './components/Home';
import Notfound from './components/Notfound';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'



const jwtFromStorage = localStorage.getItem("token");

function App() {

  const navigate = useNavigate();

  const [userJwt, setUserJwt] = useState(jwtFromStorage);

  let authRoutes = <>
    <Route path='/' element={<Login login={ newJwt => {
      setUserJwt(newJwt)
      window.localStorage.setItem('token', newJwt)
      } } />} />
    <Route path='/Register' element={<Register />} />
  </>

  if(userJwt != null){
    authRoutes = <Route path="/Home" element={ <Home Loggedin={userJwt != null} logout={()=> {
    setUserJwt(null)
    navigate ('/')
    window.localStorage.removeItem('token');
    }}/>}/>
  }

  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/N1' element={<N1 />} />
        <Route path='/N2' element={<N2 />} />
        <Route path='/N3' element={<N3 />} />
        {authRoutes}
        <Route path="*" element={ <Notfound Loggedin={userJwt != null}/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
