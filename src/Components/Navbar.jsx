import {ReactComponent as navbar} from '../assets/navbar.svg';
import React from 'react';
 
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Documentation</li>
        <li>Blogs</li>
        <li>LYNC Portal</li>
        <li>Request a Demo</li>
        <li type="button">Get Started</li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
