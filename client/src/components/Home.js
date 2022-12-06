import React, { useState, useEffect } from 'react'
import Navbar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import V1 from './charts/V1';
import V5 from './charts/V5';
import V6 from './charts/V6';
import V7 from './charts/V7';

export default function Home(props) {

  const navigate = useNavigate();
  const username = window.localStorage.getItem('username');
  const deleteAccount = () => {
    
    //poistaa käyttäjän tietokannasta.
    const id = window.localStorage.getItem('id');
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(res => {
        console.log(res)
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('id');
        window.location.reload(false);
        navigate('/Login')
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  //kysyy varmistuksen ennen poistoa.
  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      deleteAccount();
    }
  }

  //graafit
  const [chart, setChart] = useState(false);
  const [chart5, setChart5] = useState(false);
  const [chart6, setChart6] = useState(false);
  const [chart7, setChart7] = useState(false);

  //haetaan graafit localstoragesta.
  useEffect(() => {
    const chart = window.localStorage.getItem('chart');
    if ( chart !== null ) setChart(JSON.parse(chart));
    const chart5 = window.localStorage.getItem('chart5');
    if ( chart5 !== null ) setChart5(JSON.parse(chart5));
    const chart6 = window.localStorage.getItem('chart6');
    if ( chart6 !== null ) setChart6(JSON.parse(chart6));
    const chart7 = window.localStorage.getItem('chart7');
    if ( chart7 !== null ) setChart7(JSON.parse(chart7));
    }, []);

    //asettaa graafit localstorageen.
    useEffect(() => {
      window.localStorage.setItem('chart', JSON.stringify(chart));
      window.localStorage.setItem('chart5', JSON.stringify(chart5));
      window.localStorage.setItem('chart6', JSON.stringify(chart6));
      window.localStorage.setItem('chart7', JSON.stringify(chart7));
    }, [chart, chart5, chart6, chart7]);


  //piilottaa kaikki graafit kerralla.
  const hideChart = () => {
    setChart(false);
    setChart5(false);
    setChart6(false);
    setChart7(false);
    window.localStorage.setItem('chart', false);
    window.localStorage.setItem('chart5', false);
    window.localStorage.setItem('chart6', false);
    window.localStorage.setItem('chart7', false);
  }


  return (
    <>
    <Navbar />
    <h1 className="homeTitle">Welcome to home page {username}. Here you can create your own visualizations with the charts.</h1>
    <div>
      <button className="deleteBtn" onClick={ confirmDelete }>Delete Account</button>
    </div>
    
    <div className="chartBtns">
      <button className="chartBtn" onClick={() => setChart(true)}>V1-V2</button>
      <button className="chartBtn" onClick={() => setChart5(true)}>V5</button>
      <button className="chartBtn" onClick={() => setChart6(true)}>V6</button>
      <button className="chartBtn" onClick={() => setChart7(true)}>V7</button>
      
      <button className="chartBtn" onClick={() => setChart(false)}>Delete V1-V2</button>
      <button className="chartBtn" onClick={() => setChart5(false)}>Delete V5</button>
      <button className="chartBtn" onClick={() => setChart6(false)}>Delete V6</button>
      <button className="chartBtn" onClick={() => setChart7(false)}>Delete V7</button>
      
      <button className="chartBtn" onClick={hideChart}>Delete all</button>
      
    </div> <br/>
    <div className="charts">
      {chart ? <V1 /> : null} <br/>
      {chart5 ? <V5 /> : null}  <br/>
      {chart6 ? <V6 /> : null}  <br/>
      {chart7 ? <V7 /> : null}  <br/>
    </div>
    </>
  )
}
