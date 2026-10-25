import React, { useState, useEffect } from 'react';
import { Header, About, Contact, Portfolio, Resume, Footer } from './components';
import './layouts/overstyle.css';

function App() {
  const [page, setPage] = useState('Portfolio');

  useEffect(() => {
    const faviconMap = {
      'About Me': './favicon.ico',
      Portfolio: './favicon.ico',
      Contact: './favicon.ico',
      Resume: './favicon.ico',
      '*': './favicon.ico',
    };

    document.title = `Lauren Wollaston ~ ${page} ~`;

    const pageico = faviconMap[page] || faviconMap['*'];
    const favicon = document.querySelector('link[rel="icon"]');

    if (favicon) {
      favicon.href = pageico;
    }
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
      <div className="ui container" style={{width:'100%'}}>
        {renderPageComponent()}
      </div>
      <Footer />
      
    </div>
  );
}

export default App;