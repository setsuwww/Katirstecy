"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "../../constants/profile.json";

gsap.registerPlugin(ScrollTrigger);

const HeroHeader = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // Title — atas ke bawah
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          {
            y: -60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          }
        );
      }

      // Description — bawah ke atas
      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.4"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <h1
        ref={titleRef}
        className="font-serif text-7xl lg:text-8xl leading-[1.15] pb-2 tracking-[-0.03em] bg-clip-text bg-linear-to-r text-transparent from-sky-700 via-olive-700 to-yellow-600 mb-10 cursor-default"
      >
        {profile.hero.title}
      </h1>

      <div className="max-w-xs lg:max-w-md mx-auto">
        <p
          ref={textRef}
          className="text-md lg:text-lg text-olive-600 hover:text-olive-800 font-light leading-relaxed"
        >
          {profile.hero.text}
        </p>
      </div>
    </div>
  );
};

export default HeroHeader;
