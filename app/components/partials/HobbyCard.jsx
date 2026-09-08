import React from "react";
import PaperStackCard from "../PaperStackCard";

const HobbyCard = ({ hobbies }) => {
    return (
        <div className="lg:w-[60%] w-full">
            <div className="grid grid-cols-2 gap-6 lg:gap-8 h-full">
                {hobbies.items.map((item) => (
                    <PaperStackCard
                        key={item.title}
                        innerClassName="border-l-4 border-emerald-200"
                    >
                        <div className="group space-y-2 lg:space-y-4 p-6">
                            <h3 className="font-fondamento text-xl text-green-800 tracking-tight transition-colors duration-300 group-hover:text-green-900">
                                {item.title}
                            </h3>

                            <p className="hidden lg:block text-sm text-olive-500 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </PaperStackCard>
                ))}
            </div>
        </div>
    );
};

export default React.memo(HobbyCard);
