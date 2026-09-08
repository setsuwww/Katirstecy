"use client"

import React from "react";
import Image from "next/image";
import {
    BookOpenIcon,
    PencilSimpleLineIcon,
    PaletteIcon,
    MusicNoteIcon,
} from "@phosphor-icons/react";

const hobbyIcons = {
    Reading: BookOpenIcon,
    Writing: PencilSimpleLineIcon,
    Drawing: PaletteIcon,
    Music: MusicNoteIcon,
};

const HobbyImage = ({ hobbies }) => {
    return (
        <div className="lg:w-[35%] w-full">
            <div className="grid grid-cols-2 gap-4 h-full">
                {hobbies.items.map((item) => {
                    const Icon = hobbyIcons[item.title];

                    return (
                        <div
                            key={item.title}
                            className="group relative aspect-square rounded-md overflow-hidden bg-olive-100/50 border border-olive-200/50 shadow-sm cursor-pointer"
                        >
                            {/* IMAGE */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 1024px) 50vw, 20vw"
                                className="object-cover scale-100 grayscale-0 blur-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-90 group-hover:grayscale group-hover:blur-[2px]"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 flex items-center justify-center bg-olive-950/0 transition-all duration-500 ease-out group-hover:bg-olive-950/70">
                                <div className="flex flex-col items-center justify-center gap-3 text-white opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                                    {Icon && (
                                        <Icon
                                            size={32}
                                            color="#ffffff"
                                            weight="duotone"
                                        />
                                    )}

                                    <span className="text-sm lg:text-base font-serif font-light tracking-wide">
                                        {item.title}
                                    </span>

                                    <span className="w-12 h-px bg-white/70" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(HobbyImage);
