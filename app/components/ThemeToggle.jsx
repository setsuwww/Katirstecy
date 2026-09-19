"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    console.log("THEME:", theme);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");

        setTimeout(() => {
            console.log(
                "HTML CLASS:",
                document.documentElement.className
            );
        }, 100);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
        >
            {theme === "dark" ? "SUN" : "MOON"}
        </button>
    );
}
