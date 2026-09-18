"use client";

import ServicesContent from "./ServicesContent";
import ServicesVisual from "./ServicesVisual";
import ServiceProgress from "./ServicesProgress";

import SERVICES from "../../constants/service.json";
import { useServicesScroll } from "../../hooks/useServicesScroll";

export default function Services() {
    const {
        sectionRef,
        trackRef,
        contentRef,
        visualRef,
        activeIndex,
        scrollDirection,
    } = useServicesScroll(SERVICES.length);

    const activeService = SERVICES[activeIndex];

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative scroll-mt-20 bg-[#f4f4ef] text-olive-950"
            style={{
                height: `${SERVICES.length * 65}vh`,
            }}
        >
            <div ref={trackRef}
                className="relative flex h-dvh w-full items-center overflow-visible"
            >
                {/* Background */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 hidden h-px w-full -translate-x-1/2 bg-linear-to-r from-olive-50 via-olive-100 to-olive-500 lg:flex" />
                </div>

                {/* Main */}
                <div className="relative mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-6 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">
                    <div
                        ref={contentRef}
                        className="relative z-10 min-w-0"
                    >
                        <ServicesContent service={activeService} />
                    </div>

                    {/* Visual */}
                    <div
                        ref={visualRef}
                        className="relative z-10 min-w-0"
                    >
                        <ServicesVisual
                            service={activeService}
                            activeIndex={activeIndex}
                            total={SERVICES.length}
                            scrollDirection={scrollDirection}
                        />
                    </div>
                </div>

                {/* Progress */}
                <ServiceProgress
                    services={SERVICES}
                    activeIndex={activeIndex}
                />
            </div>
        </section>
    );
}
