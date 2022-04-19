/*
* FILE          :   Navbar.js
* PROJECT       :   SENG3080 - Group Project
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-04-18
* DESCRIPTION   :   Navbar component for the application.
*/
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'
import React, { useState } from "react";


// The header component - will serve as the nav-bar
const Navbar = () => {
  const navigate = useNavigate();
  var token = localStorage.getItem("my_user_token");

  const [activeItem, setActiveItem] = useState('explore');
  const handleItemClick = (e, { name }) => setActiveItem( name );

  // logs user out by deleting their localstorage session
  const handleLogout = () => {
    localStorage.removeItem("my_user_token");
    navigate("/");
  };

  // combines semantic-ui-react components with react router
  return (
    <Menu pointing
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
    <Menu.Item
       as={NavLink} to="/" 
       name='login'
       active={activeItem === 'login'}
       onClick={handleItemClick}
     />
     <Menu.Item
        as={NavLink} to="/register" 
        name='register'
        active={activeItem === 'register'}
        onClick={handleItemClick}
      />
      <Menu.Item
         as={NavLink} to="/home" 
         name='home'
         active={activeItem === 'home'}
         onClick={handleItemClick}
       />
      
      {token ? <Button floated='right' onClick={handleLogout}>Logout</Button> : null}
      

        

    </Menu>
  )  
};

export default Navbar;