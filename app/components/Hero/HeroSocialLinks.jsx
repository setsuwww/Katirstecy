"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../../constants/profile.json";

const HeroSocialLinks = ({
  size = "md",
  justify = "center",
}) => {
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
        return "group-hover:text-olive-900";
      case "Instagram":
        return "group-hover:text-pink-500";
      case "Email":
        return "group-hover:text-blue-600";
      default:
        return "group-hover:text-black";
    }
  };

  const justifyClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const sizeClasses = {
    sm: {
      icon: "h-4 w-4 md:h-[18px] md:w-[18px]",
      text: "hidden",
      gap: "gap-0",
    },

    md: {
      icon: "h-4 w-4 md:h-[18px] md:w-[18px]",
      text: "text-xs lg:text-sm",
      gap: "gap-2",
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;
  const currentJustify =
    justifyClasses[justify] || justifyClasses.center;

  return (
    <div
      ref={containerRef}
      className={`
        mt-10
        flex
        flex-wrap
        ${currentJustify}
        gap-6
        lg:gap-8
      `}
    >
      {profile.socials.map((social, index) => {
        const Icon = getSocialIcon(social.name);
        const hoverClass = getHoverColor(social.name);

        return (
          <a
            key={social.name}
            ref={(node) => {
              linksRef.current[index] = node;
            }}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`
              group
              flex
              cursor-pointer
              items-center
              ${currentSize.gap}
              transition-transform
              duration-300
              hover:-translate-y-0.5
            `}
          >
            {Icon && (
              <Icon
                className={`
                  ${currentSize.icon}
                  text-olive-400
                  transition-all
                  duration-300
                  group-hover:scale-110
                  ${hoverClass}
                `}
              />
            )}

            <span
              className={`
                ${currentSize.text}
                font-sans
                uppercase
                tracking-widest
                text-olive-500
                transition-colors
                duration-300
                ${hoverClass}
              `}
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
