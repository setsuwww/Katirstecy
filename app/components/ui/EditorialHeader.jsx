"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gradientMap = {
  orange: "to-orange-700",
  yellow: "to-yellow-700",
  sky: "to-sky-700",
  green: "to-emerald-700",
  olive: "to-olive-700",
};

const EditorialHeader = ({
  label,
  title,
  className = "",
  gradientTo = "olive",
}) => {
  const headerRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  const gradientClass = gradientMap[gradientTo] || gradientMap.olive;

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

      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          {
            x: -40,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
          }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          {
            x: -70,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.35"
        );
      }

      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
            opacity: 0,
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`group lg:space-y-2 ${className}`}
    >
      {label && (
        <span
          ref={labelRef}
          className="text-[10px] font-mono uppercase tracking-wider group-hover:tracking-widest transition-all text-taupe-500 font-semibold block"
        >
          {label}
        </span>
      )}

      <h2
        ref={titleRef}
        className={`font-serif text-4xl lg:text-5xl font-light leading-tight group-hover:pl-2 transition-all duration-500 ease-out bg-clip-text text-transparent bg-gradient-to-r from-olive-700 ${gradientClass}`}
      >
        {title}
      </h2>

      <div
        ref={lineRef}
        className="mt-4 w-8 h-px bg-taupe-400 origin-left group-hover:w-16 transition-[width]"
      />
    </header>
  );
};

export default React.memo(EditorialHeader);
