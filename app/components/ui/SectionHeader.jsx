"use client";

import React from "react";

const SectionHeader = ({ label, title, subtitle, className = "" }) => {
  return (
    <header className={`text-center mb-16 lg:mb-24 space-y-6 ${className}`}>
      <div className="space-y-3">
        {label && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-taupe-800 font-semibold block">
            {label}
          </span>
        )}
        <h2 className="font-serif text-4xl md:text-7xl text-taupe-600 font-light tracking-tight">
          {title}
        </h2>
      </div>

      <div className="w-12 h-[2px] bg-taupe-600 mx-auto" />

      {subtitle && (
        <p className="text-sm md:text-md text-taupe-500 font-light leading-relaxed max-w-[280px] md:max-w-md mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </header>
  );
};

SectionHeader.displayName = "SectionHeader";

export default React.memo(SectionHeader);
