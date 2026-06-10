"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import settings from "../constants/settings.json";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = settings.navigation.links.map((link) =>
      link.href.replace("#", ""),
    );

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="top-0 fixed w-full h-15 lg:h-20 bg-olive-50/30 backdrop-blur-md border-b-2 border-dashed border-olive-300 flex items-center justify-center px-6 md:px-12 z-[9990]">
      <div className="w-full max-w-350 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-2.5 h-2.5 bg-[#E6D500] rotate-45 transition-transform duration-500 group-hover:rotate-135" />
          <span className="font-serif text-md md:text-2xl text-olive-800 leading-none tracking-tight">
            {settings.navigation.brandName}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {settings.navigation.links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-serif text-[1.1rem] transition-colors duration-300 group ${
                  isActive
                    ? "text-olive-800"
                    : "text-olive-400 hover:text-olive-800"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-olive-800 transition-all duration-300 ease-in-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-olive-700 z-[9999]"
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-olive-900/20 backdrop-blur-sm z-[9998] md:hidden transition-opacity duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        >
          <div
            ref={menuRef}
            className={`fixed right-0 top-0 h-full w-full sm:w-[90%] bg-white p-6 md:p-10 shadow-xl border-l border-neutral-200/80 transform transition-transform duration-300 ease-in-out z-[9999] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Paper Grain Overlay */}
            <div className="absolute inset-0 bg-paper-grain opacity-[0.02] mix-blend-multiply pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6 md:gap-8 mt-16 md:mt-20">
              {settings.navigation.links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative font-serif text-[1.5rem] md:text-[1.8rem] py-2 transition-colors duration-300 group ${
                      isActive
                        ? "text-olive-800"
                        : "text-olive-400 hover:text-olive-800"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-0 left-0 h-0.5 bg-olive-800 transition-all duration-300 ease-in-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
