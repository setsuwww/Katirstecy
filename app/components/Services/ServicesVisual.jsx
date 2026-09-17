"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
    FilePenLine,
    PenTool,
    Boxes,
    Code2,
    ShieldCheck,
    Rocket,
} from "lucide-react";

const ICONS = {
    FilePenLine,
    PenTool,
    Boxes,
    Code2,
    ShieldCheck,
    Rocket,
};

export default function ServicesVisual({
    service,
    activeIndex,
    total,
}) {
    const cardRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const glow = glowRef.current;

        if (!card || !glow) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(
                glow,
                {
                    opacity: 0,
                    scale: 0.75,
                    filter: "blur(35px)",
                },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(25px)",
                    duration: 0.8,
                    ease: "power3.out",
                }
            );

            tl.fromTo(
                card,
                {
                    opacity: 0,
                    scale: 0.94,
                    y: 20,
                    filter: "blur(8px)",
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.7,
                    ease: "power3.out",
                },
                "<0.05"
            );
        });

        return () => ctx.revert();
    }, [service.number]);

    const Icon = ICONS[service.icon];

    return (
        <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[560px]">
                {/* Outer frame */}
                <div className="absolute inset-0 rounded-[2rem] border border-black/5" />

                {/* Inner frame */}
                <div className="absolute inset-5 rounded-[1.5rem] border border-black/10" />

                {/* Grid */}
                <div
                    className="absolute inset-5 rounded-[1.5rem] opacity-50"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                <div
                    ref={glowRef}
                    className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        background: service.glow,
                    }}
                />
                {/* Card */}
                <div
                    ref={cardRef}
                    className="absolute left-1/2 top-1/2 w-[65%] -translate-x-1/2 -translate-y-1/2"
                >
                    <div className={`rounded-2xl border ${service.border} bg-white p-6 backdrop-blur-xl sm:p-8`}>
                        <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive-50 border border-olive-300">
                                <Icon
                                    className="text-olive-600"
                                    size={20}
                                    strokeWidth={2}
                                />
                            </div>
                        </div>

                        <div className="mt-8 lg:mt-10">
                            <div className="mb-2 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                                Current stage
                            </div>

                            <div className="font-fondamento text-2xl text-olive-600 font-medium tracking-tight">
                                {service.title}
                            </div>
                        </div>

                        <div className="mt-8 space-y-2">
                            <div className="h-1.5 w-full overflow-hidden rounded-px bg-olive-100">
                                <div
                                    className="h-full bg-olive-600 rounded-px transition-all duration-700"
                                    style={{
                                        width: `${((activeIndex + 1) /
                                                total) *
                                            100
                                            }%`,
                                    }}
                                />
                            </div>

                            <div className="flex justify-between text-[10px] uppercase tracking-wider text-neutral-400">
                                <span>Process</span>

                                <span>
                                    {activeIndex + 1}/{total}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Number */}
                <div className="absolute left-5 lg:left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-14 w-14 lg:h-20 lg:w-20 items-center justify-center rounded-full border border-black/10 bg-[#f4f4ef]">
                        <span className="font-mono text-xs">
                            {service.number}
                        </span>
                    </div>
                </div>

                {/* Label */}
                <div className="hidden lg:flex absolute bottom-8 right-0 translate-x-1/4">
                    <div className="border border-olive-300 bg-white p-4 rounded-sm">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                            Building
                        </div>

                        <div className="mt-1 text-xs font-medium">
                            Digital Products
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
