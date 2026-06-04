"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const Hero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const avatarRef = useRef(null);
  const badgeRef = useRef(null);
  const paragraphRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(
    () => {
      const heading = new SplitType(headingRef.current, {
        types: "chars,words",
      });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      gsap.set(
        [
          avatarRef.current,
          badgeRef.current,
          paragraphRef.current,
          scrollRef.current,
        ],
        { opacity: 0, y: 30 },
      );
      gsap.set(heading.chars, { opacity: 0, y: 50 });

      tl.to(avatarRef.current, {
        y: 0,
        opacity: 1,
      })
        .to(
          badgeRef.current,
          {
            y: 0,
            opacity: 1,
          },
          "-=1",
        )
        .to(
          heading.chars,
          {
            y: 0,
            opacity: 1,
            stagger: 0.02,
          },
          "-=0.8",
        )
        .to(
          paragraphRef.current,
          {
            y: 0,
            opacity: 1,
          },
          "-=0.8",
        )
        .to(
          scrollRef.current,
          {
            y: 0,
            opacity: 1,
          },
          "-=0.8",
        );

      gsap.to(scrollRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return () => {
        heading.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-[#F8F8F6]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[16%] top-0 h-full w-0.5 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.08)_12px,transparent_12px,transparent_24px)]" />

        <div className="absolute right-[16%] top-0 h-full w-0.5 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.08)_12px,transparent_12px,transparent_24px)]" />
      </div>

      {/* Blurred Background Elements */}
      <div className="absolute bottom-[40%] left-[25%] w-[15vw] h-[15vw] blur-xl bg-radial from-sky-300 via-sky-100 to-transparent rounded-full opacity-100 z-10"></div>
      <div className="absolute top-[35%] right-[20%] w-[20vw] h-[20vw] blur-xl bg-radial from-yellow-300 via-yellow-100 to-transparent rounded-full opacity100 z-10"></div>

      {/* Top Section: Avatar & Badge */}
      <div className="flex flex-col items-center gap-8 mb-12">
        <div ref={avatarRef} className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-black/5 bg-white p-1">
            <Image
              src="/Jr.jpg"
              alt="Profile"
              width={100}
              height={100}
              className="object-cover rounded-full w-full h-full border border-white ring-2 ring-blue-500"
              priority
            />
          </div>
        </div>

        <div ref={badgeRef}>
          <div className="font-serif inline-flex items-center rounded-full bg-green-100/70 px-5 py-2 text-md tracking-widest text-[#3C763D] border border-green-500">
            Let the world know Who am i
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto z-10">
        <h1
          ref={headingRef}
          className="font-serif text-8xl leading-[1.05] tracking-[-0.03em] text-[#111111] mb-10"
        >
          Hello My Friend
        </h1>

        <p
          ref={paragraphRef}
          className="max-w-lg mx-auto text-lg md:text-xl text-[#555555] font-light leading-relaxed tracking-tight"
        >
          I'm Rifqi, in this portfolio I want to explain interesting facts about
          me, starting from Hobbies, Interests, and Skills, I don't want to show
          my programming skills in more detail, here it's just for exploration
          and learning design and coding
        </p>
      </div>

      {/* Bottom Section: Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all duration-300 cursor-pointer">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1V11M6 11L1 6M6 11L11 6"
              stroke="#111111"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
