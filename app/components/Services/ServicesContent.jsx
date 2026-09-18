"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import ServiceStage from "./ServicesStage";

export default function ServicesContent({ service }) {
    const stageRef = useRef(null);

    useEffect(() => {
        const element = stageRef.current;

        if (!element) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    y: 24,
                    filter: "blur(6px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.65,
                    ease: "power3.out",
                }
            );
        }, element);

        return () => ctx.revert();
    }, [service.number]);

    return (
        <div className="relative">
            <div className="mb-8 flex items-center gap-3">
                <span className="text-xs font-mono font-medium uppercase text-yellow-600">
                    06 - Services
                </span>
            </div>

            <h1 className="max-w-2xl font-serif text-taupe-600 text-5xl font-light leading-[0.95] tracking-[-0.05em] lg:text-7xl">
                From idea
                <br />
                <span className="bg-gradient-to-r from-taupe-800 to-taupe-600 bg-clip-text text-transparent">
                    to production.
                </span>
            </h1>

            <div
                ref={stageRef}
                className="mt-6 lg:mt-12"
            >
                <ServiceStage service={service} />
            </div>
        </div>
    );
}
