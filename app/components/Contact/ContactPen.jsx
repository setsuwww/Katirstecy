import React from "react";
import { PenLine } from "lucide-react";

const ContactPen = () => {
  return (
    <div className="absolute -right-4 lg:right-4 bottom-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none z-20 drop-shadow-sm -rotate-5">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Pen Body */}
        <div className="w-1.5 h-52 bg-olive-900 rounded-full shadow-[20px_30px_30px_rgba(0,0,0,0.15)] rotate-[40deg] relative">
          {/* Pen Tip */}
          <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-2.5 h-5 bg-yellow-700/80 rounded-b-sm clip-path-tip" />
          {/* Pen Clip */}
          <div className="absolute top-10 right-[-3px] w-1 h-14 bg-olive-700 rounded-full opacity-60 shadow-sm" />
          {/* Pen Cap Detail */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-10 bg-olive-800 rounded-t-full" />
        </div>
        <PenLine
          className="absolute w-14 h-14 text-olive-400/10 rotate-[20deg] -translate-x-10 translate-y-10"
          strokeWidth={0.3}
        />
      </div>
    </div>
  );
};

export default ContactPen;
