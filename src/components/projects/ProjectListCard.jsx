import React from "react";

const ProjectListCard = ({ url, imgSrc, altText }) => {
  return (
    <div className="projects-container-child">
      <a target={"_blank"} rel="noreferrer" href={url}>
        <img src={imgSrc} alt={altText} className="projectImg" />
      </a>
    </div>
  );
};

export default ProjectListCard;
