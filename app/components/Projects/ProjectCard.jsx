import React from "react";
import PaperStackCard from "../PaperStackCard";
import { ExternalLink } from "lucide-react";
import { TAG_COLORS } from "../../constants/TAG_COLORS";
import { cn } from "../../lib/utils";

const ProjectCard = ({ project, onPreview, isActive = false }) => {
  return (
    <div
      className={cn(
        "project-card h-full transition-[filter,opacity] duration-300",

        // Mobile active / inactive
        isActive ? "grayscale-0 opacity-100" : "grayscale opacity-60",

        // Desktop always starts muted
        "md:grayscale md:opacity-80",

        // Desktop highlight on hover
        "md:hover:grayscale-0 md:hover:opacity-100"
      )}
    >
      <PaperStackCard
        className="h-full"
        innerClassName="p-8 h-full flex flex-col group/card"
      >
        {/* PROJECT ID */}
        <div className="flex justify-between items-start mb-8">
          <span
            className={cn(
              "font-mono text-[10px] tracking-wider transition-colors duration-300",

              // Mobile
              isActive ? "text-green-800" : "text-olive-600",

              // Desktop
              "md:text-olive-600 md:group-hover/card:text-green-800"
            )}
          >
            PROJECT-{project.id}
          </span>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onPreview(project)}
              aria-label={`Preview ${project.title}`}
              className="group flex items-center gap-x-1 cursor-pointer"
            >
              <ExternalLink
                className={cn(
                  "w-4 h-4 shrink-0 transition-[color,transform] duration-300 ease-out",

                  // Mobile
                  isActive ? "text-green-800" : "text-olive-300",

                  // Desktop
                  "md:text-olive-300 md:group-hover:text-green-700"
                )}
              />

              <span className="max-w-0 overflow-hidden whitespace-nowrap translate-x-2 text-[10px] font-mono transition-[max-width,opacity,transform] duration-300 ease-out group-hover:max-w-20 group-hover:opacity-100 group-hover:translate-x-0 md:group-hover:text-green-800">
                PREVIEW
              </span>
            </button>
          </div>
        </div>

        {/* TITLE */}
        <h3
          className={cn(
            "font-fondamento text-2xl tracking-tight leading-tight mb-4",
            "transition-all duration-300",

            // Mobile
            isActive ? "text-yellow-700 -translate-y-1" : "text-olive-600",

            // Desktop
            "md:text-olive-600",
            "md:group-hover/card:text-yellow-700",
            "md:group-hover/card:-translate-y-1"
          )}
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className={cn(
            "text-sm font-light leading-relaxed mb-8 grow",
            "transition-colors duration-300",

            // Mobile
            isActive ? "text-olive-600" : "text-olive-400",

            // Desktop
            "md:text-olive-400",
            "md:group-hover/card:text-olive-600"
          )}
        >
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => {
            const color = TAG_COLORS[tag];

            const baseStyles = cn(
              color?.bg ?? "bg-neutral-100",
              color?.border ?? "border-neutral-300",
              color?.text ?? "text-neutral-500"
            );

            const hoverStyles = cn(
              color?.hoverBg ?? "group-hover/card:bg-neutral-200",
              color?.hoverBorder ?? "group-hover/card:border-neutral-200",
              color?.hoverText ?? "group-hover/card:text-neutral-700"
            );

            const activeStyles = cn(
              color?.activeBg ?? color?.bg ?? "bg-neutral-100",
              color?.activeBorder ?? color?.border ?? "border-neutral-300",
              color?.activeText ?? color?.text ?? "text-neutral-500"
            );

            return (
              <span
                key={tag}
                className={cn(
                  "text-[10px] uppercase tracking-wider px-3 py-1 rounded-sm border",
                  "transition-[background-color,border-color,color] duration-300",

                  // Mobile
                  isActive ? activeStyles : baseStyles,

                  // Desktop
                  "md:" + baseStyles,
                  hoverStyles
                )}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </PaperStackCard>
    </div>
  );
};

ProjectCard.displayName = "ProjectCard";
export default React.memo(ProjectCard);
