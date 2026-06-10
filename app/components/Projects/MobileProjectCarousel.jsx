"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

const MobileProjectCarousel = ({ projects, onPreview }) => {
  return (
    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-hide pb-8 md:pb-0">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="project-card-wrapper flex-shrink-0 w-[calc(100vw-3rem)] md:w-auto snap-center"
        >
          <ProjectCard project={project} onPreview={onPreview} />
        </div>
      ))}
    </div>
  );
};

export default MobileProjectCarousel;
