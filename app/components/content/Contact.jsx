"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../ui/SectionHeader";
import PaperStackCard from "../PaperStackCard";
import { Send, PenLine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const penRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        penRef.current,
        { rotation: -15, x: 20, opacity: 0 },
        {
          rotation: -5,
          x: 0,
          opacity: 1,
          duration: 2,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F2F2EB] py-24 lg:py-48 overflow-hidden border-t border-neutral-200/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute inset-0 bg-paper-grain opacity-[0.02] mix-blend-multiply pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label="CONTACT"
          title="Let's Create Something Meaningful"
          subtitle="Open to collaborations, freelance work, and creative discussions."
        />

        <div className="max-w-3xl mx-auto relative">
          <div ref={formRef}>
            <PaperStackCard
              className="w-full"
              innerClassName="p-8 md:p-16 flex flex-col gap-12"
            >
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 focus:bg-white transition-all duration-300 font-serif italic"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 focus:bg-white transition-all duration-300 font-serif italic"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold ml-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Your message here..."
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-neutral-400 focus:bg-white transition-all duration-300 resize-none font-serif italic"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="group flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-yellow-800 transition-all duration-500 shadow-lg hover:shadow-yellow-800/20">
                    <span className="text-xs uppercase tracking-[0.3em] font-medium">
                      Send Message
                    </span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </PaperStackCard>
          </div>

          {/* Pen Illustration Placeholder */}
          <div
            ref={penRef}
            className="hidden lg:block absolute -right-20 -bottom-20 w-64 h-64 pointer-events-none z-20"
          >
            {/* Visual representation of a pen using CSS/SVG */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Pen Body */}
              <div className="w-1.5 h-52 bg-neutral-900 rounded-full shadow-[20px_30px_30px_rgba(0,0,0,0.15)] rotate-[40deg] relative">
                {/* Pen Tip */}
                <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-2.5 h-5 bg-yellow-700/80 rounded-b-sm clip-path-tip" />
                {/* Pen Clip */}
                <div className="absolute top-10 right-[-3px] w-1 h-14 bg-neutral-700 rounded-full opacity-60 shadow-sm" />
                {/* Pen Cap Detail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-10 bg-neutral-800 rounded-t-full" />
              </div>
              <PenLine
                className="absolute w-14 h-14 text-neutral-400/10 rotate-[20deg] -translate-x-10 translate-y-10"
                strokeWidth={0.3}
              />
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-300 font-medium">
            Handcrafted with intent
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
