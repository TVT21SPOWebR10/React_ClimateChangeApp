import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import N1 from './components/N1';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import N2 from './components/N2';
import N3 from './components/N3';
import Home from './components/Home';

function App() {
  return (
    <>
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Register' element={<Register />} />
        <Route path='/N1' element={<N1 />} />
        <Route path='/N2' element={<N2 />} />
        <Route path='/N3' element={<N3 />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </div>
  
    </>
  );
}

export default App;
