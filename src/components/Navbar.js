import { Link } from 'react-router-dom';
import React from "react";

// The header component - will serve as the nav-bar
const Navbar = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/">
        Login
      </Link> |{" "}
      <Link to="/profile">
        Profile
      </Link> |{" "}
      <Link to="/home">
        Home
      </Link> |{" "}
      <Link to="/register">
        Sign Up
      </Link> |{" "}
     
        

    </nav>
  )  
};

export default Navbar;