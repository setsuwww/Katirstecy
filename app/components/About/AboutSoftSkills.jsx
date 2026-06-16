"use client";

import React, { useState, useMemo, useCallback } from "react";
import skills from "../../constants/skills.json";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import PaperStackCard from "../PaperStackCard";
import EditorialHeader from "../ui/EditorialHeader";

const AboutSoftSkills = () => {
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
    <div className="lg:col-span-4 space-y-10 lg:space-y-16 p-2 lg:p-0">
      <EditorialHeader
        label={skills.softSkillsSection.label}
        title={skills.softSkillsSection.title}
        gradientTo="sky"
      />

      <div
        className="group relative flex items-center justify-center p-2 lg:p-0"
        onWheel={handleWheel}
      >
        <PaperStackCard
          className="w-full"
          innerClassName="p-6 lg:p-12 flex flex-col justify-between items-start text-left border-l-4 border-blue-200"
        >
          <div className="w-full relative z-10">
            <Quote
              className="w-10 h-10 lg:w-12 lg:h-12 text-blue-300 mb-8"
              strokeWidth={1}
            />
            <div className="space-y-8">
              <h3 className="font-serif text-2xl lg:text-3xl text-olive-700 tracking-tighter leading-[0.9] text-balance">
                {currentSkill?.name} .
              </h3>
              <div className="w-8 h-px bg-olive-200" />
              <p className="text-md lg:text-lg text-olive-500 font-light leading-relaxed max-w-70">
                {currentSkill?.description}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-between items-center pt-8 relative z-10">
            <div className="text-[10px] font-mono tracking-[0.3em] text-olive-500 uppercase">
              SOFTSKILL {(currentPage + 1).toString().padStart(2, "0")}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => flipPage("prev")}
                aria-label="Previous soft skill"
                className="group/btn p-3 bg-olive-200/50 hover:bg-olive-200 transition-all rounded-full border border-olive-100"
              >
                <ChevronLeft className="w-3 h-3 text-olive-400 group-hover/btn:text-olive-700 transition-colors" />
              </button>
              <button
                onClick={() => flipPage("next")}
                aria-label="Next soft skill"
                className="group/btn p-3 bg-olive-200/50 hover:bg-olive-200 transition-all rounded-full border border-olive-100"
              >
                <ChevronRight className="w-3 h-3 text-olive-400 group-hover/btn:text-olive-700 transition-colors" />
              </button>
            </div>
          </div>
        </PaperStackCard>
      </div>
    </div>
  );
};

export default AboutSoftSkills;
