"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import SkillChip from "./SkillChip";

const MarqueeRow = React.memo(({ items, direction = "left" }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const totalWidth = row.scrollWidth / 2;
    const baseSpeed = 30 + Math.random() * 10;

    const animation = gsap.fromTo(
      row,
      { x: direction === "left" ? 0 : -totalWidth },
      {
        x: direction === "left" ? -totalWidth : 0,
        duration: baseSpeed,
        ease: "none",
        repeat: -1,
      },
    );

    return () => {
      animation.kill();
    };
  }, [direction]);

  const displayItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative flex overflow-hidden py-3 border-2 border-dashed border-olive-400">
      <div ref={rowRef} className="flex whitespace-nowrap">
        {displayItems.map((item, idx) => (
          <SkillChip key={idx} name={item} />
        ))}
      </div>
    </div>
  );
});

MarqueeRow.displayName = "MarqueeRow";

export default MarqueeRow;
