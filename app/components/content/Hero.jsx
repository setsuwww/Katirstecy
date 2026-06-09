"use client";

import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import profile from "../../constants/profile.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-paper-grain opacity-[0.025] mix-blend-multiply pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.015)_100%)] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[16%] top-0 h-full w-px lg:w-0.5 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.08)_12px,transparent_12px,transparent_24px)]" />

        <div className="absolute right-[16%] top-0 h-full w-px lg:w-0.5 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.08)_12px,transparent_12px,transparent_24px)]" />
      </div>

      <div className="absolute bottom-[40%] left-[25%] w-[15vw] h-[15vw] blur-xl bg-radial from-sky-300 via-sky-100 to-transparent rounded-[50%_40%_60%_30%] opacity-100 z-0"></div>
      <div className="absolute top-[35%] right-[20%] w-[20vw] h-[20vw] blur-xl bg-radial from-yellow-300 via-yellow-100 to-transparent rounded-[50%_40%_60%_30%] opacity-100 z-0"></div>

      {/* Top Section: Avatar & Badge */}
      <div className="flex flex-col items-center gap-8 mb-12 mt-2 lg:mt-0">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-black/5 bg-white p-1">
            <Image
              src={profile.avatar.src}
              alt={profile.avatar.alt}
              width={100}
              height={100}
              className="object-cover rounded-full w-full h-full border border-white ring-2 ring-blue-500"
              priority
            />
          </div>
        </div>

        <div>
          <div className="status-badge font-serif inline-flex items-center gap-3 rounded-full bg-linear-to-r from-green-100 via-green-100/30 to-transparent px-4 lg:px-6 py-1.5 lg:py-2.5 text-xs lg:text-lg tracking-wide text-green-700 border border-green-400 shadow-sm shadow-green-100 transition-all duration-500">
            {profile.hero.badge}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto z-10">
        <h1 className="font-serif text-5xl lg:text-8xl leading-[1.05] tracking-[-0.03em] text-[#111111] mb-10 mt-2 lg:mt-4">
          {profile.hero.title}
        </h1>

        <div className="max-w-xl mx-auto space-y-2">
          {profile.hero.lines.map((text, i) => (
            <p
              key={i}
              className="text-sm md:text-xl text-gray-600 font-sans font-light leading-snug tracking-tight"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Section: Scroll Indicator */}
      <div className="lg:flex hidden absolute bottom-8 lg:bottom-30 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all duration-300 cursor-pointer">
          <ChevronDownIcon className="w-6 h-6 text-[#111111]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
