import React from "react";

const gradientMap = {
  orange: "to-orange-500",
  yellow: "to-yellow-500",
  sky: "to-sky-500",
  green: "to-emerald-500",
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
        <span className="text-[10px] uppercase tracking-[0.3em] text-olive-400 font-medium block">
          {label}
        </span>
      )}

      <h2
        className={`
          font-serif
          text-3xl lg:text-5xl
          font-light italic
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
    </header>
  );
};

export default React.memo(EditorialHeader);
