"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );

  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("color-theme", dark ? "dark" : "light");
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
