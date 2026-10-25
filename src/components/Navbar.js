import React from 'react';
import '../layouts/header.css'


const Navbar = ({page, setPage }) => {
    return (
      <nav className="headerNav" aria-label="Main navigation">
        <ul className="headerNavList">
          <li><button className="headerNavButton" aria-current={page === 'About Me' ? 'page' : undefined} onClick={() => setPage('About Me')}>About Me</button></li>
          <li><button className="headerNavButton" aria-current={page === 'Portfolio' ? 'page' : undefined} onClick={() => setPage('Portfolio')}>Portfolio</button></li>
          <li><button className="headerNavButton" aria-current={page === 'Resume' ? 'page' : undefined} onClick={() => setPage('Resume')}>Resume</button></li>
        </ul>
      </nav>
    );
  }

export default Navbar;