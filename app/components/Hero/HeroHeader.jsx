import React from "react";
import profile from "../../constants/profile.json";

const HeroHeader = () => {
  return (
    <>
      <h1 className="font-serif text-5xl lg:text-8xl leading-[1.05] tracking-[-0.03em] text-olive-700 mb-10 lg:mt-4">
        {profile.hero.title}
      </h1>

      <div className="max-w-xs lg:max-w-md mx-auto">
        <p className="text-md md:text-lg text-olive-600 font-sans font-light leading-relaxed tracking-tight">
          {profile.hero.text}
        </p>
      </div>
    </>
  );
};

export default HeroHeader;
