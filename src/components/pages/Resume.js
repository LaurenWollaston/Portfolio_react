import React from 'react';
import Card from '../Card';

const Resume = () => {
  const handleDownloadClick = () => {
    // Replace './flower.txt' with the actual URL of the file you want to serve for download
    const fileURL = './flower.txt';
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', 'flower.txt');
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
            I do not have a resume. If I have one after consulting career services, I will put it here.
            To demonstrate the ability to serve downloads, click the button below to download a text file with ASCII art.
          </p><div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
            <button onClick={handleDownloadClick} style={{border:'3px outset white',backgroundColor:'gainsboro',color:'black'}}>Download ASCII Art</button>
          </div>
        </>
      }
    />
  );
};

export default Resume;
