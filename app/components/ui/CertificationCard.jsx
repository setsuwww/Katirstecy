"use client";

import React from "react";
import PaperStackCard from "../PaperStackCard";
import { Award } from "lucide-react";

const CertificationCard = ({ cert, index }) => {
  return (
    <div className="cert-card h-full">
      <PaperStackCard
        className="h-full"
        innerClassName="p-8 flex flex-col gap-6 relative overflow-hidden group/cert border-double border-4 border-neutral-100/50"
      >
        {/* Decorative Seal Background */}
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-neutral-100/30 rounded-full border border-neutral-200/50 flex items-center justify-center rotate-12 group-hover/cert:rotate-0 transition-transform duration-1000">
          <Award className="w-24 h-24 text-neutral-200/30" strokeWidth={0.5} />
        </div>

        {/* Certificate Seal/Badge - Embossed Feel */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-double border-neutral-300 shadow-[2px_2px_10px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(0,0,0,0.05)]">
          <div className="w-12 h-12 rounded-full border border-dashed border-neutral-200 flex items-center justify-center">
            <Award className="w-6 h-6 text-yellow-700/60" strokeWidth={1} />
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="h-[1px] w-16 bg-neutral-200" />
          <h4 className="font-serif text-2xl text-neutral-800 leading-tight italic tracking-tight">
            {cert.title}
          </h4>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
            {cert.issuer}
          </p>
        </div>

        <div className="mt-auto flex justify-between items-end relative z-10">
          <div className="space-y-1">
            <span className="block text-[7px] font-mono text-neutral-300 uppercase tracking-widest">
              Authenticity Code
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              #{index.toString().padStart(3, "0")}-XI-REF
            </span>
          </div>
          <div className="text-right">
            <span className="block text-[7px] font-mono text-neutral-300 uppercase tracking-widest">
              Issued
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              {cert.year}
            </span>
          </div>
        </div>

        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 bg-paper-grain opacity-[0.04] mix-blend-multiply pointer-events-none" />
      </PaperStackCard>
    </div>
  );
};

CertificationCard.displayName = "CertificationCard";

export default React.memo(CertificationCard);
