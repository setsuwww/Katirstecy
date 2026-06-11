"use client";

import React, { useState, useCallback } from "react";
import SectionHeader from "../ui/SectionHeader";
import Modal from "../ui/Modal";
import projectsData from "../../constants/projects.json";
import MobileProjectCarousel from "./MobileProjectCarousel";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = projectsData.items;

  const handlePreview = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-[#F2F2EB] py-24 lg:py-48 overflow-hidden border-t border-neutral-200/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-paper-grain opacity-[0.02] mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          label={projectsData.section.label}
          title={projectsData.section.title}
          subtitle={projectsData.section.subtitle}
        />
        {/* Projects Grid / Carousel */}
        <div className="projects-grid mb-10">
          <MobileProjectCarousel
            projects={projects}
            onPreview={handlePreview}
          />
        </div>
      </div>

      <div className="flex justify-center lg:hidden">
        <div className="flex items-center gap-3 text-olive-400">
          <div className="w-8 h-px bg-olive-300" />
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Slide Gallery
          </span>
          <div className="w-8 h-px bg-olive-300" />
        </div>
      </div>

      {/* Project Preview Modal */}
      <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
        {selectedProject && (
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-[300px] lg:h-auto bg-neutral-200 relative group">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-serif italic text-2xl">
                {selectedProject.title} Preview
              </div>
              <div className="absolute inset-0 bg-paper-grain opacity-[0.05] mix-blend-multiply" />
            </div>

            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col gap-8">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-4 block">
                  {projectsData.modal.detailsLabel}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-neutral-600 leading-relaxed font-light">
                  {selectedProject.description}
                </p>
                <p className="text-neutral-500 text-sm font-light">
                  {projectsData.modal.description}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 block mb-4">
                  {projectsData.modal.techStackLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-[10px] text-neutral-500 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-auto border-t border-neutral-100 flex gap-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-neutral-800 hover:text-yellow-800 transition-colors flex items-center gap-2"
                >
                  {projectsData.modal.sourceCodeLabel}
                </a>
                <button className="text-xs uppercase tracking-widest text-neutral-400 cursor-not-allowed">
                  {projectsData.modal.liveDemoLabel}
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
