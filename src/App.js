import React, { useState, useEffect } from 'react';
import { Header, Navbar, About, Contact, Portfolio, Resume, Footer } from './components';
import './layouts/overstyle.css';

function App() {
  const [page, setPage] = useState("Portfolio");

  const faviconMap = {
    'About Me': './favicon.ico',
    'Portfolio': './favicon.ico',
    'Contact': './favicon.ico',
    'Resume': './favicon.ico',
    '*': './favicon.ico',
  };

  useEffect(() => {
  document.title = `Lauren Wollaston ~ ${page} ~`;

  const pageico = faviconMap[page] || './favicon.ico';
  const favicon = document.querySelector('link[rel="icon"]');
  favicon.href = pageico;
}, [page]);

  const renderPageComponent = () => {
    switch (page) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header page={page} setPage={setPage} />
      <div className="ui container">
        {renderPageComponent()}
      </div>
      <Footer />
      
    </div>
  );
}

export default App;