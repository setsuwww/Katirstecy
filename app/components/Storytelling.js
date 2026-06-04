"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const lines = [
  "I'm Rifqi",
  "A Fullstack Developer",
  "Passionate about Design",
  "Building Beautiful Experiences",
  "Learning Every Day",
  "Turning Ideas Into Products",
];

const Storytelling = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".story-item");
      const section = sectionRef.current;
      const container = containerRef.current;

      if (!section || !container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${lines.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      items.forEach((item, index) => {
        // Animation for scale and opacity
        tl.to(
          item,
          {
            opacity: 1,
            scale: 1.3,
            duration: 1,
            ease: "power2.inOut",
          },
          index
        );

        // Move container to center the active line
        const sectionMid = section.offsetHeight / 2;
        const itemMid = item.offsetHeight / 2;
        const targetY = sectionMid - item.offsetTop - itemMid;

        if (index > 0) {
          tl.to(
            container,
            {
              y: targetY,
              duration: 1,
              ease: "power2.inOut",
            },
            index
          );
        } else {
          // For the first item, set initial position
          gsap.set(container, { y: targetY });
        }

        // Fade out/shrink when moving to next
        if (index < items.length - 1) {
          tl.to(
            item,
            {
              opacity: 0.15,
              scale: 0.8,
              duration: 1,
              ease: "power2.inOut",
            },
            index + 1
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#F8F8F6] overflow-hidden flex items-start justify-center"
    >
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center space-y-24 py-[50vh]"
      >
        {lines.map((line, index) => (
          <div
            key={index}
            className="story-item opacity-15 scale-[0.8] text-center will-change-transform"
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-[#1A1A1A] tracking-tight leading-none px-4">
              {line}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Storytelling;
