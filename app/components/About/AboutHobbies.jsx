import React from "react";
import Image from "next/image";
import hobbies from "../../constants/hobbies.json";
import PaperStackCard from "../PaperStackCard";
import EditorialHeader from "../ui/EditorialHeader";

const AboutHobbies = () => {
  const galleryImages = [
    "/hobbies/hobi1.jpg",
    "/hobbies/hobi2.jpg",
    "/hobbies/hobi3.jpg",
    "/hobbies/hobi4.jpg",
  ];

  return (
    <section
      id="hobbies"
      className="relative py-24 px-6 bg-[#F2F2EB] overflow-hidden"
    >
      <div className="relative max-w-8xl mx-auto">
        <EditorialHeader
          label={hobbies.section.label}
          title={hobbies.section.title}
          className="mb-6 lg:mb-16"
        />

        {/* 3-Column Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <div className="lg:w-[35%] w-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {galleryImages.map((src, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-md overflow-hidden bg-olive-100/50 shadow-sm border border-olive-200/50 grayscale-0 hover:grayscale-100 hover:scale-90 transition-all"
                >
                  <Image
                    src={src}
                    alt={`Hobby ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column Middle: Separator */}
          <div className="hidden lg:flex w-px bg-olive-200/50" />

          {/* Column Right: Hobby Cards (2x2 Grid) */}
          <div className="lg:w-[60%] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full">
              {hobbies.items.map((item, idx) => (
                <PaperStackCard
                  key={idx}
                  innerClassName="border-l-4 border-emerald-200"
                >
                  <div className="group space-y-4 p-6">
                    <h3 className="font-serif text-xl text-green-800 tracking-tight transition-all duration-300 group-hover:text-green-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-olive-500 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </PaperStackCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHobbies;
