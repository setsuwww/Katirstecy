"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Import SVG Components
import JavaScriptIcon from "./svg/JavaScriptIcon";
import TypeScriptIcon from "./svg/TypeScriptIcon";
import PHPIcon from "./svg/PHPIcon";
import PythonIcon from "./svg/PythonIcon";
import JavaIcon from "./svg/JavaIcon";
import NextjsIcon from "./svg/NextjsIcon";
import ReactIcon from "./svg/ReactIcon";
import LaravelIcon from "./svg/LaravelIcon";
import InertiajsIcon from "./svg/InertiajsIcon";
import TailwindCSSIcon from "./svg/TailwindCSSIcon";
import ExpressjsIcon from "./svg/ExpressjsIcon";
import MySQLIcon from "./svg/MySQLIcon";
import PostgreSQLIcon from "./svg/PostgreSQLIcon";
import MongoDBIcon from "./svg/MongoDBIcon";
import RedisIcon from "./svg/RedisIcon";
import GitIcon from "./svg/GitIcon";
import GitHubIcon from "./svg/GitHubIcon";
import LinuxIcon from "./svg/LinuxIcon";
import DockerIcon from "./svg/DockerIcon";
import PostmanIcon from "./svg/PostmanIcon";
import FigmaIcon from "./svg/FigmaIcon";
import VSCodeIcon from "./svg/VSCodeIcon";

const techIcons = {
  JavaScript: JavaScriptIcon, //Yellow
  TypeScript: TypeScriptIcon, //Blue
  PHP: PHPIcon, //Purple
  Python: PythonIcon, //Green
  Java: JavaIcon, //Red
  "Next.js": NextjsIcon, //Black
  React: ReactIcon, //Sky
  Laravel: LaravelIcon, //Red
  "Inertia.js": InertiajsIcon, //Violet
  TailwindCSS: TailwindCSSIcon, //Teal
  "Express.js": ExpressjsIcon, //Yellow
  MySQL: MySQLIcon, //Blue
  PostgreSQL: PostgreSQLIcon, //Teal
  MongoDB: MongoDBIcon, //Emerald
  Redis: RedisIcon, //Rose
  Git: GitIcon, //Orange
  GitHub: GitHubIcon, //Black
  Linux: LinuxIcon, //Black
  Docker: DockerIcon, //Blue
  Postman: PostmanIcon, //Orange
  Figma: FigmaIcon, //Green
  "VS Code": VSCodeIcon, //Blue
};

const techColors = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  PHP: "#777BB4",
  Python: "#3776AB",
  Java: "#ED8B00",
  "Next.js": "#000000",
  React: "#61DAFB",
  Laravel: "#FF2D20",
  "Inertia.js": "#9553E9",
  TailwindCSS: "#06B6D4",
  "Express.js": "#F5C542",
  MySQL: "#4479A1",
  PostgreSQL: "#336791",
  MongoDB: "#47A248",
  Redis: "#DC382D",
  Git: "#F05032",
  GitHub: "#181717",
  Linux: "#FCC624",
  Docker: "#2496ED",
  Postman: "#FF6C37",
  Figma: "#A259FF",
  "VS Code": "#007ACC",
};

const hexToRgba = (hex, alpha) => {
  if (!hex || hex.length < 7) return `rgba(115, 115, 115, ${alpha})`;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const SkillChip = ({ name }) => {
  const Icon = techIcons[name];
  const brandColor = techColors[name] || "#737373";

  return (
    <div
      className="flex items-center gap-4 bg-white px-7 py-3.5 rounded-md border border-neutral-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[var(--hover-shadow)] hover:border-[var(--brand-color)] hover:-translate-y-1 transition-all duration-300 mx-5 shrink-0 group cursor-default"
      style={{
        "--brand-color": brandColor,
        "--hover-shadow": `0 10px 30px ${hexToRgba(brandColor, 0.18)}`,
      }}
    >
      <div className="w-6 h-6 text-neutral-400 group-hover:text-[var(--brand-color)] group-hover:scale-125 transition-all duration-500 flex items-center justify-center">
        {Icon ? (
          <Icon className="w-full h-full" />
        ) : (
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        )}
      </div>
      <span className="text-md font-sans tracking-tight text-neutral-500 group-hover:text-neutral-900 transition-colors duration-500 font-medium">
        {name}
      </span>
    </div>
  );
};

const MarqueeRow = ({ items, direction = "left" }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const totalWidth = row.scrollWidth / 2;

    const animation = gsap.to(row, {
      x: direction === "left" ? -totalWidth : 0,
      duration: 30 + Math.random() * 10,
      ease: "none",
      repeat: -1,
      paused: false,
    });

    if (direction === "right") {
      gsap.set(row, { x: -totalWidth });
      gsap.to(row, {
        x: 0,
        duration: 30 + Math.random() * 10,
        ease: "none",
        repeat: -1,
      });
    }

    return () => animation.kill();
  }, [direction]);

  // Duplicate items for seamless loop
  const displayItems = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden py-3">
      <div ref={rowRef} className="flex whitespace-nowrap">
        {displayItems.map((item, idx) => (
          <SkillChip key={idx} name={item} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  const categories = [
    {
      items: ["JavaScript", "TypeScript", "PHP", "Python", "Java"],
      direction: "right",
    },
    {
      items: [
        "Next.js",
        "React",
        "Laravel",
        "Inertia.js",
        "TailwindCSS",
        "Express.js",
      ],
      direction: "left",
    },
    {
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      direction: "right",
    },
    {
      items: [
        "Git",
        "GitHub",
        "Linux",
        "Docker",
        "Postman",
        "Figma",
        "VS Code",
      ],
      direction: "left",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F2F2EB] py-24 lg:py-32 overflow-hidden border-t border-neutral-200/50"
    >
      {/* Decorative Elements matching About section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute inset-0 bg-paper-grain opacity-[0.02] mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="text-center mb-20 space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-semibold block">
              TECHNOLOGIES
            </span>
            <h2 className="font-serif text-6xl md:text-7xl text-neutral-900 font-light italic tracking-tight">
              Skills
            </h2>
          </div>

          <div className="w-12 h-[1px] bg-neutral-300 mx-auto" />

          <p className="text-sm md:text-md text-neutral-500 font-light leading-relaxed max-w-[280px] md:max-w-md mx-auto text-balance">
            Technologies, frameworks and tools I use to build modern digital
            products.
          </p>
        </header>

        <div className="space-y-0 md:space-y-2">
          {categories.map((cat, idx) => (
            <MarqueeRow key={idx} items={cat.items} direction={cat.direction} />
          ))}
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F2F2EB] to-transparent pointer-events-none" />
    </section>
  );
};

export default Skills;
