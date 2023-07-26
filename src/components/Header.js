import React from 'react';
import Navbar from '../components/Navbar';
import '../layouts/header.css';

const Header = ({ page, setPage }) => {
  return (
    <div className="header">
      <h1 style={{marginRight:"auto", marginLeft:"15px"}}>Lauren Wollaston</h1><p style={{marginLeft:"auto"}}><Navbar setPage={setPage} /></p>
    </div>
  );
}

export default Header;