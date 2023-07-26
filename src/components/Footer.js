import React from 'react';

const Footer = ({}) => {
  return (
    <div style={{ backgroundColor: 'rgb(0 0 0 / 82%)', padding: '20px', textAlign: 'left',position:'fixed',bottom:'0',width:'100%',marginBottom:'0',paddingBottom:'1vh',paddingTop:'1vh' }}>
      <div>
        <a href="https://www.linkedin.com/in/lauren-wollaston-07a6ab279/" target="_blank" className='footerLink' rel="noopener noreferrer">
          <img src="./linkedin.webp" alt="LinkedIn" style={{ width: '50px', height: '50px', margin: '10px', marginBottom:'0px',marginRight:'2vw' }} />
        </a>
        <a href="https://github.com/LaurenWollaston/" target="_blank" className='footerLink' rel="noopener noreferrer">
          <img src="./github-mark.svg" alt="Github" style={{ width: '50px', height: '50px', margin: '10px', marginBottom:'0px',marginRight:'2vw' }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
