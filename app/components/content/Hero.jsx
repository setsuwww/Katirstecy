"use client";

import React from "react";
import Image from "next/image";
import { ChevronDownIcon, Download } from "lucide-react";
import { FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../../constants/profile.json";

const Hero = () => {
  const getSocialIcon = (name) => {
    switch (name) {
      case "WhatsApp":
        return FaWhatsapp;
      case "GitHub":
        return FaGithub;
      case "Instagram":
        return FaInstagram;
      case "Email":
        return MdEmail;
      default:
        return null;
    }
  };

  const getHoverColor = (name) => {
    switch (name) {
      case "WhatsApp":
        return "group-hover:text-green-600";
      case "GitHub":
        return "group-hover:text-neutral-900";
      case "Instagram":
        return "group-hover:text-pink-500";
      case "Email":
        return "group-hover:text-blue-600";
      default:
        return "group-hover:text-black";
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-white"
    >
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/pgt.png"
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

      <div className="absolute bottom-[42%] left-[15%]  lg:bottom-[40%] lg:left-[25%] w-[20vw] h-[20vw] lg:w-[15vw] lg:h-[15vw] blur-lg bg-radial from-sky-400/30 via-sky-100/10 to-transparent rounded-[50%_40%_60%_30%] opacity-100 z-0"></div>
      <div className="absolute bottom-[45%] right-[10%] lg:top-[35%] lg:right-[20%] w-[25vw] h-[25vw] lg:w-[20vw] lg:h-[20vw] blur-lg bg-radial from-yellow-400/30 via-yellow-100/10 to-transparent rounded-[50%_40%_60%_30%] opacity-100 z-0"></div>

      {/* Top Section: Avatar & Badge */}
      <div className="flex flex-col items-center gap-8 mb-12 mt-2 lg:mt-0 z-10">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-black/5 bg-white p-1">
            <Image
              src={profile.avatar.src}
              alt={profile.avatar.alt}
              width={100}
              height={100}
              className="object-cover rounded-full w-full h-full border-2 border-white ring-4 ring-blue-500"
              priority
            />
          </div>
        </div>

        <div>
          <div className="status-badge font-serif inline-flex items-center gap-3 rounded-full bg-linear-to-r from-green-300/10 via-green-100/30 to-transparent px-4 lg:px-6 py-1.5 lg:py-2.5 text-xs lg:text-sm tracking-wide text-green-700 border border-green-500 shadow-sm shadow-green-100 transition-all duration-500">
            {profile.hero.badge}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto z-10">
        <h1 className="font-serif text-5xl lg:text-8xl leading-[1.05] tracking-[-0.03em] text-olive-700 mb-10 lg:mt-4">
          {profile.hero.title}
        </h1>

        <div className="max-w-xs lg:max-w-md mx-auto">
          <p className="text-md md:text-lg text-olive-600 font-sans font-light leading-relaxed tracking-tight">
            {profile.hero.text}
          </p>
        </div>

        {/* Task 1: Social Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-8">
          {profile.socials.map((social) => {
            const Icon = getSocialIcon(social.name);
            const hoverClass = getHoverColor(social.name);
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group cursor-pointer transition-all duration-300"
              >
                {Icon && (
                  <Icon
                    className={`w-3.5 h-3.5 md:w-[18px] md:h-[18px] text-olive-400 transition-colors duration-300 ${hoverClass}`}
                  />
                )}
                <span
                  className={`text-xs lg:text-sm font-sans tracking-widest text-olive-500 uppercase transition-colors duration-300 ${hoverClass}`}
                >
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Task 2 & 3: Divider + Download CV Button */}
        <div className="mt-16 flex items-center justify-between gap-4 w-full">
          <div className="h-px bg-black/10 flex-grow" />
          <a
            href="/cv.png"
            download="Rifqi-Ibrahim-CV.png"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/10 bg-white hover:bg-black/5 transition-all duration-300 shadow-sm"
          >
            <Download className="w-4 h-4 text-[#111111]" />
            <span className="text-sm font-sans font-medium text-[#111111]">
              Download CV
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Section: Scroll Indicator */}
      <div className="lg:flex hidden absolute bottom-8 lg:bottom-30 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all duration-300 cursor-pointer">
          <ChevronDownIcon className="w-6 h-6 text-[#111111]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
