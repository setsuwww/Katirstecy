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
            className="relative scroll-mt-20 bg-[#f4f4ef] text-neutral-950"
            style={{height: `clamp(${SERVICES.length * 65}vh,${SERVICES.length * 60}vh,${SERVICES.length * 70}vh
        )`,
            }}
        >
            <div
                ref={trackRef}
                className=" relative flex min-h-screen w-full items-start overflow-hidden py-24 lg:h-screen lg:items-center lg:py-0"
            >
                {/* Background */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-linear-to-r from-olive-50 via-olive-100 to-olive-500" />
                </div>

                {/* Main */}
                <div className="relative mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">

                    {/* Content */}
                    <div
                        ref={contentRef}
                        className="relative z-10 flex flex-col justify-center"
                    >
                        <ServicesContent
                            service={activeService}
                        />
                    </div>

                    {/* Visual */}
                    <div
                        ref={visualRef}
                        className="relative z-10"
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
