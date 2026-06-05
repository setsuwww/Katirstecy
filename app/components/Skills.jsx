"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const techIcons = {
  JavaScript: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.73-.345-1.492-.522-1.492-1.134 0-.245.205-.438.546-.438.394 0 .7.148.962.51l1.567-1.007c-.455-.69-.997-1.05-1.903-1.15-.175-.018-.35-.027-.525-.027-1.383 0-2.581.805-2.581 2.292 0 1.903 1.838 2.292 3.151 2.855.918.393 1.137.683 1.137 1.155 0 .456-.402.735-.91.735-.787 0-1.216-.403-1.636-1.085l-1.601 1.024c.595 1.059 1.47 1.636 2.94 1.636 1.882 0 3.116-1.015 3.116-2.502zm-8.834-3.116H11.23v5.25c0 .945-.07 1.19-.805 1.19-.35 0-.613-.035-.91-.123l.105 1.54c.263.105.735.175 1.138.175 1.873 0 2.433-.858 2.433-2.783v-5.25z" />
    </svg>
  ),
  TypeScript: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0zm18.334 15.533c-.175-1.095-.888-2.015-3.003-2.873-.73-.345-1.492-.522-1.492-1.134 0-.245.205-.438.546-.438.394 0 .7.148.962.51l1.567-1.007c-.455-.69-.997-1.05-1.903-1.15-.175-.018-.35-.027-.525-.027-1.383 0-2.581.805-2.581 2.292 0 1.903 1.838 2.292 3.151 2.855.918.393 1.137.683 1.137 1.155 0 .456-.402.735-.91.735-.787 0-1.216-.403-1.636-1.085l-1.601 1.024c.595 1.059 1.47 1.636 2.94 1.636 1.882 0 3.116-1.015 3.116-2.502zm-9.03-3.116h-5.25V14h1.75v7.875h1.75V14h1.75v-1.583z" />
    </svg>
  ),
  PHP: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.53 15.65h-1.44l.87-3.95h1.44c1.17 0 1.8.48 1.8 1.5 0 1.68-1.23 2.45-2.67 2.45zm5.17-5.32c.32-.42.54-.93.54-1.53 0-1.23-.9-2.02-2.31-2.02H9.86l-2.02 9.17h1.44l.65-2.95h3.01c1.55 0 2.22-.64 2.22-1.9 0-.28-.03-.54-.09-.77zm-9.2 5.32h-1.44l.87-3.95H8.38c1.17 0 1.8.48 1.8 1.5 0 1.68-1.23 2.45-2.67 2.45zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  Python: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.914 2c-3.214 0-3.017 1.393-3.017 1.393l.006 1.442h3.076v.433H7.567S5 4.965 5 8.354c0 3.388 2.247 3.264 2.247 3.264h1.341v-1.892s-.03-2.28 2.23-2.28h3.298s2.17.014 2.17-2.115V3.447S16.35 2 13.086 2h-1.172zm-2.26 1.036c.382 0 .692.31.692.693 0 .382-.31.692-.693.692a.693.693 0 0 1-.692-.692c0-.383.31-.693.693-.693zM18.753 8.382h-1.341v1.892s.03 2.28-2.23 2.28h-3.298s-2.17-.014-2.17 2.115v1.881s.064 1.447 3.328 1.447h1.172c3.214 0 3.017-1.393 3.017-1.393l-.006-1.442h-3.076v-.433h4.412s2.567.303 2.567-3.086c0-3.388-2.247-3.264-2.247-3.264zm-3.407 11.545a.693.693 0 0 1 .693-.692.693.693 0 0 1 .692.692.693.693 0 0 1-.692.693.693.693 0 0 1-.693-.693z" />
    </svg>
  ),
  Java: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.3 16.5c-.3.1-.6.1-.9.1-1.3 0-2.4-.6-2.4-1.4 0-.1 0-.3.1-.4l.3-.8c.4-1.2.7-2.5.7-3.7 0-1-.2-2-.5-2.9l-.1-.4-.1-.3h1.3l.1.3c.3.9.5 1.9.5 2.9 0 1.2-.3 2.5-.7 3.7l-.3.8s-.1.2-.1.3c0 .3.4.6 1.1.6h.4l.6-.1v1.3zm2.4-1.2c-.3 0-.6-.1-.8-.1-1.2 0-2.3-.5-2.3-1.3 0-.1 0-.2.1-.3l.3-.7c.4-1.1.7-2.3.7-3.5 0-.9-.2-1.9-.5-2.8l-.1-.4-.1-.3h1.3l.1.3c.3.9.5 1.9.5 2.8 0 1.2-.3 2.4-.7 3.5l-.3.7s-.1.2-.1.3c0 .2.4.5 1.1.5h.3l.5-.1v1.3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  "Next.js": (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.21 15.222l-5.636-7.238V17H11.23V7.778h1.155l5.064 6.55V7.778h1.34v9.444h-.579z" />
    </svg>
  ),
  React: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Laravel: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
    </svg>
  ),
  "Inertia.js": (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
    </svg>
  ),
  TailwindCSS: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  "Express.js": (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zM8 9h2v2H8V9zm0 4h2v2H8v-2zm4-4h4v2h-4V9zm0 4h4v2h-4v-2z" />
    </svg>
  ),
  MySQL: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.02 2C6.49 2 2.02 6.48 2.02 12s4.47 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-10h1.5v4H8v-4zm2.5 0h1.5v4h-1.5v-4zm2.5 0H16v1.5h-2.5V14H16v1.5h-5.5v-5.5z" />
    </svg>
  ),
  PostgreSQL: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
    </svg>
  ),
  MongoDB: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.8 15.2c-.4.4-.8.6-1.3.6s-.9-.2-1.3-.6c-.4-.4-.6-.8-.6-1.3V8.1c0-.5.2-.9.6-1.3.4-.4.8-.6 1.3-.6s.9.2 1.3.6c.4.4.6.8.6 1.3v7.8c0 .5-.2.9-.6 1.3z" />
    </svg>
  ),
  Redis: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8v-2h8v2z" />
    </svg>
  ),
  Git: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.878.719-2.598 0-.534-.534-.674-1.298-.423-1.953l-2.517-2.517V14.337c.29.132.547.334.757.604.72.72.72 1.884 0 2.604-.719.719-1.878.719-2.598 0-.719-.719-.719-1.884 0-2.604.21-.21.458-.366.726-.472V10.14c-.268-.106-.517-.262-.726-.472-.51-.509-.658-1.237-.456-1.874L8.218 5.074 4.835 8.457h.001l-4.383 4.383c-.603.603-.603 1.582 0 2.187l10.48 10.48c.603.603 1.582.603 2.187 0l10.426-10.426c.603-.603.603-1.582 0-2.187z" />
    </svg>
  ),
  GitHub: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  Linux: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2c1.47 0 2.75.96 3.16 2.29.54.14 1.04.41 1.46.78.34-.33.8-.54 1.31-.54 1.07 0 1.94.87 1.94 1.94 0 .51-.21.97-.54 1.31.37.42.64.92.78 1.46C21.44 9.65 22.4 10.93 22.4 12.4s-.96 2.75-2.29 3.16c-.14.54-.41 1.04-.78 1.46.33.34.54.8.54 1.31 0 1.07-.87 1.94-1.94 1.94-.51 0-.97-.21-1.31-.54-.42.37-.92.64-1.46.78-1.33 1.33-2.61 2.29-4.16 2.29s-2.75-.96-3.16-2.29c-.54-.14-1.04-.41-1.46-.78-.34.33-.8.54-1.31.54-1.07 0-1.94-.87-1.94-1.94 0-.51.21-.97.54-1.31-.37-.42-.64-.92-.78-1.46C2.56 15.15 1.6 13.87 1.6 12.4s.96-2.75 2.29-3.16c.14-.54.41-1.04.78-1.46-.33-.34-.54-.8-.54-1.31 0-1.07.87-1.94 1.94-1.94.51 0 .97.21 1.31.54.42-.37.92-.64 1.46-.78C8.43 2.96 9.71 2 11.18 2h.82z" />
    </svg>
  ),
  Docker: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.962 8.885c0-.656.533-1.189 1.189-1.189.654 0 1.187.533 1.187 1.189 0 .654-.533 1.187-1.187 1.187-.656 0-1.189-.533-1.189-1.187zm-1.83 0c0-.656.533-1.189 1.188-1.189.655 0 1.188.533 1.188 1.189 0 .654-.533 1.187-1.188 1.187-.655 0-1.188-.533-1.188-1.187zm-1.83 0c0-.656.533-1.189 1.188-1.189.655 0 1.188.533 1.188 1.189 0 .654-.533 1.187-1.188 1.187-.655 0-1.188-.533-1.188-1.187zm-1.83 0c0-.656.533-1.189 1.188-1.189.655 0 1.188.533 1.188 1.189 0 .654-.533 1.187-1.188 1.187-.655 0-1.188-.533-1.188-1.187zm-1.83 0c0-.656.533-1.189 1.188-1.189.655 0 1.188.533 1.188 1.189 0 .654-.533 1.187-1.188 1.187-.655 0-1.188-.533-1.188-1.187zm-1.83 0c0-.656.533-1.189 1.188-1.189.655 0 1.188.533 1.188 1.189 0 .654-.533 1.187-1.188 1.187-.655 0-1.188-.533-1.188-1.187zm21.191 4.168c-.516-.367-1.138-.567-1.777-.567-.52 0-1.025.133-1.463.386-.118-.328-.31-.62-.56-.848-.387-.354-.897-.549-1.425-.549-.158 0-.313.018-.464.053-.162-.317-.413-.578-.718-.745-.37-.202-.792-.309-1.22-.309-.34 0-.673.067-.984.197-.13-.254-.332-.463-.585-.603-.314-.174-.672-.266-1.036-.266-1.218 0-2.209.991-2.209 2.209v3.01c0 1.218.991 2.209 2.209 2.209.364 0 .722-.092 1.036-.266.253-.14.455-.349.585-.603.311.13.644.197.984.197.428 0 .85-.107 1.22-.309.305-.167.556-.428.718-.745.151.035.306.053.464.053.528 0 1.038-.195 1.425-.549.25-.228.442-.52.56-.848.438.253.943.386 1.463.386.639 0 1.261-.2 1.777-.567.513.411 1.15.636 1.806.636 1.624 0 2.946-1.322 2.946-2.946 0-1.624-1.322-2.946-2.946-2.946-.656 0-1.293.225-1.806.636z" />
    </svg>
  ),
  Postman: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  Figma: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 12c1.933 0 3.5-1.567 3.5-3.5S10.433 5 8.5 5 5 6.567 5 8.5 6.567 12 8.5 12zm7 0c1.933 0 3.5-1.567 3.5-3.5S17.433 5 15.5 5 12 6.567 12 8.5s1.567 3.5 3.5 3.5zM8.5 19c1.933 0 3.5-1.567 3.5-3.5S10.433 12 8.5 12 5 13.567 5 15.5 6.567 19 8.5 19z" />
    </svg>
  ),
  "VS Code": (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.15 2.58L17.62 0l-8.52 8.12-5.4-4.14L0 5.16v13.68l3.7 1.18 5.4-4.14 8.52 8.12 5.53-2.58V2.58zM17.62 17.62l-4.41-4.41 4.41-4.41v8.82z" />
    </svg>
  ),
};

const SkillChip = ({ name }) => (
  <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full hairline-border shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 mx-4 shrink-0 group">
    <div className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors duration-500 flex items-center justify-center">
      {techIcons[name] || (
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
      )}
    </div>
    <span className="text-sm font-sans tracking-tight text-neutral-600 group-hover:text-neutral-900 transition-colors duration-500 font-medium">
      {name}
    </span>
  </div>
);

const MarqueeRow = ({ items, direction = "left" }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
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
    <div className="relative flex overflow-hidden py-4">
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

        <div className="space-y-4 md:space-y-6">
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
