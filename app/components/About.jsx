"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutData from "../constants/About.json";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const softSkills = aboutData?.softSkills || [];
  const currentSkill = softSkills[currentPage];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow, confident scroll reveals
      const columns = [
        educationRef.current,
        experienceRef.current,
        skillsRef.current,
      ];

      columns.forEach((col, i) => {
        gsap.fromTo(
          col,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: col,
              start: "top 85%",
            },
          },
        );
      });

      // Subtle parallax for the background grid
      gsap.to(".bg-grid-overlay", {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const flipPage = (direction) => {
    const isNext = direction === "next";
    const nextIdx = isNext
      ? (currentPage + 1) % softSkills.length
      : (currentPage - 1 + softSkills.length) % softSkills.length;

    const tl = gsap.timeline();

    // Physics-based weighted flip
    tl.to(bookRef.current, {
      rotateY: isNext ? -110 : 110,
      x: isNext ? -20 : 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentPage(nextIdx);
        gsap.fromTo(
          bookRef.current,
          { rotateY: isNext ? 110 : -110, x: isNext ? 20 : -20, opacity: 0 },
          {
            rotateY: 0,
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
          },
        );
      },
    });
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) < 30) return;
    if (e.deltaY > 0) flipPage("next");
    else flipPage("prev");
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F8F8F6] py-32 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Decorative Grid and Lighting */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] bg-grid-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_center,rgba(212,204,194,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8">
          {/* 1. EDUCATION (Column 1-3) */}
          <div ref={educationRef} className="lg:col-span-3 space-y-16">
            <header className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
                Chronicle
              </span>
              <h2 className="font-serif text-5xl text-neutral-900 font-light italic">
                Education
              </h2>
            </header>

            <div className="relative space-y-20 pl-4">
              <div className="absolute left-[18px] top-4 bottom-4 w-[0.5px] bg-neutral-200" />

              {aboutData.education.map((item, idx) => (
                <div key={idx} className="relative group pl-10">
                  {/* Luxury Dot */}
                  <div className="absolute left-[-2px] top-1.5 w-[10px] h-[10px] rounded-full bg-white border border-neutral-300 shadow-sm z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-neutral-900 group-hover:border-neutral-900" />

                  <div className="space-y-4">
                    <span className="text-[10px] font-sans tracking-widest text-neutral-400 font-semibold">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-2xl text-neutral-800 leading-tight tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                      {item.institution}
                    </h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-[200px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. EXPERIENCE (Column 4-8) */}
          <div
            ref={experienceRef}
            className="lg:col-span-5 lg:px-12 border-x border-neutral-200/50 space-y-16"
          >
            <header className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
                Pathways
              </span>
              <h2 className="font-serif text-5xl text-neutral-900 font-light italic">
                Experience
              </h2>
            </header>

            <div className="space-y-24">
              {aboutData.experience.map((item, idx) => (
                <div key={idx} className="group space-y-8">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-serif text-4xl text-neutral-900 tracking-tighter group-hover:opacity-70 transition-opacity">
                        {item.company}
                      </h3>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-lg text-neutral-600 font-light leading-relaxed text-balance">
                    {item.description}
                  </p>

                  {idx !== aboutData.experience.length - 1 && (
                    <div className="w-12 h-[0.5px] bg-neutral-300 group-hover:w-full transition-all duration-700" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. SOFT SKILLS (Column 9-12) */}
          <div ref={skillsRef} className="lg:col-span-4 space-y-16">
            <header className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
                Inner Mastery
              </span>
              <h2 className="font-serif text-5xl text-neutral-900 font-light italic">
                Soft Skills
              </h2>
            </header>

            <div
              className="relative h-[550px] perspective-2000 flex items-center justify-center cursor-ns-resize"
              onWheel={handleWheel}
            >
              {/* Stacked Paper Effect - More layers for depth */}
              <div className="absolute inset-0 translate-x-6 translate-y-6 bg-white hairline-border opacity-10 rounded-[2px]" />
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-white hairline-border opacity-20 rounded-[2px]" />
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white hairline-border opacity-40 rounded-[2px]" />

              <div
                ref={bookRef}
                className="relative w-full h-[480px] bg-[#FFF] hairline-border shadow-[0_30px_60px_rgba(0,0,0,0.02)] p-12 lg:p-16 flex flex-col justify-between items-start text-left overflow-hidden rounded-[2px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />

                <div className="w-full">
                  <Quote
                    className="w-12 h-12 text-neutral-100 mb-8"
                    strokeWidth={0.5}
                  />
                  <div className="space-y-8">
                    <h3 className="font-serif text-5xl text-neutral-900 tracking-tighter leading-[0.9] text-balance">
                      {currentSkill?.name}
                    </h3>
                    <div className="w-8 h-[1px] bg-neutral-200" />
                    <p className="text-lg text-neutral-500 font-light leading-relaxed max-w-[280px]">
                      {currentSkill?.description}
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-between items-end pt-8">
                  <div className="text-[9px] font-mono tracking-[0.3em] text-neutral-300 uppercase">
                    Folio № {(currentPage + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => flipPage("prev")}
                      className="group/btn p-3 hover:bg-neutral-50 transition-all rounded-full border border-neutral-100"
                    >
                      <ChevronLeft className="w-3 h-3 text-neutral-400 group-hover/btn:text-neutral-900 transition-colors" />
                    </button>
                    <button
                      onClick={() => flipPage("next")}
                      className="group/btn p-3 hover:bg-neutral-50 transition-all rounded-full border border-neutral-100"
                    >
                      <ChevronRight className="w-3 h-3 text-neutral-400 group-hover/btn:text-neutral-900 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-300 font-medium">
                Scroll to flip
              </p>
              <div className="w-[1px] h-12 bg-neutral-200 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
