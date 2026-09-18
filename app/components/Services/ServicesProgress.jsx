"use client";

export default function ServiceProgress({
    services,
    activeIndex,
}) {
    return (
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 sm:right-10 lg:flex">
            <div className="flex flex-col items-end">
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
                                                : "text-olive-300"
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
            </div>
        </div>
    );
}
