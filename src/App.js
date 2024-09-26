import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route component={Home} exact path='/' />
        <Route component={NasaPhoto} path ='/NasaPhoto' />
      </div>
    </BrowserRouter>
  );
}

export default App;
