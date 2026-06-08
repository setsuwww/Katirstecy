"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import settings from "../constants/settings.json";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="top-0 fixed w-full h-15 lg:h-25 bg-white/30 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-center px-6 md:px-12 z-50">
      <div className="w-full max-w-350 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-2.5 h-2.5 bg-[#E6D500] rotate-45 transition-transform duration-500 group-hover:rotate-135" />
          <span className="font-serif text-md md:text-2xl text-[#111111] leading-none tracking-tight">
            {settings.navigation.brandName}
          </span>
        </Link>

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

        <button
          className="md:hidden text-[#111111]"
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={18} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          >
            <div
              ref={menuRef}
              className="fixed right-0 top-0 h-full w-2/3 max-w-sm bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing overlay
            >
              <button
                className="absolute top-4 right-4 text-[#111111]"
                onClick={closeMenu}
                aria-label="Close Mobile Menu"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col gap-6 mt-12">
                {settings.navigation.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-serif text-[1.2rem] text-[#111111] hover:text-[#8A8A8A]"
                    onClick={closeMenu} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
