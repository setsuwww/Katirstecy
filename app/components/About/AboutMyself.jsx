import React from "react";
import myself from "../../constants/myself.json";

const AboutMyself = () => {
    return (
        <section className="py-10 lg:py-20">
            <div className="max-w-6xl">
                <div className="space-y-6">
                    <span className="text-[10px] uppercase tracking-wider text-taupe-500 font-semibold">
                        {myself.label}
                    </span>

                    <h2 className="mt-2 lg:mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.25] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-olive-700 to-olive-500">
                        {myself.title}
                    </h2>

                    <div className="w-24 h-[2px] bg-taupe-400" />

                    <p className="max-w-3xl pt-2 font-serif text-2xl lg:text-3xl font-light leading-relaxed text-olive-800">
                        {myself.intro}
                    </p>

                    <p className="max-w-sm lg:max-w-4xl pt-2 text-sm lg:text-base leading-6 text-taupe-600">
                        {myself.description}
                    </p>
                </div>
            </div>

            <div className="w-12 h-px bg-taupe-400 mt-12" />
        </section>
    );
};

export default React.memo(AboutMyself);
