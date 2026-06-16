"use client";

import React from "react";
import PaperStackCard from "../PaperStackCard";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project, onPreview }) => {
  return (
    <div className="project-card h-full">
      <PaperStackCard
        className="h-full"
        innerClassName="p-8 h-full flex flex-col group/card"
      >
        <div className="flex justify-between items-start mb-8">
          <span className="font-mono text-[10px] tracking-wider text-green-600">
            PROJECT-{project.id}
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => onPreview(project)}
              aria-label={`Preview ${project.title}`}
              className="hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-4 h-4 text-olive-300 group-hover/card:text-green-900 transition-colors" />
            </button>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-olive-600 leading-tight mb-4 group-hover/card:text-yellow-700 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-olive-500 font-light leading-relaxed mb-8 grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[9px] uppercase tracking-widest text-olive-500 px-3 py-1 bg-olive-100 border border-olive-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </PaperStackCard>
    </div>
  );
};

ProjectCard.displayName = "ProjectCard";

export default React.memo(ProjectCard);
