import React from 'react';
import '../../layouts/card.css';
import Card from '../Card';

const About = () => {
  return (
    <Card
      header="About Me"
      imageref="./123914408.webp"
      cardBody={
        <>
          <p>My name is Lauren Wollaston, I am a full stack web developer.</p>
          <p>Some of the web applications I've developed can be found in the portfolio section.</p>
          <p>My resume can be downloaded in the resume section, or I can be contacted at my email on the contact page, or through my github or linkedIn, which are linked in the bottom left corner of the screen.</p>
        </>
      }
    />
  );
};

export default About;