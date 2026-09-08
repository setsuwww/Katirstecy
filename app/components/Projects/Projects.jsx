"use client";

import React, { useState, useCallback } from "react";
import SectionHeader from "../ui/SectionHeader";
import Modal from "../ui/Modal";
import projectsData from "../../constants/projects.json";
import MobileProjectCarousel from "./MobileProjectCarousel";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const projects = projectsData.items;

  const selectedProject =
    selectedProjectIndex !== null
      ? projects[selectedProjectIndex]
      : null;

  const handlePreview = useCallback(
    (project) => {
      const index = projects.findIndex((item) => item.id === project.id);

      if (index !== -1) {
        setSelectedProjectIndex(index);
      }
    },
    [projects]
  );

  const handleCloseModal = useCallback(() => {
    setSelectedProjectIndex(null);
  }, []);

  const handlePreviousProject = useCallback(() => {
    setSelectedProjectIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;

      return currentIndex === 0
        ? projects.length - 1
        : currentIndex - 1;
    });
  }, [projects.length]);

  const handleNextProject = useCallback(() => {
    setSelectedProjectIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;

      return currentIndex === projects.length - 1
        ? 0
        : currentIndex + 1;
    });
  }, [projects.length]);

  return (
    <section
      id="projects"
      className="relative bg-[#F2F2EB] py-24 lg:py-48 overflow-hidden border-t border-olive-200/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-125 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />

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
          <div className="relative flex flex-col lg:flex-row">
            {/* Project Image */}
            <div className="lg:w-1/2 min-h-87.5 lg:h-auto bg-olive-200/10 relative group flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full p-6 lg:p-12 flex items-center justify-center z-10">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={1000}
                    height={1000}
                    className="w-full h-auto max-h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-lg transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-paper-grain opacity-[0.05] mix-blend-multiply pointer-events-none" />

              <div className="absolute inset-0 bg-linear-to-tr from-olive-200/20 to-transparent pointer-events-none" />
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col gap-8">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-olive-400 uppercase mb-4 block">
                  {projectsData.modal.detailsLabel}
                </span>

                <h3 className="font-serif text-3xl md:text-4xl text-olive-600 leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-olive-400 block mb-4">
                  {projectsData.modal.techStackLabel}
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-olive-300 rounded-sm text-[10px] text-olive-500 uppercase tracking-widest shadow-xs hover:shadow-none cursor-pointer transition-shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-olive-600 leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                <p className="text-olive-500 text-sm font-light">
                  {projectsData.modal.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit group flex items-center gap-2 text-sm text-olive-600 hover:text-green-600 transition-colors"
                >
                  <FaGithub />
                  View Project
                </a>
                {/* Project Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePreviousProject}
                    aria-label="Previous project"
                    className="w-6 h-6 flex items-center justify-center border border-olive-300 bg-white/80 text-olive-500 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-olive-600 hover:text-white hover:border-olive-600 hover:-translate-x-0.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="font-mono text-[9px] tracking-widest text-olive-400 px-1">
                    {String(selectedProjectIndex + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={handleNextProject}
                    aria-label="Next project"
                    className="w-6 h-6 flex items-center justify-center border border-olive-300 bg-white/80 text-olive-500 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-olive-600 hover:text-white hover:border-olive-600 hover:translate-x-0.5"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
