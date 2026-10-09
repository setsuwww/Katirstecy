"use client";

import React from "react";
import profile from "../../constants/profile.json";

import { InstagramIcon } from "./icons/Instagram";
import { WhatsappIcon } from "./icons/Whatsapp";
import { GithubIcon } from "./icons/Github";
import { LinkedinIcon } from "./icons/Linkedin";
import { XIcon } from "./icons/X";
import { FacebookIcon } from "./icons/Facebook";
import { TiktokIcon } from "./icons/Tiktok";
import { EmailIcon } from "./icons/Email";

const socialIcons = {
  Instagram: InstagramIcon,
  WhatsApp: WhatsappIcon,
  GitHub: GithubIcon,
  Email: EmailIcon,
  LinkedIn: LinkedinIcon,
  X: XIcon,
  Facebook: FacebookIcon,
  TikTok: TiktokIcon,
};

const socialColors = {
  Instagram: "#ec4899",
  WhatsApp: "#22c55e",
  GitHub: "#000000",
  Email: "#3b82f6",
  LinkedIn: "#0a66c2",
  X: "#000000",
  Facebook: "#1877f2",
  TikTok: "#ec4899",
};

export default function HeroSocialLinks({ radius = 120, speed = 20 }) {
  const [hoveredSocial, setHoveredSocial] = React.useState(null);

  const socials = profile.socials;
  const total = socials.length;

  // Ukuran orbit mengikuti breakpoint layar.
  const [screenSize, setScreenSize] = React.useState("desktop");

  React.useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  const orbitRadius = isMobile ? 65 : isTablet ? 85 : radius;
  const containerSize = orbitRadius * 2 + (isMobile ? 36 : 80);
  const iconSize = isMobile ? 14 : isTablet ? 17 : 20;
  const buttonPadding = isMobile ? "p-2" : isTablet ? "p-2" : "p-3";
  const centerSize = isMobile ? "h-5 w-5" : isTablet ? "h-7 w-7" : "h-9 w-9";

  return (
    <div
      className="relative mx-auto flex select-none items-center justify-center mt-10 lg:my-6"
      style={{
        width: containerSize,
        height: containerSize,
      }}
    >
      {/* Titik pusat */}
      <div
        className={`z-10 rounded-full bg-zinc-400/40 ${centerSize} outline-2 outline-dashed animate-spin duration-1000 outline-zinc-300 outline-offset-[1.5rem] lg:outline-offset-[3rem]`}
      />

      {/* Ring orbit */}
      <div
        className="pointer-events-none absolute rounded-full border border-dashed animate-spin duration-1000 border-zinc-400/60"
        style={{
          width: orbitRadius * 2,
          height: orbitRadius * 2,
        }}
      />

      {/* Lapisan orbit */}
      <div
        className="hero-orbit absolute inset-0 flex items-center justify-center"
        style={{
          "--orbit-duration": `${speed}s`,
        }}
      >
        {socials.map((social, index) => {
          const Icon = socialIcons[social.name];

          if (!Icon) return null;

          const angleDeg = (index * 360) / total;

          return (
            <div
              key={social.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(${orbitRadius}px)`,
              }}
            >
              <div
                style={{
                  transform: `rotate(${-angleDeg}deg)`,
                }}
              >
                <div className="hero-orbit-counter">
                  <a
                    href={social.url}
                    aria-label={social.name}
                    title={social.name}
                    target={
                      social.url.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.url.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    onFocus={() => setHoveredSocial(social.name)}
                    onBlur={() => setHoveredSocial(null)}
                    className={`flex items-center justify-center rounded-full border border-zinc-300 bg-white ${buttonPadding} shadow-sm transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900`}
                  >
                    <Icon
                      size={iconSize}
                      color={
                        hoveredSocial === social.name
                          ? socialColors[social.name]
                          : "#a1a1aa"
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
