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
      {/* <h1>App</h1> */}
      <Navbar />  
      <Container  className='width-adjust'>
        <Routes>
          {/* if logged in */}
          <Route path="/" element={<Login />} />
          <Route path="profile" element={<Profile />} />        
          <Route path="home" element={<Home />} />
          <Route path="register" element={<SignUp />} />

          {/* if not logged in 
          <Route path="/" element={<Login />} /> */}

        </Routes>
      </Container>    
    </div>
  );  
}