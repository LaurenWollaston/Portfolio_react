import React, { useEffect } from 'react';
import '../../layouts/card.css';
import Card from '../Card';

const About = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#075c3b';

    return () => {
      document.body.style.backgroundColor = '';
    };},[]);

  return (
    <Card
      header="About Me"
      imageref={`${process.env.PUBLIC_URL}/mscimages/abtme.webp`}
      cardBody={
        <>
          <p style={{ textAlign: 'center', fontWeight: 'bold',fontSize:"30px",marginBottom:"5px" }}>Lauren Wollaston</p><p style={{ textAlign: 'center' }}> Full stack web development.</p>
          <p>Most of my demo projects display basic proficiency in javascript, familiarity with using apis and dealing with data storage. I am familiar with both SQL and object oriented databases but do not have any of those in my demos because they cost money to host.</p>
          <p>Crypts and Creatures was coded with AI assistance and is an exercise with what that can do. MY goal with is it to have a simple game with deeper mechanics than you would normally use with a mobile game, a dungeon crawler with a simple objective that can be open and closed very quickly.</p>
          <p>Please feel free to contact me at Choccococooa@gmail.com, through my github, or through Laurenwollaston@outlook.com. I am currently available for employment.</p>
        </>
      }
    />
  );
};

export default About;