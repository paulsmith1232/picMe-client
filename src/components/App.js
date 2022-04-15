import React from 'react';
import { Routes, Route } from 'react-router-dom';import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import { Container } from 'semantic-ui-react';
import './App.css'

// componentOnMount
// detect user state and set redirect there

export default function App() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <Navbar />  
      <Container  className='width-adjust'>
        <Routes>
          {/* if logged in */}
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />        
          <Route path="login" element={<Login />} />

          {/* if not logged in 
          <Route path="/" element={<Login />} /> */}

        </Routes>
      </Container>    
    </div>
  );  
}