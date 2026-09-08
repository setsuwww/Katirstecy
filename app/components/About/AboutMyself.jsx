"use client";

import React, {
    useLayoutEffect,
    useRef,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import myself from "../../constants/myself.json";

gsap.registerPlugin(ScrollTrigger);

const AboutMyself = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const introRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            const title = titleRef.current;
            const intro = introRef.current;

            if (!container || !title || !intro) return;

            /*
             * Initial state
             *
             * Konten disembunyikan dulu.
             * Nanti ScrollTrigger yang akan
             * menjalankan reveal ketika section
             * masuk viewport.
             */
            gsap.set([title, intro], {
                opacity: 0,
                x: -40,
                clipPath: "inset(0 100% 0 0)",
            });

            /*
             * TITLE REVEAL
             *
             * Jalan ketika section mulai masuk viewport.
             */
            gsap.to(title, {
                x: 0,
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
                duration: 1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    once: true,
                },
            });

            /*
             * INTRO REVEAL
             *
             * Sedikit delay supaya mengikuti title.
             */
            gsap.to(intro, {
                x: 0,
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
                duration: 0.9,
                delay: 0.18,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    once: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    /*
     * Intro bounce saat hover.
     *
     * Hanya sekali:
     * naik → turun → settle.
     */
    const handleIntroEnter = () => {
        const intro = introRef.current;

        if (!intro) return;

        gsap.killTweensOf(intro);

        gsap.timeline()
            .to(intro, {
                y: -4,
                duration: 0.2,
                ease: "power2.out",
            })
            .to(intro, {
                y: 3,
                duration: 0.12,
                ease: "power2.in",
            })
            .to(intro, {
                y: -2,
                duration: 0.1,
                ease: "power2.out",
            })
            .to(intro, {
                y: 0,
                duration: 0.16,
                ease: "bounce.out",
            });
    };

    return (
        <section
            ref={containerRef}
            className="py-10 lg:py-20"
        >
            <div className="group max-w-6xl">
                <div className="space-y-6">

                    {/* LABEL */}
                    <span className="inline-block text-[10px] font-mono uppercase tracking-[0.25em] text-taupe-500 font-semibold transition-[letter-spacing] duration-500 group-hover:tracking-[0.2em]">
                        {myself.label}
                    </span>

                    {/* TITLE */}
                    <h2 ref={titleRef}
                        className="mt-2 lg:mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.25] tracking-tight transition-transform duration-500 ease-out group-hover:-translate-x-2 bg-clip-text text-transparent bg-gradient-to-r from-olive-700 to-olive-500"
                    >
                        {myself.title}
                    </h2>

                    {/* DIVIDER */}
                    <div className="w-24 h-[2px] bg-taupe-400 transition-[width] duration-300 group-hover:w-12" />

                    {/* INTRO */}
                    <p
                        ref={introRef}
                        onMouseEnter={handleIntroEnter}
                        className="max-w-md lg:max-w-lg pt-2 font-serif text-2xl lg:text-3xl font-light leading-relaxed text-olive-800 cursor-default"
                    >
                        {myself.intro}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="max-w-sm lg:max-w-4xl pt-2 text-sm lg:text-base leading-6 text-taupe-600 transition-colors duration-500 hover:text-olive-700"
                    >
                        {myself.description}
                    </p>

                </div>
            </div>

            <div className="w-12 h-px bg-taupe-400 mt-12" />
        </section>
    );
};

export default React.memo(AboutMyself);
