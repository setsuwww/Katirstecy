"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useServicesScroll(stageCount) {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const contentRef = useRef(null);
    const visualRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("down");

    const previousProgress = useRef(0);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        const content = contentRef.current;
        const visual = visualRef.current;

        if (!section || !track || !content || !visual) {
            return;
        }

        const ctx = gsap.context(() => {
            const serviceTrigger = ScrollTrigger.create({
                trigger: section,

                start: "top top",
                end: "bottom bottom",

                pin: track,

                // Section sendiri sudah menentukan
                // panjang scroll, jadi tidak perlu
                // menambahkan spacing ekstra.
                pinSpacing: false,

                scrub: 0.3,

                anticipatePin: 1,

                invalidateOnRefresh: true,

                onUpdate: (self) => {
                    const progress = self.progress;

                    // Scroll direction
                    if (progress > previousProgress.current) {
                        setScrollDirection("down");
                    } else if (
                        progress < previousProgress.current
                    ) {
                        setScrollDirection("up");
                    }

                    previousProgress.current = progress;

                    // Active stage
                    const rawIndex =
                        progress * (stageCount - 1);

                    const index = Math.min(
                        stageCount - 1,
                        Math.floor(rawIndex + 0.5)
                    );

                    setActiveIndex((previous) =>
                        previous === index
                            ? previous
                            : index
                    );
                },
            });

            // Initial content animation
            gsap.fromTo(
                content,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            // Initial visual animation
            gsap.fromTo(
                visual,
                {
                    opacity: 0,
                    scale: 0.96,
                    y: 20,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            return () => {
                serviceTrigger.kill();
            };
        }, section);

        // Mobile browser viewport:
        // address bar / orientation bisa mengubah
        // ukuran viewport secara dinamis.
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        let resizeTimeout;

        const handleResizeDebounced = () => {
            clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 150);
        };

        window.addEventListener(
            "resize",
            handleResizeDebounced
        );

        window.addEventListener(
            "orientationchange",
            handleResize
        );

        return () => {
            clearTimeout(resizeTimeout);

            window.removeEventListener(
                "resize",
                handleResizeDebounced
            );

            window.removeEventListener(
                "orientationchange",
                handleResize
            );

            ctx.revert();
        };
    }, [stageCount]);

    return {
        sectionRef,
        trackRef,
        contentRef,
        visualRef,
        activeIndex,
        scrollDirection,
    };
}
