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
import ShadcnuiIcon from "../svg/ShadcnIcon";
import ExpressjsIcon from "../svg/ExpressjsIcon";
import SQLiteIcon from "../svg/SQLiteIcon";
import MySQLIcon from "../svg/MySQLIcon";
import PostgreSQLIcon from "../svg/PostgreSQLIcon";
import MongoDBIcon from "../svg/MongoDBIcon";
import RedisIcon from "../svg/RedisIcon";
import GitIcon from "../svg/GitIcon";
import GitLabIcon from "../svg/GitLabIcon";
import GitHubIcon from "../svg/GitHubIcon";
import LinuxIcon from "../svg/LinuxIcon";
import DockerIcon from "../svg/DockerIcon";
import PostmanIcon from "../svg/PostmanIcon";
import FigmaIcon from "../svg/FigmaIcon";
import VSCodeIcon from "../svg/VSCodeIcon";
import NodejsIcon from "../svg/NodejsIcon";
import AngularIcon from "../svg/AngularIcon";
import VueIcon from "../svg/VueIcon";
import SvelteIcon from "../svg/SvelteIcon";
import NuxtjsIcon from "../svg/NuxtjsIcon";
import FirebaseIcon from "../svg/FirebaseIcon";
import SupabaseIcon from "../svg/SupabaseIcon";
import GoIcon from "../svg/GoIcon";
import DartIcon from "../svg/DartIcon";
import CommandIcon from "../svg/CommandIcon";
import CypressIcon from "../svg/CypressIcon";
import CSharpIcon from "../svg/CSharpIcon";
import JestIcon from "../svg/JestIcon";
import BootstrapIcon from "../svg/BootstrapIcon";

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
  "Shadcn/ui": ShadcnuiIcon,
  Cypress: CypressIcon,
  "C#/CSharp": CSharpIcon,
  Jest: JestIcon,
  Bootstrap: BootstrapIcon,
  "Express.js": ExpressjsIcon,
  SQLite: SQLiteIcon,
  MySQL: MySQLIcon,
  PostgreSQL: PostgreSQLIcon,
  MongoDB: MongoDBIcon,
  Redis: RedisIcon,
  "Node.js": NodejsIcon,
  Angular: AngularIcon,
  "Vue.js": VueIcon,
  Svelte: SvelteIcon,
  "Nuxt.js": NuxtjsIcon,
  Firebase: FirebaseIcon,
  Supabase: SupabaseIcon,
  Golang: GoIcon,
  Dart: DartIcon,
  Command: CommandIcon,
  Git: GitIcon,
  GitLab: GitLabIcon,
  GitHub: GitHubIcon,
  Linux: LinuxIcon,
  Docker: DockerIcon,
  Postman: PostmanIcon,
  Figma: FigmaIcon,
  "VS Code": VSCodeIcon,
};

