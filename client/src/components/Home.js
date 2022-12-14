import React, { useState, useEffect } from 'react'
import Navbar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import V1 from './charts/V1';
import V5 from './charts/V5';
import V6 from './charts/V6';
import V7 from './charts/V7';
import V3 from './charts/V3';
import V8 from './charts/V8';

export default function Home(props) {

  const navigate = useNavigate();
  const username = window.localStorage.getItem('username');

  //poistaa käyttäjän tietokannasta sekä kaikki käyttäjän luomat visualisoinnit.
  const deleteAccount = () => {
    const id = window.localStorage.getItem('id');
    axios.delete(process.env.REACT_APP_API_ADDRESS + `/delete/${id}`)
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

  //kysyy varmistuksen ennen käyttäjän poistoa.
  const confirmDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      deleteAccount();
    }
  }

  const [twoRows, setTwoRows] = useState(false);

  const handleButtonClick = () => {
    setTwoRows(!twoRows);
  }


  //graafit
  const [chart, setChart] = useState(false);
  const [chart3, setChart3] = useState(false);
  const [chart5, setChart5] = useState(false);
  const [chart6, setChart6] = useState(false);
  const [chart7, setChart7] = useState(false);
  const [chart8, setChart8] = useState(false);

  //notet
  const [notes, setNotes] = useState([]);
  const [notes3, setNotes3] = useState([]);
  const [notes5, setNotes5] = useState([]);
  const [notes6, setNotes6] = useState([]);
  const [notes7, setNotes7] = useState([]);
  const [notes8, setNotes8] = useState([]);

  //haetaan notet localstoragesta.
  useEffect(() => {
    const notes = window.localStorage.getItem('note');
    if (notes !== null) setNotes(JSON.parse(notes));
    const notes3 = window.localStorage.getItem('note3');
    if (notes3 !== null) setNotes3(JSON.parse(notes3));
    const notes5 = window.localStorage.getItem('note5');
    if (notes5 !== null) setNotes5(JSON.parse(notes5));
    const notes6 = window.localStorage.getItem('note6');
    if (notes6 !== null) setNotes6(JSON.parse(notes6));
    const notes7 = window.localStorage.getItem('note7');
    if (notes7 !== null) setNotes7(JSON.parse(notes7));
    const notes8 = window.localStorage.getItem('note8');
    if (notes8 !== null) setNotes8(JSON.parse(notes8));
  }, []);


  //asettaa notet localstorageen.
  useEffect(() => {
    window.localStorage.setItem('note', JSON.stringify(notes));
    window.localStorage.setItem('note3', JSON.stringify(notes3));
    window.localStorage.setItem('note5', JSON.stringify(notes5));
    window.localStorage.setItem('note6', JSON.stringify(notes6));
    window.localStorage.setItem('note7', JSON.stringify(notes7));
    window.localStorage.setItem('note8', JSON.stringify(notes8));
  }, [notes, notes3, notes5, notes6, notes7, notes8]);

  //haetaan graafit localstoragesta.
  useEffect(() => {
    const chart = window.localStorage.getItem('chart');
    if (chart !== null) setChart(JSON.parse(chart));
    const chart3 = window.localStorage.getItem('chart3');
    if (chart3 !== null) setChart3(JSON.parse(chart3));
    const chart5 = window.localStorage.getItem('chart5');
    if (chart5 !== null) setChart5(JSON.parse(chart5));
    const chart6 = window.localStorage.getItem('chart6');
    if (chart6 !== null) setChart6(JSON.parse(chart6));
    const chart7 = window.localStorage.getItem('chart7');
    if (chart7 !== null) setChart7(JSON.parse(chart7));
    const chart8 = window.localStorage.getItem('chart8');
    if (chart8 !== null) setChart8(JSON.parse(chart8));
  }, []);

  //asettaa graafit localstorageen.
  useEffect(() => {
    window.localStorage.setItem('chart', JSON.stringify(chart));
    window.localStorage.setItem('chart3', JSON.stringify(chart3));
    window.localStorage.setItem('chart5', JSON.stringify(chart5));
    window.localStorage.setItem('chart6', JSON.stringify(chart6));
    window.localStorage.setItem('chart7', JSON.stringify(chart7));
    window.localStorage.setItem('chart8', JSON.stringify(chart8));
  }, [chart, chart3, chart5, chart6, chart7, chart8]);


  //poistaa kaikki graafit kerralla.
  const hideChart = () => {
    setChart(false);
    setChart3(false);
    setChart5(false);
    setChart6(false);
    setChart7(false);
    setChart8(false);
    window.localStorage.setItem('chart', false);
    window.localStorage.setItem('chart3', false);
    window.localStorage.setItem('chart5', false);
    window.localStorage.setItem('chart6', false);
    window.localStorage.setItem('chart7', false);
    window.localStorage.setItem('chart8', false);
  }

  //handlechange funktiot jokaisen graafin omalle notelle
  const handleChange = e => {
    localStorage.setItem("notes", e.target.value);
    setNotes(e.target.value);
  };
  const handleChange3 = e => {
    localStorage.setItem("notes3", e.target.value);
    setNotes3(e.target.value);
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
  const handleChange8 = e => {
    localStorage.setItem("notes8", e.target.value);
    setNotes8(e.target.value);
  };


  return (
    <>
      <Navbar />
      <h1 className="homeTitle">Welcome to home page {username}. Here you can create your own visualizations with the charts.</h1>
      <div>
        <button className="deleteBtn" onClick={confirmDelete}>Delete Account</button>
      </div>

      <div className="chartBtns">
        <button className="chartBtn" onClick={() => setChart(true)}>Add V1-V2</button>
        <button className="chartBtn" onClick={() => setChart3(true)}>Add V3-V4</button>
        <button className="chartBtn" onClick={() => setChart5(true)}>Add V5</button>
        <button className="chartBtn" onClick={() => setChart6(true)}>Add V6</button>
        <button className="chartBtn" onClick={() => setChart7(true)}>Add V7</button>
        <button className="chartBtn" onClick={() => setChart8(true)}>Add V8</button>

        <button className="chartBtnDel" onClick={() => setChart(false)}>Delete V1-V2</button>
        <button className="chartBtnDel" onClick={() => setChart3(false)}>Delete V3-V4</button>
        <button className="chartBtnDel" onClick={() => setChart5(false)}>Delete V5</button>
        <button className="chartBtnDel" onClick={() => setChart6(false)}>Delete V6</button>
        <button className="chartBtnDel" onClick={() => setChart7(false)}>Delete V7</button>
        <button className="chartBtnDel" onClick={() => setChart8(false)}>Delete V8</button>

        <button className="chartBtnDel" onClick={hideChart}>Delete all</button>

      </div> <br />


      <div>
        <button className="toggleViewBtn" onClick={handleButtonClick}>
          Toggle grid view
        </button>
        <div className={twoRows ? 'twoRows' : 'grid'}>
          <div className="1">
            {chart ? <V1 /> : null}
            {chart ? <input type="text" placeholder="Add notes..." className="notes" value={notes} onChange={handleChange} /> : null}
          </div>
          <div className="3">
            {chart3 ? <V3 /> : null}
            {chart3 ? <input type="text" placeholder="Add notes..." className="notes" value={notes3} onChange={handleChange3} /> : null}
          </div>
          <div className="5">
            {chart5 ? <V5 /> : null}
            {chart5 ? <input type="text" placeholder="Add notes..." className="notes" value={notes5} onChange={handleChange5} /> : null}
          </div>
          <div className="7">
            {chart6 ? <V6 /> : null}
            {chart6 ? <input type="text" placeholder="Add notes..." className="notes" value={notes6} onChange={handleChange6} /> : null}
          </div>
          <div className="9">
            {chart7 ? <V7 /> : null}
            {chart7 ? <input type="text" placeholder="Add notes..." className="notes" value={notes7} onChange={handleChange7} /> : null}
          </div>
          <div className="11">
            {chart8 ? <V8 /> : null}
            {chart8 ? <input type="text" placeholder="Add notes..." className="notes" value={notes8} onChange={handleChange8} /> : null}
          </div>
        </div>
      </div>
    </>
  )
}
