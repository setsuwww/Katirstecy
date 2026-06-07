"use client";

import React from "react";

const PaperStackCard = ({
  children,
  className = "",
  innerClassName = "",
  innerRef,
  innerStyle = {},
  ...props
}) => {
  return (
    <div className={`group relative w-full ${className}`} {...props}>
      {/* Layer 3 (Furthest back) - only visible on LG screens */}
      <div className="hidden lg:flex absolute inset-0 bg-neutral-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[1px] border-l border-neutral-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-6 translate-y-4 rotate-[2.5deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0">
        <div className="absolute inset-0 bg-paper-grain opacity-[0.03] mix-blend-multiply" />
      </div>

      {/* Layer 2 (Middle) */}
      <div className="absolute inset-0 bg-neutral-100 shadow-[0_8px_20px_rgba(0,0,0,0.03)] rounded-[1px] border-l border-neutral-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-3 translate-y-1 rotate-[2.5deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0">
        <div className="absolute inset-0 bg-paper-grain opacity-[0.03] mix-blend-multiply" />
      </div>

      {/* Layer 1 (Main Front Card) */}
      <div
        ref={innerRef}
        style={innerStyle}
        className={`relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden rounded-[1px] border-l border-neutral-200/30 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${innerClassName}`}
      >
        {/* Paper Grain Texture Overlay */}
        <div className="absolute inset-0 bg-paper-grain opacity-[0.04] mix-blend-multiply pointer-events-none" />

        <div className="relative z-10 w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default PaperStackCard;
