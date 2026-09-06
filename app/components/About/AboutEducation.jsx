import React from "react";
import education from "../../constants/education.json";
import PaperStackCard from "../PaperStackCard";
import EditorialHeader from "../ui/EditorialHeader";

const AboutEducation = () => {
  return (
    <div className="lg:col-span-3 space-y-10 lg:space-y-16 mt-8 lg:mt-0">
      <EditorialHeader
        label={education.section.label}
        title={education.section.title}
        gradientTo="orange"
      />

      <div className="relative space-y-6 lg:space-y-12 pl-4 pr-4">
        {education.items.map((item, idx) => (
          <div key={idx} className="relative group">
            <PaperStackCard innerClassName="border-l-4 border-orange-200">
              <div className="space-y-4 p-4">
                <span className="text-[10px] md:text-xs font-sans tracking-widest text-orange-400 font-base">
                  {item.period}
                </span>
                <h3 className="font-serif text-lg lg:text-xl text-olive-800 group-hover:text-orange-600 leading-tight tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                  {item.institution}
                </h3>
                <p className="text-sm text-olive-500 leading-relaxed max-w-100">
                  {item.description}
                </p>
              </div>
            </PaperStackCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducation;
