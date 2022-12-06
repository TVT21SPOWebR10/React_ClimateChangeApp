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

   //poistaa käyttäjän tietokannasta.
  const deleteAccount = () => {  
    const id = window.localStorage.getItem('id');
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(res => {
        console.log(res)
        window.localStorage.clear();
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

  //notet
  const [notes, setNotes] = useState([]);
  const [notes5, setNotes5] = useState([]);
  const [notes6, setNotes6] = useState([]);
  const [notes7, setNotes7] = useState([]);

  //haetaan notet localstoragesta.
  useEffect(() => {
    const notes = window.localStorage.getItem('note');
    if ( notes !== null ) setNotes(JSON.parse(notes));
    const notes5 = window.localStorage.getItem('note5');
    if ( notes5 !== null ) setNotes5(JSON.parse(notes5));
    const notes6 = window.localStorage.getItem('note6');
    if ( notes6 !== null ) setNotes6(JSON.parse(notes6));
    const notes7 = window.localStorage.getItem('note7');
    if ( notes7 !== null ) setNotes7(JSON.parse(notes7));
    }, []);


    //asettaa notet localstorageen.
    useEffect(() => {
      window.localStorage.setItem('note', JSON.stringify(notes));
      window.localStorage.setItem('note5', JSON.stringify(notes5));
      window.localStorage.setItem('note6', JSON.stringify(notes6));
      window.localStorage.setItem('note7', JSON.stringify(notes7));
    }, [notes, notes5, notes6, notes7]);

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

  //handechange funktiot jokaisen graafin omalle notelle
  const handleChange = e => {
    localStorage.setItem("notes", e.target.value);
    setNotes(e.target.value);
  };
  const handleChange5 = e => {
    localStorage.setItem("notes5", e.target.value);
    setNotes5(e.target.value);
  };
  const handleChange6 = e => {
    localStorage.setItem("notes6", e.target.value);
    setNotes6(e.target.value);
  };
  const handleChange7 = e => {
    localStorage.setItem("notes7", e.target.value);
    setNotes7(e.target.value);
  };



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
      {chart ? <V1 /> : null} 
      {chart ? <input type="text" placeholder="Add notes..." className="notes" value={notes} onChange={handleChange}/> : null} <br/>
      {chart5 ? <V5 /> : null}
      {chart5 ? <input type="text" placeholder="Add notes..." className="notes" value={notes5} onChange={handleChange5}/> : null} <br/>
      {chart6 ? <V6 /> : null}
      {chart6 ? <input type="text" placeholder="Add notes..." className="notes" value={notes6} onChange={handleChange6}/> : null} <br/>
      {chart7 ? <V7 /> : null}
      {chart7 ? <input type="text" placeholder="Add notes..." className="notes" value={notes7} onChange={handleChange7}/> : null} <br/>
    </div>
    </>
  )
}
