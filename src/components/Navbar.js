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

  const handleLogout = () => {
    localStorage.removeItem("my_user_token");
    navigate("/");
  };

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