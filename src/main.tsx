import React from 'react';
import ReactDOM from 'react-dom';
import Home from './paginas/home/Home';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);