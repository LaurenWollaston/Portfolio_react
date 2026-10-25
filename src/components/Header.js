import React from 'react';
import Navbar from '../components/Navbar';
import '../layouts/header.css';

const Header = ({ page, setPage }) => {
  return (
    <header className="header">
      <h1 className="headerTitle">Lauren Wollaston</h1>
      <Navbar page={page} setPage={setPage} />
    </header>
  );
}

export default Header;