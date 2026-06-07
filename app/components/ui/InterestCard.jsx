"use client";

import React from "react";
import PaperStackCard from "../PaperStackCard";

const InterestCard = ({ category }) => {
  return (
    <div className="interest-card h-full">
      <PaperStackCard
        className="h-full"
        innerClassName="p-8 h-full flex flex-col items-start gap-8 group/interest"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-100 group-hover/interest:border-neutral-300 transition-colors duration-500">
            {category.icon}
          </div>
          <h3 className="font-serif text-2xl text-neutral-800 tracking-tight italic">
            {category.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.items.map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-neutral-50 text-neutral-500 text-[10px] uppercase tracking-widest border border-neutral-100 rounded-full hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-500 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
           <div className="w-8 h-[1px] bg-neutral-200 group-hover/interest:w-16 transition-all duration-700" />
        </div>
      </PaperStackCard>
    </div>
  );
};

export default React.memo(InterestCard);
