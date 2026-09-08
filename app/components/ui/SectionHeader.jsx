"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ label, title, subtitle, className = "" }) => {
  const headerRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Label — turun dari atas
      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          {
            y: -35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          }
        );
      }

      // Title — turun setelah label
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          {
            y: -50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.35"
        );
      }

      // Divider — muncul dari tengah
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          {
            scaleX: 0,
            opacity: 0,
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.35"
        );
      }

      // Subtitle — turun terakhir
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          {
            y: -25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.2"
        );
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`text-center mb-16 lg:mb-24 space-y-6 ${className}`}
    >
      <div className="space-y-3">
        {label && (
          <span
            ref={labelRef}
            className="text-[10px] font-mono uppercase tracking-widest text-taupe-800 font-semibold block"
          >
            {label}
          </span>
        )}

        <h2
          ref={titleRef}
          className="font-serif text-4xl md:text-7xl text-taupe-600 font-light tracking-tight"
        >
          {title}
        </h2>
      </div>

      <div
        ref={lineRef}
        className="w-12 h-[2px] bg-taupe-600 mx-auto origin-center"
      />

      {subtitle && (
        <p
          ref={subtitleRef}
          className="text-sm md:text-md text-taupe-500 font-light leading-relaxed max-w-[280px] md:max-w-md mx-auto text-balance"
        >
          {subtitle}
        </p>
      )}
    </header>
  );
};

SectionHeader.displayName = "SectionHeader";
export default React.memo(SectionHeader);
