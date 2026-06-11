"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import skillsData from "../../constants/skills.json";
import MarqueeRow from "./MarqueeRow";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#F2F2EB] py-24 lg:py-48 overflow-hidden border-t border-olive-200/50"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/pgt.avif"
          alt="Paper Texture"
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-multiply"
          priority
        />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute inset-0 bg-paper-grain opacity-[0.02] mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label={skillsData.section.label}
          title={skillsData.section.title}
          subtitle={skillsData.section.subtitle}
        />

        <div className="relative space-y-0 md:space-y-6">
          {/* Edge Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 h-100 w-24 md:w-40 bg-gradient-to-r from-[#EBE9E0] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 h-100 w-24 md:w-40 bg-gradient-to-l from-[#EBE9E0] to-transparent z-20 pointer-events-none" />

          {skillsData.categories.map((cat, idx) => (
            <MarqueeRow key={idx} items={cat.items} direction={cat.direction} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F2F2EB] to-transparent pointer-events-none" />
    </section>
  );
};

export default React.memo(Skills);
