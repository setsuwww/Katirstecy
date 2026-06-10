"use client";

import React, { useState, useMemo, useCallback } from "react";
import education from "../../constants/education.json";
import experience from "../../constants/experience.json";
import skills from "../../constants/skills.json";
import { ChevronLeft, ChevronRight, FolderClosed, Quote } from "lucide-react";
import PaperStackCard from "../PaperStackCard";

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const softSkills = useMemo(() => skills?.softSkills || [], []);
  const currentSkill = softSkills[currentPage];

  const flipPage = useCallback(
    (direction) => {
      const isNext = direction === "next";
      const nextIdx = isNext
        ? (currentPage + 1) % softSkills.length
        : (currentPage - 1 + softSkills.length) % softSkills.length;
      setCurrentPage(nextIdx);
    },
    [currentPage, softSkills.length],
  );

  const handleWheel = useCallback(
    (e) => {
      if (Math.abs(e.deltaY) < 30) return;
      if (e.deltaY > 0) flipPage("next");
      else flipPage("prev");
    },
    [flipPage],
  );

  return (
    <section
      id="about"
      className="relative bg-[#F2F2EB] py-16 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.015)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.02] bg-grid-overlay pointer-events-none" />

      <div className="relative max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-3 space-y-10 lg:space-y-16">
            <header className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
                {education.section.label}
              </span>
              <h2 className="font-serif text-3xl lg:text-5xl text-neutral-900 font-light italic">
                {education.section.title}
              </h2>
            </header>

            <div className="relative space-y-10 lg:space-y-12 pl-4 pr-4">
              <div className="absolute left-[10px] lg:left-[12px] top-0 h-[32rem] lg:h-[38rem] w-[2px] bg-neutral-300" />

              {education.items.map((item, idx) => (
                <div key={idx} className="relative group pl-4">
                  <div className="absolute left-[-12px] lg:left-[-10px] top-[22px] lg:top-[24px] w-[14px] h-[14px] rounded-full bg-white border border-neutral-400 shadow-sm z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-neutral-900 group-hover:border-neutral-900" />

                  <PaperStackCard>
                    <div className="space-y-4 p-6 lg:p-4">
                      <span className="text-[10px] font-sans tracking-widest text-neutral-400 font-semibold">
                        {item.period}
                      </span>
                      <h3 className="font-serif text-lg lg:text-xl text-neutral-800 group-hover:text-yellow-800 leading-tight tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                        {item.institution}
                      </h3>
                      <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-[400px]">
                        {item.description}
                      </p>
                    </div>
                  </PaperStackCard>
                </div>
              ))}
            </div>
          </div>

          {/* 2. EXPERIENCE (Column 4-8) */}
          <div className="lg:col-span-5 lg:px-12 space-y-10 lg:space-y-16">
            <header className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
                {experience.section.label}
              </span>
              <h2 className="font-serif text-3xl lg:text-5xl text-neutral-900 font-light italic">
                {experience.section.title}
              </h2>
            </header>

            <div className="space-y-12 lg:space-y-10 ml-4 mr-4 lg:ml-0 lg:mr-0">
              {experience.items.map((item, idx) => (
                <PaperStackCard key={idx}>
                  <div className="group space-y-6 p-5 rounded-sm">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-yellow-50 rounded-xl border border-yellow-100 shrink-0">
                        <FolderClosed className="w-5 h-5 text-yellow-700" />
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-serif text-lg lg:text-2xl text-neutral-800 tracking-tight transition-all duration-300 group-hover:text-yellow-800">
                          {item.company}
                        </h3>

                        <p className="text-[8px] lg:text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mt-1">
                          {item.title}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm lg:text-md text-neutral-500 font-light leading-relaxed text-balance max-w-[300px] lg:max-w-[400px]">
                      {item.description}
                    </p>
                  </div>
                </PaperStackCard>
              ))}
            </div>
          </div>

          {/* 3. SOFT SKILLS (Column 9-12) */}
          <div className="lg:col-span-4 space-y-10 lg:space-y-16 p-4 lg:p-0">
            <header className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
                {skills.softSkillsSection.label}
              </span>
              <h2 className="font-serif text-3xl lg:text-5xl text-neutral-900 font-light italic">
                {skills.softSkillsSection.title}
              </h2>
            </header>

            <div
              className="group relative h-[440px] lg:h-[480px] flex items-center justify-center p-2 lg:p-0"
              onWheel={handleWheel}
            >
              <PaperStackCard
                className="h-[480px]"
                innerClassName="h-full p-8 lg:p-16 flex flex-col justify-between items-start text-left"
              >
                <div className="w-full relative z-10">
                  <Quote
                    className="w-12 h-12 text-neutral-400 mb-8"
                    strokeWidth={0.5}
                  />
                  <div className="space-y-8">
                    <h3 className="font-serif text-2xl lg:text-4xl text-neutral-900 tracking-tighter leading-[0.9] text-balance">
                      {currentSkill?.name} .
                    </h3>
                    <div className="w-8 h-[1px] bg-neutral-200" />
                    <p className="text-md lg:text-lg text-neutral-500 font-light leading-relaxed max-w-[280px]">
                      {currentSkill?.description}
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-between items-center pt-8 relative z-10">
                  <div className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase">
                    Folio {(currentPage + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => flipPage("prev")}
                      className="group/btn p-3 bg-neutral-200/50 hover:bg-neutral-200 transition-all rounded-full border border-neutral-100"
                    >
                      <ChevronLeft className="w-3 h-3 text-neutral-400 group-hover/btn:text-neutral-900 transition-colors" />
                    </button>
                    <button
                      onClick={() => flipPage("next")}
                      className="group/btn p-3 bg-neutral-200/50 hover:bg-neutral-200 transition-all rounded-full border border-neutral-100"
                    >
                      <ChevronRight className="w-3 h-3 text-neutral-400 group-hover/btn:text-neutral-900 transition-colors" />
                    </button>
                  </div>
                </div>
              </PaperStackCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
