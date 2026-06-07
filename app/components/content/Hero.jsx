"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ChevronDownIcon } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const avatarRef = useRef(null);
  const badgeRef = useRef(null);
  const scrollRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const mainContentRef = useRef(null);

  useGSAP(
    () => {
      // 1. Initial Intro Animation
      const heading = new SplitType(headingRef.current, {
        types: "chars,words",
      });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      gsap.set([avatarRef.current, badgeRef.current, scrollRef.current], {
        opacity: 0,
        y: 30,
      });
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
          scrollRef.current,
          {
            y: 0,
            opacity: 1,
          },
          "-=0.8",
        );

      // 2. Reading Focus & Parallax Scroll Animation
      const lines = gsap.utils.toArray(".reading-line");
      const readingTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=60%", // Significantly reduced scroll distance
          scrub: 0.4, // Lower scrub for immediate feedback
          pin: true,
          pinSpacing: true,
        },
      });

      // Organic Blob Movements (Rotation, drift, and scale)
      readingTl.to(
        blob1Ref.current,
        {
          rotation: 360,
          x: 120,
          y: -150,
          scale: 1.2,
          ease: "none",
        },
        0,
      );

      readingTl.to(
        blob2Ref.current,
        {
          rotation: -360,
          x: -120,
          y: 150,
          scale: 0.9,
          ease: "none",
        },
        0,
      );

      // 4-Tier Static Reading Focus Hierarchy
      // Lines remain vertically fixed; focus transitions through scale, opacity, and weight
      lines.forEach((_, index) => {
        const step = index;

        lines.forEach((line, i) => {
          let targetOpacity = 0.6;
          let targetScale = 0.85;
          let targetBlur = "blur(0px)";
          let targetWeight = "300";
          let targetColor = "#6B7280";
          let targetGlow = "none";

          if (i === index) {
            // Active line
            targetOpacity = 1;
            targetScale = 1.08;
            targetBlur = "blur(0px)";
            targetWeight = "500";
            targetColor = "#111111";
          } else if (i === index - 1) {
            // Line above
            targetOpacity = 1;
            targetScale = 1.0;
            targetBlur = "blur(0px)";
          } else if (i === index + 1) {
            // Line below
            targetOpacity = 1;
            targetScale = 0.95;
            targetBlur = "blur(0px)";
          }

          readingTl.to(
            line,
            {
              opacity: targetOpacity,
              scale: targetScale,
              filter: targetBlur,
              fontWeight: targetWeight,
              color: targetColor,
              dropShadow: targetGlow,
              duration: 1,
              ease: "power2.inOut",
            },
            step,
          );
        });
      });

      // 3. Bounce Animation for Scroll Indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 4. Status Badge Pulse Effect (Breathing)
      gsap.to(".status-dot", {
        opacity: 0.3,
        scale: 1.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".status-badge", {
        borderColor: "rgba(34, 197, 94, 0.5)",
        boxShadow: "0 0 15px rgba(34, 197, 94, 0.15)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 5. Continuous Scroll-Reactive Blob Rotation
      let rotationVelocity = 0;
      let lastScrollY = window.scrollY;
      let currentRotation1 = 0;
      let currentRotation2 = 0;

      const tickerListener = () => {
        const currentScrollY = window.scrollY;
        const velocity = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        // Add momentum to velocity
        rotationVelocity += velocity * 0.05;
        // Friction / Deceleration
        rotationVelocity *= 0.95;

        // Apply rotation
        currentRotation1 += 0.2 + rotationVelocity;
        currentRotation2 -= 0.15 + rotationVelocity;

        gsap.set(blob1Ref.current, { rotation: currentRotation1 });
        gsap.set(blob2Ref.current, { rotation: currentRotation2 });
      };

      gsap.ticker.add(tickerListener);

      return () => {
        heading.revert();
        gsap.ticker.remove(tickerListener);
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-white"
    >
      {/* 1. Paper Grain Texture */}
      <div className="absolute inset-0 bg-paper-grain opacity-[0.025] mix-blend-multiply pointer-events-none" />

      {/* 2. Top Center Soft Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />

      {/* 3. Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.015)_100%)] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[16%] top-0 h-full w-0.5 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.08)_12px,transparent_12px,transparent_24px)]" />

        <div className="absolute right-[16%] top-0 h-full w-0.5 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.08)_12px,transparent_12px,transparent_24px)]" />
      </div>

      <div
        ref={blob1Ref}
        className="absolute bottom-[40%] left-[25%] w-[15vw] h-[15vw] blur-xl bg-radial from-sky-300 via-sky-100 to-transparent rounded-[50%_40%_60%_30%] opacity-100 z-0"
      ></div>
      <div
        ref={blob2Ref}
        className="absolute top-[35%] right-[20%] w-[20vw] h-[20vw] blur-xl bg-radial from-yellow-300 via-yellow-100 to-transparent rounded-[50%_40%_60%_30%] opacity100 z-0"
      ></div>

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
          <div className="status-badge font-serif inline-flex items-center gap-3 rounded-full bg-linear-to-r from-green-50 via-green-50/30 to-transparent px-6 py-2.5 text-sm lg:text-md tracking-[0.2em] text-green-700 border border-green-500/30 shadow-sm transition-all duration-500">
            <span className="relative flex h-2 w-2">
              <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Let the world know Who am i
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className="max-w-5xl mx-auto z-10">
        <h1
          ref={headingRef}
          className="font-serif text-6xl lg:text-8xl leading-[1.05] tracking-[-0.03em] text-[#111111] mb-10 mt-4"
        >
          Hello My Friend
        </h1>

        <div className="max-w-xl mx-auto space-y-2">
          {[
            "I'm Rifqi Ibrahim, in this portfolio I want to explain",
            "Interesting facts About me, starting from Skills,",
            "Projects and Hobbies, I want to show y'all my",
            "Programming skills in more detail",
            "So, welcome...",
          ].map((text, i) => (
            <p
              key={i}
              className="reading-line text-md md:text-xl text-gray-600 font-sans font-light leading-snug tracking-tight will-change-transform opacity-60 scale-[0.98]"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Section: Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-30 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all duration-300 cursor-pointer">
          <ChevronDownIcon className="w-6 h-6 text-[#111111]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
