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
    <nav className="top-0 fixed w-full h-15 lg:h-20 bg-olive-50/30 backdrop-blur-md border-b-2 border-dashed border-olive-300 flex items-center justify-center px-6 md:px-12 z-50">
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
                className={`relative font-serif text-[1rem] transition-colors duration-300 group ${
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

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 md:hidden z-[9998] transition-all duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Paper Menu */}
          <div
            ref={menuRef}
            className={`absolute right-0 top-0 h-screen w-full bg-[#F7F6F2]
            border-l border-neutral-300
            shadow-[-20px_0_60px_rgba(0,0,0,0.15)]
            transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
            overflow-hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Paper Texture */}
            <div className="absolute inset-0 bg-paper-grain opacity-[0.04] mix-blend-multiply pointer-events-none" />

            {/* Decorative Lines */}
            <div className="absolute left-6 top-0 h-full w-px bg-neutral-300/50" />
            <div className="absolute right-6 top-0 h-full w-px bg-neutral-300/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full px-10 pt-24 pb-10">
              <span className="font-serif text-xs tracking-[0.3em] uppercase text-olive-400 mb-8">
                Navigation
              </span>

              <div className="flex flex-col gap-7">
                {settings.navigation.links.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className={`group relative font-serif text-4xl transition-all duration-300 ${
                        isActive
                          ? "text-olive-800"
                          : "text-olive-400 hover:text-olive-800"
                      }`}
                    >
                      {link.name}

                      <span
                        className={`absolute -bottom-2 left-0 h-[2px] bg-olive-800 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-12 border-t border-neutral-300">
                <p className="text-xs tracking-[0.2em] uppercase text-olive-400">
                  Portfolio Katirstecu
                </p>

                <p className="mt-3 text-sm text-olive-500 leading-relaxed">
                  Art is life, My life is art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
