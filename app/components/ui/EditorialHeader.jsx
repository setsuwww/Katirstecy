import React from "react";

const gradientMap = {
  orange: "to-orange-700",
  yellow: "to-yellow-700",
  sky: "to-sky-700",
  green: "to-emerald-700",
  olive: "to-olive-700",
};

const EditorialHeader = ({
  label,
  title,
  className = "",
  gradientTo = "olive",
}) => {
  const gradientClass = gradientMap[gradientTo] || gradientMap.olive;

  return (
    <header className={`lg:space-y-2 ${className}`}>
      {label && (
        <span className="text-[10px] uppercase tracking-wide text-taupe-500 font-semibold block">
          {label}
        </span>
      )}

      <h2
        className={`
          font-serif
          text-4xl lg:text-5xl
          font-light
          leading-tight
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          from-olive-700
          ${gradientClass}
        `}
      >
        {title}
      </h2>

      <div className="mt-4 w-8 h-[1px] bg-taupe-400" />
    </header>
  );
};

export default React.memo(EditorialHeader);
