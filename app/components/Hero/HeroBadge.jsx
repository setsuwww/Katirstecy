import React from "react";
import Image from "next/image";
import profile from "../../constants/profile.json";

const HeroBadge = () => {
  return (
    <div className="flex flex-col items-center gap-8 mb-12 mt-2 lg:mt-0 z-10">
      <div className="relative">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-white p-1.5">
          <Image
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            width={100}
            height={100}
            className="object-cover rounded-full w-full h-full border-2 border-white transition-all hover:ring-offset-4 ring-4 hover:ring-blue-300 ring-blue-500"
            priority
          />
        </div>
      </div>

      <div>
        <div className="status-badge font-fondamento font-bold inline-flex items-center gap-3 rounded-full bg-linear-to-r from-green-300/10 via-green-100/30 to-transparent px-4 lg:px-6 py-1.5 lg:py-2.5 text-xs lg:text-sm text-green-700 outline outline-offset-4 outline-green-200 hover:outline-green-400 ring ring-green-400 hover:ring-green-600 shadow-sm shadow-green-100 transition-all duration-500">
          {profile.hero.badge}
        </div>
      </div>
    </div>
  );
};

export default HeroBadge;
