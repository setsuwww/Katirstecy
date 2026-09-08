"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const MobileProjectCarousel = ({ projects, onPreview }) => {
  const carouselRef = useRef(null);
  const rafRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveCard = useCallback(() => {
    const container = carouselRef.current;

    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll(".project-card-wrapper")
    );

    if (!cards.length) return;

    const containerRect = container.getBoundingClientRect();

    const containerCenter =
      containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();

      const cardCenter = rect.left + rect.width / 2;

      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) =>
      prev === closestIndex ? prev : closestIndex
    );
  }, []);

  useEffect(() => {
    const container = carouselRef.current;

    if (!container) return;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        updateActiveCard();
      });
    };

    updateActiveCard();

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveCard);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveCard);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateActiveCard]);


  return (
    <div
      ref={carouselRef}
      className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-hide pb-8 md:pb-0"
    >
      {projects.map((project, idx) => (
        <div
          key={project.id}
          className="project-card-wrapper shrink-0 w-[calc(100vw-3rem)] md:w-auto snap-center"
        >
          <ProjectCard
            project={project}
            onPreview={onPreview}
            isActive={idx === activeIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default MobileProjectCarousel;
