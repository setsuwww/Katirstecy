"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import settings from "../constants/settings.json";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="top-0 fixed w-full h-25 bg-white border-b-2 border-black/20 border-dashed flex items-center justify-center px-6 md:px-12 z-50">
      <div className="w-full max-w-350 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-2.5 h-2.5 bg-[#E6D500] rotate-45 transition-transform duration-500 group-hover:rotate-135" />
          <span className="font-serif text-[1.4rem] md:text-2xl text-[#111111] leading-none tracking-tight">
            {settings.navigation.brandName}
          </span>
        </Link>

        {/* Navigation Section */}
        <div className="hidden md:flex items-center gap-10">
          {settings.navigation.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-serif text-[1.1rem] transition-colors duration-300 group ${
                  isActive
                    ? "text-[#111111]"
                    : "text-[#8A8A8A] hover:text-[#111111]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#111111] transition-all duration-300 ease-in-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle (Simplified for aesthetic) */}
        <button className="md:hidden text-[#111111]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};
