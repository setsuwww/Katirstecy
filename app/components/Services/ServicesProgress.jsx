export default function ServiceProgress({
    services,
    activeIndex,
}) {
    return (
        <>
            <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-4 sm:right-10 lg:flex">
                {services.map((service, index) => (
                    <div
                        key={service.number}
                        className="flex items-center gap-3"
                    >
                        <span
                            className={`font-mono text-[10px] transition-all duration-300 ${index === activeIndex
                                    ? "w-6 h-6 flex items-center justify-center rounded-full bg-black text-white"
                                    : "text-neutral-300"
                                }`}
                        >
                            {service.number}
                        </span>

                        <div
                            className={`h-px transition-all duration-500 ${index === activeIndex
                                    ? "w-8 bg-black"
                                    : "w-3 bg-black/10"
                                }`}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
