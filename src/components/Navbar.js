import React from 'react';
import '../layouts/header.css'

const Navbar = ({ setPage }) => {
    return (
      <nav>
        <ul>
          <button onClick={() => setPage('About Me')}><li>About Me</li></button>
          <button onClick={() => setPage('Portfolio')}><li>Portfolio</li></button>
          <button onClick={() => setPage('Contact')}><li>Contact</li></button>
          <button onClick={() => setPage('Resume')}><li>Resume</li></button>
        </ul>
      </nav>
    );
  }

export default Navbar;