/*
* FILE          :   App.js
* PROJECT       :   SENG3080 - Group Project
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-04-18
* DESCRIPTION   :   The top level component of the application. Houses the
*                   routing logic
*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/Signup';
import { Container } from 'semantic-ui-react';
import './App.css'

// componentOnMount
// detect user state and set redirect there

export default function App() {
  return (
    <div className="App">
      <Navbar />  
      <Container  className='width-adjust'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />        
          <Route path="home" element={<Home />} />
        </Routes>
      </Container>    
    </div>
  );  
}