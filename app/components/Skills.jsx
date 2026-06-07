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

const techStyles = {
  JavaScript: {
    icon: "group-hover:text-yellow-600",
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

const SkillChip = ({ name }) => {
  const Icon = techIcons[name];
  const styles = techStyles[name] || {
    icon: "group-hover:text-neutral-600",
    border: "group-hover:border-neutral-400",
    glow: "group-hover:shadow-neutral-400/10",
  };

  return (
    <div
      className={`flex items-center gap-4 bg-white px-4.5 py-3.5 rounded-md border border-neutral-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500 mx-5 shrink-0 group cursor-default ${styles.border} ${styles.glow}`}
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
    const baseSpeed = 30 + Math.random() * 10;

    // Create a single infinite animation for both directions
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

    // Scroll Reactive Logic
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const updateVelocity = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Calculate target timeScale based on velocity
      // Downward scroll (velocity > 0): speed increases
      // Upward scroll (velocity < 0): speed reverses
      let targetTimeScale = 1;

      if (Math.abs(scrollVelocity) > 0.5) {
        // Multiplier for noticeable acceleration (0.15)
        targetTimeScale = 1 + scrollVelocity * 0.15;
      }

      // Smoothly interpolate timeScale for that "premium" feel
      gsap.to(animation, {
        timeScale: targetTimeScale,
        duration: 0.8,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const tickerListener = () => {
      updateVelocity();
    };

    gsap.ticker.add(tickerListener);

    return () => {
      animation.kill();
      gsap.ticker.remove(tickerListener);
    };
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

        <div className="relative space-y-4 md:space-y-6">
          {/* Left Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#F2F2EB] to-transparent z-20 pointer-events-none" />
          {/* Right Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#F2F2EB] to-transparent z-20 pointer-events-none" />

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
