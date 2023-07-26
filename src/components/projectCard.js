import React from 'react';
import '../layouts/pseudocard.css';

const ProjectCard = (props) => {
  return (
    <a href={props.projectRef} target="_blank">
      <div className="pseudoCard" style={{ marginTop: "40px", backgroundImage: `url(${process.env.PUBLIC_URL}/${props.imageref})`,backgroundSize: '100% auto' }}>
        <div className="pseudoCard container" style={{ marginTop: "3vh" }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', height: '100%', alignContent: 'start', marginTop: '-2.5%' }}>
            <a href={props.gitRef} target="_blank">
              <img style={{ backgroundColor: 'white', width: '4vw', height: '4vw', borderRadius: '100%' }} src="./github-mark.svg" />
            </a>
          </div>
          <div className="pseudoCardHeader">
            <h2 style={{ textAlign: "left" }}>{props.header}</h2>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
