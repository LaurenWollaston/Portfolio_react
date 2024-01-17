import React from 'react';
import Card from '../Card';

const Resume = () => {
  const handleDownloadClick = () => {
    const fileURL = './Resume_LaurenWollaston.docx';
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', 'Resume_LaurenWollaston.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card
      header="Resume"
      imageref="./123914408.webp"
      cardBody={
        <>
          <p>
            I have experience in mySQL, MongoDB, Javascript, React, RESTful APIs, HTML, CSS, Bootstrap, Front-End development, Back-End development, and Responsive Web Design. I can be contacted through my email, LaurenWollaston@outlook.com, or through linkedIn, which is linked in the bottom left corner of the screen.
          </p><div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
            <button onClick={handleDownloadClick} style={{border:'3px outset white',backgroundColor:'gainsboro',color:'black'}}>Download Resume</button>
          </div>
        </>
      }
    />
  );
};

export default Resume;
