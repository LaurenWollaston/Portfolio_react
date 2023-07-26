import React from 'react';
import '../layouts/pseudocard.css'

const ProjectCard = (props) => {
  return (
    <div className="pseudoCard" style={{ marginTop:"40px", backgroundImage:`url(${props.imageref})`}}>
      <div className="pseudoCard container" style={{ marginTop: "3vh" }}>
        <a style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'100%',height:'100%',alignContent:'start',marginTop:'-2.5%'}} href={props.gitRef}>
            <img style={{backgroundColor:'white',width:'4vw', height:'4vw', borderRadius:'100%'}} src="./github-mark.svg" />
        </a>
        <div className="pseudoCardHeader">
          <h2 style={{textAlign:"left"}}>{props.header}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;