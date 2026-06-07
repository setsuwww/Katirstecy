"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import CertificationCard from "../ui/CertificationCard";
import Modal from "../ui/Modal";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(
    () => [
      {
        id: "01",
        title: "Virspeed",
        description:
          "Information System Management Shift webbase using Nextjs javascript as Frontend & Laravel as Backend, Shadcn Tailwindcss, Zustand, Prisma and Postgresql as Database",
        tags: ["Next.js", "Tailwindcss", "Postgresql", "Neon"],
        github: "https://github.com",
      },
      {
        id: "02",
        title: "Nexttask",
        description:
          "Multi-Todolist App use Nextjs typescript, Shadcn Tailwindcss, Zustand, Prisma and MySQL as Database",
        tags: ["Next.js", "Tailwindcss", "MySQL"],
        github: "https://github.com",
      },
      {
        id: "03",
        title: "MR:Space2",
        description:
          "Laravel Inertia React SaaS Multisector inventory management use MySQL",
        tags: ["PHP", "Laravel", "Inertia", "React", "Tailwindcss", "MySQL"],
        github: "https://github.com",
      },
      {
        id: "04",
        title: "Areact",
        description:
          "Folder & File management using Vite React for Frontend, + ASP.NET Microsoft with CSharp(C#/CS) as MVC Backend",
        tags: ["React", "Vite", "ASP.NET", "Tailwindcss", "C#"],
        github: "https://github.com",
      },
      {
        id: "05",
        title: "Sevior",
        description:
          "Multi-Tenant Project Management SaaS Web-based use Next.js, Golang, dan PostgreSQL Cloud (Neon)",
        tags: ["Next.js", "Tailwindcss", "Golang", "PostgreSQL", "Neon"],
        github: "https://github.com",
      },
      {
        id: "06",
        title: "Veutyfull",
        description:
          "Destination article management app using MEVN Stack, (Mysql, Express, Vue + Vite + Tailwindcss, Nodejs) with elegance natural ui",
        tags: ["Vue.js", "Vite", "Tailwindcss", "Node.js", "Mysql", "Express"],
        github: "https://github.com",
      },
    ],
    [],
  );

  const certifications = useMemo(
    () => [
      {
        title: "Full Stack Web Development",
        issuer: "University of Technology",
        year: "2023",
      },
      {
        title: "Backend Engineering",
        issuer: "Advanced Tech Institute",
        year: "2022",
      },
      {
        title: "Cloud Fundamentals",
        issuer: "Cloud Academy",
        year: "2023",
      },
    ],
    [],
  );

  const handlePreview = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-wrapper",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".cert-card-wrapper",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".certifications-section",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F2F2EB] py-24 lg:py-48 overflow-hidden border-t border-neutral-200/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute inset-0 bg-paper-grain opacity-[0.02] mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label="PROJECTS"
          title="Selected Work"
          subtitle="A collection of projects, experiments and achievements."
        />

        {/* Projects Grid / Carousel */}
        <div className="projects-grid mb-32">
          {/* Desktop/Tablet Grid & Mobile Carousel Wrapper */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-hide pb-8 md:pb-0">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card-wrapper flex-shrink-0 w-[calc(100vw-3rem)] md:w-auto snap-center"
              >
                <ProjectCard project={project} onPreview={handlePreview} />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="font-serif text-3xl md:text-4xl text-neutral-900 font-light italic shrink-0">
              Certifications
            </h3>
            <div className="h-[1px] flex-grow bg-neutral-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card-wrapper h-full">
                <CertificationCard cert={cert} index={idx + 1} />
              </div>
            ))}
          </div>
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
                  Project Details
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
                  This project demonstrates a commitment to clean architecture
                  and user-centric design, utilizing modern web standards to
                  deliver a seamless experience.
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 block mb-4">
                  Tech Stack
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
                  Source Code
                </a>
                <button className="text-xs uppercase tracking-widest text-neutral-400 cursor-not-allowed">
                  Live Demo (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Global CSS for scrollbar hiding */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
