import React from 'react';
import '../layouts/pseudocard.css';

const ProjectCard = ({ header, imageref, projectRef, featured = false, preview = false, showcase = false, slideNumber, slideCount }) => {
  const className = `projectCard${featured ? ' projectCardFeatured' : ''}${preview ? ' projectCardPreview' : ''}`;
  const cryptsAssets = [
    'SC3.png',
    'SC4.png',
    'SC5.png',
  ];
  const cardContent = (
    <>
      <img
        className="projectCardImage"
        src={`${process.env.PUBLIC_URL}/${imageref.replace(/^\.\//, '')}`}
        alt=""
      />
      <span className="projectCardContent">
        <span className="projectCardTitle">{header}</span>
      </span>
    </>
  );

  return (
    <article
      className={className}
      role={featured ? 'group' : undefined}
      aria-roledescription={featured ? 'slide' : undefined}
      aria-label={featured ? `${slideNumber} of ${slideCount}: ${header}` : undefined}
      aria-hidden={preview ? 'true' : undefined}
    >
      {preview ? (
        <div className="projectCardLink">{cardContent}</div>
      ) : (
        <a className="projectCardLink" href={projectRef} target="_blank" rel="noreferrer noopener">
          {cardContent}
        </a>
      )}
      {showcase && !preview && (
        <div className="cryptsShowcase" aria-hidden="true">
          {cryptsAssets.map((asset, index) => (
            <img
              key={asset}
              className={`cryptsShowcaseImage cryptsShowcaseImage${index + 1}`}
              src={`${process.env.PUBLIC_URL}/projectImages/CryptsDemo/${asset}`}
              alt=""
            />
          ))}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
