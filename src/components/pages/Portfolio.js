import React from 'react';
import ProjectCard from '../projectCard';
import Projects from "../../projects.json"

const Portfolio = () => {
    return (
      <div className="Portfolio">
      {Projects.map((project, index) => (
        <ProjectCard
          key={index} // Add a unique key for each ProjectCard
          header={project.header}
          imageref={project.imageref}
          gitRef={project.gitRef}
        />
      ))}
    </div>
    );
  }

  export default Portfolio;