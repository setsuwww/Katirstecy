"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../ui/SectionHeader";
import InterestCard from "../ui/InterestCard";
import { Music, Palette, Book } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Interests = () => {
  const sectionRef = useRef(null);

  const interestCategories = useMemo(() => [
    {
      title: "Creative Arts",
      icon: <Palette className="w-5 h-5 text-neutral-400" />,
      items: ["Drawing", "Writing", "Fine Arts"],
    },
    {
      title: "Music",
      icon: <Music className="w-5 h-5 text-neutral-400" />,
      items: ["Guitar", "Piano", "Drums"],
    },
    {
      title: "Personal Growth",
      icon: <Book className="w-5 h-5 text-neutral-400" />,
      items: ["Reading"],
    },
  ], []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".interest-card-wrapper",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F2F2EB] py-24 lg:py-32 overflow-hidden border-t border-neutral-200/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute inset-0 bg-paper-grain opacity-[0.02] mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label="INTERESTS"
          title="Beyond Coding"
          subtitle="Exploring creativity through arts, music, and continuous learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {interestCategories.map((category, idx) => (
            <div key={idx} className="interest-card-wrapper h-full">
              <InterestCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Interests);
