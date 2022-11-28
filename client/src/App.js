import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import N1 from './components/N1';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';




function App() {
  return (
    <>
    
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register />} />
        <Route path='/N1' element={<N1 />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
