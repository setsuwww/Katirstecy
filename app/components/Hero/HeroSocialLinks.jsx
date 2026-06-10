import React from "react";
import { FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../../constants/profile.json";

const HeroSocialLinks = () => {
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
  );
};

export default HeroSocialLinks;
