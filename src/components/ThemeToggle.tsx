"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#1D1D1D] shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white dark:text-white"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <i className="fa-solid fa-sun text-xl"></i>
      ) : (
        <i className="fa-solid fa-moon text-xl"></i>
      )}
    </button>
  );
}
