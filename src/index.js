/*
* FILE          :   index.js
* PROJECT       :   SENG3080 - Group Project
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-04-18
* DESCRIPTION   :   The client for the PicMe application. It produces a list of posts
*                   for users to add to and comment on, positng images of their own.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>   
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);