import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
    // Load theme from localStorage or set default theme
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    // Function to toggle between themes
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"; // Toggle between 'light' and 'dark'
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme); // Set the new theme
        localStorage.setItem("theme", newTheme); // Persist theme in localStorage
    };

    // Apply theme when component mounts or theme changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <label className="swap swap-rotate px-4 sm:px-0">
            {/* Hidden checkbox controls the state */}
            <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />

            {/* Sun icon for light mode */}
            <FiSun className="swap-on h-5 w-5 fill-current text-[#49b863]" />

            {/* Moon icon for dark mode */}
            <LuMoon className="swap-off h-5 w-5 fill-current text-[#166fb8]" />

        </label>
    );
};

export default ThemeToggle;
