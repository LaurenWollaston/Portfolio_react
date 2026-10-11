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
      imageref={`${process.env.PUBLIC_URL}/123914408.webp`}
      cardBody={
        <>
          <p>
            I have experience in mySQL, MongoDB, Javascript, React, RESTful APIs, HTML, CSS, Bootstrap, Front-End development, Back-End development, Responsive Web Design, Adobe Photoshop, Adobe Illustrator, Python, C++, Microsoft Excel, Powerpoint, and Word, and DaVinci Resolve.
          </p>
          <p>For nonprogramming work: I am familiar with animals and have experience dogsitting and caring for horses. I am capable of caring for plants and taking action when I see they are visibly sick. I am devoutly religious but not with any beliefs that would hinder me from doing any work I'm paid for or working on any specific days of the week or holidays. I am a decent listener and am willing to listen to people for less than a therapist and either be silent and hear what they want to be heard, praying to whatever god they would like, or giving them comforting words.</p>
          <p>With regards to art I enjoy stories and believe that they are more important than most things. I believe that the collaborative effort of creating them is holy and love to work with other peoples ideas rather than against them.</p><div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
          </div>
        </>
      }
    />
  );
};

export default Resume;
