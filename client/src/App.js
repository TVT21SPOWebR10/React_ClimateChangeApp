import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import N1 from './components/N1';
import { Route, Routes } from 'react-router-dom';
import N2 from './components/N2';
import N3 from './components/N3';
import Home from './components/Home';
import { useState } from 'react';

const jwtFromStorage = localStorage.getItem("token");

function App() {
  //määtitään state muuttuja userJwt ja setUserJwt käyttäjälle joka toimii tilana käyttäjän kirjautumiselle.
  const [userJwt, setUserJwt] = useState(jwtFromStorage);

  //määritetään muuttuja authRoutes, joka sisältää kirjautumis ja rekisteröinti sivut.
  let authRoutes = <>
    <Route path='/Login' element={<Login login={ newJwt => {
      setUserJwt(newJwt)
      window.localStorage.setItem('token', newJwt)
      } } />} />
    <Route path='/Register' element={<Register />} />
  </>

  //jos käyttäjä kirjautunut sisään, niin authRoutes sisältää Home sivun.
  if(userJwt != null){
    authRoutes = <Route path="/Home" element={ <Home Loggedin={userJwt != null} logout={()=> {
    setUserJwt(null)
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
        <Route path="*" element={ <N1 Loggedin={userJwt != null}/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
