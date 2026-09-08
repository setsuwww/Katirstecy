import React from "react";

import hobbies from "../../constants/hobbies.json";

import EditorialHeader from "../ui/EditorialHeader";

import HobbyImage from "../partials/HobbyImage";
import HobbyCard from "../partials/HobbyCard";

const AboutHobbies = () => {
  return (
    <section
      id="hobbies"
      className="relative py-24 px-2 lg:px-12 bg-[#F2F2EB] overflow-hidden"
    >
      <div className="relative max-w-8xl mx-auto">

        <EditorialHeader
          label={hobbies.section.label}
          title={hobbies.section.title}
          className="mb-6 lg:mb-16"
          gradientTo="green"
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

          <HobbyImage hobbies={hobbies} />

          <div className="hidden lg:flex w-px bg-olive-200/50" />

          <HobbyCard hobbies={hobbies} />

        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutHobbies);
