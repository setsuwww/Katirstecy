"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

// Import SVG Components
import JavaScriptIcon from "../svg/JavaScriptIcon";
import TypeScriptIcon from "../svg/TypeScriptIcon";
import PHPIcon from "../svg/PHPIcon";
import PythonIcon from "../svg/PythonIcon";
import JavaIcon from "../svg/JavaIcon";
import NextjsIcon from "../svg/NextjsIcon";
import ReactIcon from "../svg/ReactIcon";
import LaravelIcon from "../svg/LaravelIcon";
import InertiajsIcon from "../svg/InertiajsIcon";
import TailwindCSSIcon from "../svg/TailwindCSSIcon";
import ExpressjsIcon from "../svg/ExpressjsIcon";
import MySQLIcon from "../svg/MySQLIcon";
import PostgreSQLIcon from "../svg/PostgreSQLIcon";
import MongoDBIcon from "../svg/MongoDBIcon";
import RedisIcon from "../svg/RedisIcon";
import GitIcon from "../svg/GitIcon";
import GitHubIcon from "../svg/GitHubIcon";
import LinuxIcon from "../svg/LinuxIcon";
import DockerIcon from "../svg/DockerIcon";
import PostmanIcon from "../svg/PostmanIcon";
import FigmaIcon from "../svg/FigmaIcon";
import VSCodeIcon from "../svg/VSCodeIcon";
import SectionHeader from "../ui/SectionHeader";
import skillsData from "../../constants/skills.json";

const techIcons = {
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  PHP: PHPIcon,
  Python: PythonIcon,
  Java: JavaIcon,
  "Next.js": NextjsIcon,
  React: ReactIcon,
  Laravel: LaravelIcon,
  "Inertia.js": InertiajsIcon,
  TailwindCSS: TailwindCSSIcon,
  "Express.js": ExpressjsIcon,
  MySQL: MySQLIcon,
  PostgreSQL: PostgreSQLIcon,
  MongoDB: MongoDBIcon,
  Redis: RedisIcon,
  Git: GitIcon,
  GitHub: GitHubIcon,
  Linux: LinuxIcon,
  Docker: DockerIcon,
  Postman: PostmanIcon,
  Figma: FigmaIcon,
  "VS Code": VSCodeIcon,
};

const techStyles = {
  JavaScript: {
    icon: "group-hover:text-yellow-400",
  },
  TypeScript: {
    icon: "group-hover:text-blue-600",
  },
  PHP: {
    icon: "group-hover:text-indigo-400",
  },
  Python: {
    icon: "group-hover:text-blue-500",
  },
  Java: {
    icon: "group-hover:text-orange-600",
  },
  "Next.js": {
    icon: "group-hover:text-black",
  },
  React: {
    icon: "group-hover:text-sky-400",
  },
  Laravel: {
    icon: "group-hover:text-red-500",
  },
  "Inertia.js": {
    icon: "group-hover:text-violet-500",
  },
  TailwindCSS: {
    icon: "group-hover:text-cyan-400",
  },
  "Express.js": {
    icon: "group-hover:text-yellow-500",
  },
  MySQL: {
    icon: "group-hover:text-blue-500",
  },
  PostgreSQL: {
    icon: "group-hover:text-blue-400",
  },
  MongoDB: {
    icon: "group-hover:text-emerald-500",
  },
  Redis: {
    icon: "group-hover:text-red-600",
  },
  Git: {
    icon: "group-hover:text-orange-600",
  },
  GitHub: {
    icon: "group-hover:text-black",
  },
  Linux: {
    icon: "group-hover:text-yellow-500",
  },
  Docker: {
    icon: "group-hover:text-blue-400",
  },
  Postman: {
    icon: "group-hover:text-orange-500",
  },
  Figma: {
    icon: "group-hover:text-purple-500",
  },
  "VS Code": {
    icon: "group-hover:text-blue-500",
  },
};

const SkillChip = React.memo(({ name }) => {
  const Icon = techIcons[name];
  const styles = techStyles[name] || {
    icon: "group-hover:text-neutral-600",
  };

  return (
    <div
      className={`flex items-center gap-2 lg:gap-4 bg-white p-2 lg:px-4 lg:py-3.5 rounded-md border border-neutral-200 hover:border-neutral-500 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500 mx-5 shrink-0 group cursor-default`}
    >
      <div
        className={`w-6 h-6 text-neutral-400 group-hover:scale-125 transition-all duration-500 flex items-center justify-center ${styles.icon}`}
      >
        {Icon ? (
          <Icon className="w-full h-full" />
        ) : (
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        )}
      </div>
      <span className="text-sm lg:text-md font-sans tracking-tight text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500 font-medium">
        {name}
      </span>
    </div>
  );
});
SkillChip.displayName = "SkillChip";

const MarqueeRow = React.memo(({ items, direction = "left" }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const totalWidth = row.scrollWidth / 2;
    const baseSpeed = 30 + Math.random() * 10;

    const animation = gsap.fromTo(
      row,
      { x: direction === "left" ? 0 : -totalWidth },
      {
        x: direction === "left" ? -totalWidth : 0,
        duration: baseSpeed,
        ease: "none",
        repeat: -1,
      },
    );

    return () => {
      animation.kill();
    };
  }, [direction]);

  const displayItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative flex overflow-hidden py-3">
      <div ref={rowRef} className="flex whitespace-nowrap">
        {displayItems.map((item, idx) => (
          <SkillChip key={idx} name={item} />
        ))}
      </div>
    </div>
  );
});
MarqueeRow.displayName = "MarqueeRow";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#F2F2EB] py-24 lg:py-48 overflow-hidden border-t border-neutral-200/50"
    >
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
          <div className="absolute left-0 top-0 bottom-0 h-100 w-24 md:w-40 bg-gradient-to-r from-[#F2F2EB] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 h-100 w-24 md:w-40 bg-gradient-to-l from-[#F2F2EB] to-transparent z-20 pointer-events-none" />

          {skillsData.categories.map((cat, idx) => (
            <MarqueeRow key={idx} items={cat.items} direction={cat.direction} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F2F2EB] to-transparent pointer-events-none" />
    </section>
  );
};

Skills.displayName = "Skills";

export default React.memo(Skills);
