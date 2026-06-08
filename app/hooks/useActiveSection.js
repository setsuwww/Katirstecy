"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

const ActiveSectionContext = createContext(null);

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);
  const sectionRefs = useRef({});

  const registerSection = useCallback((id, ref) => {
    sectionRefs.current[id] = ref;
  }, []);

  useEffect(() => {
    // Dynamically get all section elements with an 'id' attribute
    const sections = Array.from(document.querySelectorAll('section[id]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Determine active section based on intersection ratio or other criteria
            // For simplicity, we'll just take the first one that intersects
            // In a more complex scenario, you might want to use ratio or distance from top
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '-50% 0px -50% 0px', // When 50% of the section is in view
        threshold: 0, // Observe when any part of the target enters/exits the viewport
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, registerSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};
