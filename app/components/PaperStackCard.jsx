"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PaperStackCard = ({
  children,
  className = "",
  innerClassName = "",
  innerRef,
  innerStyle = {},
  ...props
}) => {
  const cardRef = useRef(null);

  const layer3AnimationRef = useRef(null);
  const layer2AnimationRef = useRef(null);
  const layer1AnimationRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Layer 3
      // Muncul dari bawah -> berhenti di posisi default
      if (layer3AnimationRef.current) {
        tl.fromTo(
          layer3AnimationRef.current,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          }
        );
      }

      // Layer 2
      // Muncul dari kiri -> berhenti di posisi default
      if (layer2AnimationRef.current) {
        tl.fromTo(
          layer2AnimationRef.current,
          {
            x: -60,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.35"
        );
      }

      // Layer 1
      // Muncul dari tengah -> posisi default
      if (layer1AnimationRef.current) {
        tl.fromTo(
          layer1AnimationRef.current,
          {
            scale: 0.92,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.75,
          },
          "-=0.35"
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative w-full ${className} `}
      {...props}
    >
      {/* Layer 3 Animation Wrapper */}
      <div
        ref={layer3AnimationRef}
        className="hidden lg:flex absolute inset-0"
      >
        {/* Layer 3 — Furthest Back */}
        <div className="absolute inset-0 bg-olive-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[1px] border-l border-olive-100 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-6 translate-y-4 rotate-[2.5deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" />
        </div>
      </div>

      {/* Layer 2 Animation Wrapper */}
      <div
        ref={layer2AnimationRef}
        className="absolute inset-0"
      >
        {/* Layer 2 — Middle */}
        <div className="absolute inset-0 bg-olive-50 shadow-[0_8px_20px_rgba(0,0,0,0.03)] rounded-[1px] border-l border-olive-100 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-3 translate-y-1 rotate-[2.5deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" />
        </div>
      </div>

      {/* Layer 1 Animation Wrapper */}
      <div
        ref={layer1AnimationRef}
        className="relative"
      >
        {/* Layer 1 — Main Front Card */}
        <div
          ref={(node) => {
            if (typeof innerRef === "function") {
              innerRef(node);
            } else if (innerRef) {
              innerRef.current = node;
            }
          }}
          style={innerStyle}
          className={`relative bg-white shadow-[0_20px_50px_rgba(0, 0, 0, 0.04)] overflow-hidden rounded-[1px] transition-transform duration-700 ease-[cubic-bezier(0.23, 1, 0.32, 1)] ${innerClassName} `}
        >
          {/* Paper Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none" />

          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperStackCard;
