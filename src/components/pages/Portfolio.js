import React, { useEffect, useState } from 'react';
import ProjectCard from '../projectCard';
import Projects from '../../projects.json';

const Portfolio = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = Projects[activeProjectIndex];
  const nextProject = Projects[(activeProjectIndex + 1) % Projects.length];

  useEffect(() => {
    document.body.style.backgroundColor = '#092f35';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const showNextProject = () => {
    setActiveProjectIndex((index) => (index + 1) % Projects.length);
  };

  return (
    <main className="portfolioPage">
      <section className="portfolioCarousel" aria-label="Project portfolio">
        <div className="carouselStage" aria-roledescription="carousel">
          {nextProject && (
            <ProjectCard
              key={`peek-${nextProject.header}`}
              {...nextProject}
              preview
            />
          )}
          {activeProject && (
            <ProjectCard
              key={activeProject.header}
              {...activeProject}
              featured
              showcase={activeProject.header === 'Crypts and Creatures'}
              slideNumber={activeProjectIndex + 1}
              slideCount={Projects.length}
            />
          )}
          {Projects.length > 1 && (
            <button
              className="carouselArrow carouselArrowNext"
              type="button"
              onClick={showNextProject}
              aria-label={`Show next project: ${nextProject.header}`}
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;