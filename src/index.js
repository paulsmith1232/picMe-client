import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import Login from './pages/Login';

// issue with semantic-ui-css - required setting "react-scripts" to version "4.0.3" in package.json
// originally at 5.0.0 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>   
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);