import React from "react";
import experience from "../../constants/experience.json";
import { FolderClosed } from "lucide-react";
import PaperStackCard from "../PaperStackCard";
import EditorialHeader from "../ui/EditorialHeader";

const AboutExperience = () => {
  return (
    <div className="lg:col-span-5 lg:px-12 space-y-10 lg:space-y-16">
      <EditorialHeader
        label={experience.section.label}
        title={experience.section.title}
        gradientTo="yellow"
      />

      <div className="space-y-8 lg:space-y-10 ml-4 mr-4 lg:ml-0 lg:mr-0">
        {experience.items.map((item, idx) => (
          <PaperStackCard
            key={idx}
            innerClassName="border-l-4 border-yellow-200"
          >
            <div className="group space-y-6 p-5 rounded-sm">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-yellow-50 rounded-xl border border-yellow-100 shrink-0">
                  <FolderClosed
                    className="w-5 h-5 text-yellow-600"
                    strokeWidth={2}
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-serif text-lg lg:text-2xl text-olive-800 tracking-tight transition-all duration-300 group-hover:text-yellow-800">
                    {item.company}
                  </h3>

                  <p className="text-[8px] lg:text-xs uppercase tracking-[0.2em] text-olive-500 font-medium mt-1">
                    {item.title}
                  </p>
                </div>
              </div>

              <p className="text-sm lg:text-md text-olive-500 font-light leading-relaxed text-balance max-w-75 lg:max-w-100">
                {item.description}
              </p>
            </div>
          </PaperStackCard>
        ))}
      </div>
    </div>
  );
};

export default AboutExperience;
