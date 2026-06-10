"use client";

import React from "react";
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
    text: "group-hover:text-yellow-600",
    border: "hover:border-yellow-400",
  },
  TypeScript: {
    icon: "group-hover:text-blue-600",
    text: "group-hover:text-blue-800",
    border: "hover:border-blue-600",
  },
  PHP: {
    icon: "group-hover:text-indigo-400",
    text: "group-hover:text-indigo-600",
    border: "hover:border-indigo-400",
  },
  Python: {
    icon: "group-hover:text-blue-500",
    text: "group-hover:text-blue-700",
    border: "hover:border-blue-500",
  },
  Java: {
    icon: "group-hover:text-orange-600",
    text: "group-hover:text-orange-700",
    border: "hover:border-orange-600",
  },
  "Next.js": {
    icon: "group-hover:text-black",
    text: "group-hover:text-black",
    border: "hover:border-black",
  },
  React: {
    icon: "group-hover:text-sky-400",
    text: "group-hover:text-sky-600",
    border: "hover:border-sky-400",
  },
  Laravel: {
    icon: "group-hover:text-red-500",
    text: "group-hover:text-red-700",
    border: "hover:border-red-500",
  },
  "Inertia.js": {
    icon: "group-hover:text-violet-500",
    text: "group-hover:text-violet-700",
    border: "hover:border-violet-500",
  },
  TailwindCSS: {
    icon: "group-hover:text-cyan-400",
    text: "group-hover:text-cyan-600",
    border: "hover:border-cyan-400",
  },
  "Express.js": {
    icon: "group-hover:text-yellow-500",
    text: "group-hover:text-yellow-700",
    border: "hover:border-yellow-500",
  },
  MySQL: {
    icon: "group-hover:text-blue-500",
    text: "group-hover:text-blue-700",
    border: "hover:border-blue-500",
  },
  PostgreSQL: {
    icon: "group-hover:text-blue-400",
    text: "group-hover:text-blue-600",
    border: "hover:border-blue-400",
  },
  MongoDB: {
    icon: "group-hover:text-emerald-500",
    text: "group-hover:text-emerald-700",
    border: "hover:border-emerald-500",
  },
  Redis: {
    icon: "group-hover:text-red-600",
    text: "group-hover:text-red-800",
    border: "hover:border-red-600",
  },
  Git: {
    icon: "group-hover:text-orange-600",
    text: "group-hover:text-orange-800",
    border: "hover:border-orange-600",
  },
  GitHub: {
    icon: "group-hover:text-black",
    text: "group-hover:text-black",
    border: "hover:border-black",
  },
  Linux: {
    icon: "group-hover:text-yellow-500",
    text: "group-hover:text-yellow-700",
    border: "hover:border-yellow-500",
  },
  Docker: {
    icon: "group-hover:text-blue-400",
    text: "group-hover:text-blue-600",
    border: "hover:border-blue-400",
  },
  Postman: {
    icon: "group-hover:text-orange-500",
    text: "group-hover:text-orange-700",
    border: "hover:border-orange-500",
  },
  Figma: {
    icon: "group-hover:text-purple-500",
    text: "group-hover:text-purple-700",
    border: "hover:border-purple-500",
  },
  "VS Code": {
    icon: "group-hover:text-blue-500",
    text: "group-hover:text-blue-700",
    border: "hover:border-blue-500",
  },
};

const SkillChip = React.memo(({ name }) => {
  const Icon = techIcons[name];
  const styles = techStyles[name] || {
    icon: "group-hover:text-olive-600",
    text: "group-hover:text-olive-600",
    border: "hover:border-olive-600",
  };

  return (
    <div
      className={`flex items-center gap-1 lg:gap-4 bg-white px-3 py-2 lg:px-4 lg:py-3.5 rounded-md border border-olive-200 ${styles.border} shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-500 mx-2 shrink-0 group cursor-default`}
    >
      <div
        className={`w-6 h-6 text-olive-400 group-hover:scale-105 lg:group-hover:scale-125 transition-all duration-500 flex items-center justify-center ${styles.icon}`}
      >
        {Icon ? (
          <Icon className="w-5 h-5 lg:w-full lg:h-full" />
        ) : (
          <div className="w-2.5 h-2.5 rounded-full bg-olive-300" />
        )}
      </div>
      <span
        className={`text-sm lg:text-md font-sans tracking-tight text-olive-500 transition-colors duration-500 font-medium ${styles.text}`}
      >
        {name}
      </span>
    </div>
  );
});

SkillChip.displayName = "SkillChip";

export default SkillChip;
