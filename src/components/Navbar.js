import React from 'react';
import '../layouts/header.css'


const Navbar = ({page, setPage }) => {
    return (
      <nav>
        <ul>
          <button id={page==='About Me'? 'activated':''} onClick={() => setPage('About Me')}><li>About Me</li></button>
          <button id={page==='Portfolio'? 'activated':''} onClick={() => setPage('Portfolio')}><li>Portfolio</li></button>
          <button id={page==='Resume'? 'activated':''} onClick={() => setPage('Resume')}><li>Resume</li></button>
        </ul>
      </nav>
    );
  }

export default Navbar;