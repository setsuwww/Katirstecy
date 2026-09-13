"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { MdEmail } from "react-icons/md";
import HeroSocialLinks from "./Hero/HeroSocialLinks";

export const Footer = () => {
  const containerRef = useRef(null);
  const linksRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = linksRef.current.filter(Boolean);

      if (!links.length) return;

      gsap.fromTo(
        links,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      className="w-full border-t border-black/10 bg-white"
    >
      <div className="mx-auto flex max-w-350 flex-col px-6 py-12 md:px-12 lg:py-16">

        {/* =================================================
            BRAND
        ================================================= */}

        <div>
          <h2 className="font-fondamento text-xl tracking-tight text-black">
            Katirstecu
          </h2>

          <p className="mt-4 max-w-sm text-sm md:text-md leading-relaxed text-olive-400 ">
            Software Engineer who likes to build some Art from Code, Imagination & Creativity.
            This project was Made use Next.js, TailwindCSS, and GSAP.
          </p>
        </div>

        <HeroSocialLinks size="sm" justify="left" />

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="mt-16 border-t border-black/10 pt-5">
          <div className="flex flex-col gap-2 text-sm text-black/40 md:flex-row md:items-center md:justify-between">
            <p className="font-serif">
              Copyright © 2026 Katirstecu
            </p>

            <p className="font-serif">
              Built with curiosity & caffeine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
