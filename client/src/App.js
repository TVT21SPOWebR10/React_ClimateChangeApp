import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    
    <div className="App">
      <Navbar />
      <Routes>
       <Route path='/login' element={<Login/>} />
       <Route path='/Register' element={<Register />} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;
