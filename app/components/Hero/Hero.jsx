"use client";

import React from "react";
import Image from "next/image";
import HeroBadge from "./HeroBadge";
import HeroHeader from "./HeroHeader";
import HeroSocialLinks from "./HeroSocialLinks";
import { GradientsBlob } from "../partials/Gradients-blob";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-white"
    >
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/pgt.avif"
          alt="Paper Texture"
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-multiply"
          priority
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[16%] top-0 h-full w-px lg:w-0.5 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.08)_12px,transparent_12px,transparent_24px)]" />

        <div className="absolute right-[16%] top-0 h-full w-px lg:w-0.5 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.08)_12px,transparent_12px,transparent_24px)]" />
      </div>

      <GradientsBlob />
      <HeroBadge />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto z-10">
        <HeroHeader />
        <HeroSocialLinks />
      </div>
    </section>
  );
};

export default Hero;
