import React from "react";
import AboutEducation from "./AboutEducation";
import AboutExperience from "./AboutExperience";
import AboutSoftSkills from "./AboutSoftSkills";
import AboutHobbies from "./AboutHobbies";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#F2F2EB] lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.015)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.02] bg-grid-overlay pointer-events-none" />

      <div className="relative max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-10">
          <AboutEducation />
          <AboutExperience />
          <AboutSoftSkills />
        </div>
        <AboutHobbies />
      </div>
    </section>
  );
};

export default About;
