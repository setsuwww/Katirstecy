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
        <div className="absolute left-[10px] lg:left-[12px] top-0 h-[32rem] lg:h-[38rem] w-[2px] bg-olive-300" />

        {education.items.map((item, idx) => (
          <div key={idx} className="relative group pl-4">
            <div className="absolute left-[-12px] lg:left-[-10px] top-[22px] lg:top-[24px] w-[14px] h-[14px] rounded-full bg-white border border-olive-400 shadow-sm z-10 transition-all duration-500 group-hover:scale-150 group-hover:bg-olive-900 group-hover:border-olive-900" />

            <PaperStackCard innerClassName="border-l-4 border-orange-200">
              <div className="space-y-4 p-6 lg:p-4">
                <span className="text-[10px] font-sans tracking-widest text-orange-400 font-semibold">
                  {item.period}
                </span>
                <h3 className="font-serif text-lg lg:text-xl text-olive-800 group-hover:text-orange-600 leading-tight tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                  {item.institution}
                </h3>
                <p className="text-sm text-olive-500 font-light leading-relaxed max-w-[400px]">
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