const colorStyles = {
  blue: {
    icon: "group-hover:text-blue-600",
    text: "group-hover:text-blue-800",
    border: "hover:border-blue-600",
  },

  sky: {
    icon: "group-hover:text-sky-500",
    text: "group-hover:text-sky-700",
    border: "hover:border-sky-500",
  },

  cyan: {
    icon: "group-hover:text-cyan-600",
    text: "group-hover:text-cyan-700",
    border: "hover:border-cyan-600",
  },

  green: {
    icon: "group-hover:text-green-500",
    text: "group-hover:text-green-700",
    border: "hover:border-green-500",
  },

  emerald: {
    icon: "group-hover:text-emerald-600",
    text: "group-hover:text-emerald-700",
    border: "hover:border-emerald-600",
  },

  orange: {
    icon: "group-hover:text-orange-600",
    text: "group-hover:text-orange-800",
    border: "hover:border-orange-600",
  },

  red: {
    icon: "group-hover:text-red-500",
    text: "group-hover:text-red-700",
    border: "hover:border-red-500",
  },

  violet: {
    icon: "group-hover:text-violet-500",
    text: "group-hover:text-violet-700",
    border: "hover:border-violet-500",
  },

  indigo: {
    icon: "group-hover:text-indigo-500",
    text: "group-hover:text-indigo-700",
    border: "hover:border-indigo-500",
  },

  yellow: {
    icon: "group-hover:text-yellow-400",
    text: "group-hover:text-yellow-600",
    border: "hover:border-yellow-400",
  },

  lime: {
    icon: "group-hover:text-lime-500",
    text: "group-hover:text-lime-700",
    border: "hover:border-lime-600",
  },

  black: {
    icon: "group-hover:text-black",
    text: "group-hover:text-black",
    border: "hover:border-black",
  },

  neutral: {
    icon: "group-hover:text-neutral-700",
    text: "group-hover:text-neutral-900",
    border: "hover:border-neutral-700",
  },

  purple: {
    icon: "[&_path]:fill-neutral-200 [&_path]:stroke-neutral-400 group-hover:[&_path]:fill-purple-200 group-hover:[&_path]:stroke-purple-700",
    text: "group-hover:text-purple-700",
    border: "hover:border-purple-500",
  },
};

const techStyles = {
  JavaScript: colorStyles.yellow,
  TypeScript: colorStyles.blue,

  PHP: colorStyles.indigo,
  Python: colorStyles.green,
  Java: colorStyles.orange,

  "Next.js": colorStyles.black,
  React: colorStyles.sky,

  Laravel: colorStyles.red,
  "Inertia.js": colorStyles.violet,

  TailwindCSS: colorStyles.cyan,
  "Shadcn/ui": colorStyles.black,
  Bootstrap: colorStyles.indigo,

  "C#/CSharp": colorStyles.blue,

  "Express.js": colorStyles.yellow,
  "Node.js": colorStyles.lime,

  Angular: colorStyles.red,
  "Vue.js": colorStyles.emerald,
  Svelte: colorStyles.orange,
  "Nuxt.js": colorStyles.emerald,

  Firebase: colorStyles.orange,
  Supabase: colorStyles.emerald,

  Golang: colorStyles.sky,
  Dart: colorStyles.blue,
  "C#/CSharp": colorStyles.blue,

  Command: colorStyles.neutral,

  SQLite: colorStyles.blue,
  MySQL: colorStyles.blue,
  PostgreSQL: colorStyles.blue,

  MongoDB: colorStyles.emerald,
  Redis: colorStyles.red,

  Git: colorStyles.orange,
  GitLab: colorStyles.orange,
  GitHub: colorStyles.black,

  Linux: colorStyles.yellow,

  Jest: colorStyles.red,
  Cypress: colorStyles.emerald,

  Docker: colorStyles.blue,
  Postman: colorStyles.orange,

  Figma: colorStyles.purple,

  "VS Code": colorStyles.blue,
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
      className={`flex items-center gap-1 lg:gap-4 bg-white px-3 py-2 lg:px-4 lg:py-3.5 rounded-md border border-olive-200 ${styles.border} shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out mx-2 shrink-0 group cursor-default`}
    >
      <div
        className={`w-6 h-6 text-olive-400 group-hover:scale-105 lg:group-hover:scale-115 transition-transform duration-300 ease-in-out flex items-center justify-center ${styles.icon}`}
      >
        {Icon ? (
          <Icon
            className={`w-5 h-5 lg:w-full lg:h-full transition-transform duration-300 ease-in-out ${styles.icon}`}
          />
        ) : (
          <div className="w-2.5 h-2.5 rounded-full bg-olive-300" />
        )}
      </div>

      <span
        className={`text-sm lg:text-md font-sans tracking-tight text-olive-500 transition-colors font-medium ${styles.text}`}
      >
        {name}
      </span>
    </div>
  );
});

SkillChip.displayName = "SkillChip";

export default SkillChip;
