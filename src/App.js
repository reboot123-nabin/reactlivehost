
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import { BounceLoader, BarLoader, BeatLoader} from 'react-spinners'
import './css/style.css';
//import './js/main.js';
import $ from 'jquery';
import PreLoader3 from "./components/PreLoader3";
import React,{useState,useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

function App() {

  
  return (
   
    <BrowserRouter>
       
    <div className="App">

   

      <Header></Header>
      
      <Body></Body>
     
      <Footer></Footer>
    </div>

    </BrowserRouter>
  );
}

export default App;
