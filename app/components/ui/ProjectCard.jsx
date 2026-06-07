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
          <span className="font-mono text-[10px] tracking-widest text-neutral-300">
            PRJ-{project.id}
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => onPreview(project)}
              className="hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-4 h-4 text-neutral-300 group-hover/card:text-neutral-900 transition-colors" />
            </button>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-neutral-800 leading-tight mb-4 group-hover/card:text-yellow-800 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-500 font-light leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[9px] uppercase tracking-widest text-neutral-400 px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full"
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
