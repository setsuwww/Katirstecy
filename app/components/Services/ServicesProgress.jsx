"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

export default function ServiceProgress({
    services,
    activeIndex,
}) {
    const isFirst = activeIndex === 0;
    const isLast = activeIndex === services.length - 1;

    return (
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 sm:right-10 lg:flex">
            <div className="flex flex-col items-end">

                {/* Top Arrow */}
                <div
                    className={`
                        mb-4 flex h-5 w-5 items-center justify-center
                        transition-all duration-500
                        ${isFirst
                            ? "opacity-30"
                            : "opacity-70"
                        }
                    `}
                >
                    <ChevronUp
                        size={14}
                        strokeWidth={1.5}
                        className={
                            !isFirst
                                ? "animate-[serviceArrowUp_1.8s_ease-in-out_infinite]"
                                : ""
                        }
                    />
                </div>

                {/* Progress */}
                <div className="flex flex-col gap-4">
                    {services.map((service, index) => {
                        const isActive =
                            index === activeIndex;

                        return (
                            <div
                                key={service.number}
                                className="flex items-center gap-3"
                            >
                                {/* Number */}
                                <span
                                    className={`
                                        font-mono text-[10px]
                                        transition-all duration-500
                                        ${
                                            isActive
                                                ? "text-black font-semibold"
                                                : "text-neutral-300"
                                        }
                                    `}
                                >
                                    {service.number}
                                </span>

                                {/* Line */}
                                <div
                                    className={`
                                        h-px
                                        transition-all duration-500
                                        ${
                                            isActive
                                                ? "w-8 bg-black"
                                                : "w-3 bg-black/10"
                                        }
                                    `}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Arrow */}
                <div
                    className={`
                        mt-4 flex h-5 w-5 items-center justify-center
                        transition-all duration-500
                        ${
                            isLast
                                ? "opacity-0"
                                : "opacity-70"
                        }
                    `}
                >
                    {!isLast && (
                        <ChevronDown
                            size={14}
                            strokeWidth={1.5}
                            className="animate-[serviceArrowDown_1.8s_ease-in-out_infinite]"
                        />
                    )}
                </div>

            </div>
        </div>
    );
}
