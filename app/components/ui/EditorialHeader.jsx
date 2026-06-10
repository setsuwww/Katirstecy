import React from "react";

const EditorialHeader = ({ label, title, className = "" }) => {
  return (
    <header className={`space-y-4 ${className}`}>
      {label && (
        <span className="text-[10px] uppercase tracking-[0.3em] text-olive-400 font-medium block">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl lg:text-5xl text-olive-700 font-light italic leading-tight">
        {title}
      </h2>
    </header>
  );
};

export default React.memo(EditorialHeader);
