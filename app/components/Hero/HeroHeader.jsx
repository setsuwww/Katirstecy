import React from "react";
import profile from "../../constants/profile.json";

const HeroHeader = () => {
  return (
    <>
      <h1 className="font-serif text-7xl lg:text-8xl leading-[1.15] pb-2 tracking-[-0.03em] bg-clip-text bg-linear-to-r text-transparent from-sky-700 via-olive-700 to-yellow-600 mb-10">
        {profile.hero.title}
      </h1>

      <div className="max-w-xs lg:max-w-md mx-auto">
        <p className="text-md lg:text-lg text-olive-600 hover:text-olive-800 font-light leading-relaxed">
          {profile.hero.text}
        </p>
      </div>
    </>
  );
};

export default HeroHeader;
