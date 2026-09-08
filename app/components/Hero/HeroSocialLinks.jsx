"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../../constants/profile.json";

const HeroSocialLinks = () => {
  const containerRef = useRef(null);
  const linksRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const links = linksRef.current.filter(Boolean);

      if (!links.length) return;

      gsap.fromTo(
        links,
        {
          x: -35,
          opacity: 0,
        },
        {
          x: 0,
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
    <div
      ref={containerRef}
      className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-8"
    >
      {profile.socials.map((social, index) => {
        const Icon = getSocialIcon(social.name);
        const hoverClass = getHoverColor(social.name);

        return (
          <a key={social.name} ref={(node) => { linksRef.current[index] = node }} href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group cursor-pointer transition-transform duration-300"
          >
            {Icon && (
              <Icon
                className={`w-3.5 h-3.5 md:w-[18px] md:h-[18px] text-olive-400 group-hover:scale-110 transition-transform duration-300 ${hoverClass}`}
              />
            )}

            <span
              className={`text-xs lg:text-sm font-sans tracking-widest text-olive-500 uppercase transition-transform duration-300 ${hoverClass}`}
            >
              {social.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default HeroSocialLinks;
