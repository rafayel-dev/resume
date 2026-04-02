"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", path: "/", icon: "fa-regular fa-user" },
    { name: "Resume", path: "/resume", icon: "fa-regular fa-file-lines" },
    { name: "Works", path: "/works", icon: "fas fa-briefcase" },
    { name: "Contact", path: "/contact", icon: "fa-solid fa-address-book" },
  ];

  return (
    <>
      {/* Mobile Top Header */}
      <header className="flex justify-between items-center fixed top-0 left-0 w-full z-[999] bg-[#F3F6F6] dark:bg-black px-4 md:px-10 py-5 lg:hidden">
        <Link href="/">
          <Image
            src="/images/logo/logo.png"
            width={150}
            height={40}
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#1D1D1D] shadow-md dark:text-white text-xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <nav
        className={`${isOpen ? "block" : "hidden"} fixed top-[88px] left-0 w-full z-[998] bg-white dark:bg-[#111111] lg:hidden shadow-xl border-t border-gray-100 dark:border-[#212425]`}
      >
        <ul className="flex flex-col py-4 px-6 md:px-10 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                    isActive
                      ? "text-[#FA5252] bg-[#F3F6F6] dark:bg-[#212425]"
                      : "text-gray-600 dark:text-[#A6A6A6] hover:text-[#FA5252]"
                  }`}
                >
                  <span className="text-xl">
                    <i className={item.icon}></i>
                  </span>
                  <span className="font-semibold">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop Main Header (Inside Container) */}
      <header className="hidden lg:flex items-center ml-auto mb-10 space-x-6">
        <div className="site-page-header shadow-sm border border-gray-100 dark:border-[#212425]">
          <nav>
            <ul className="flex site-page-nav space-x-6">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`flex flex-col items-center justify-center w-[80px] h-[80px] rounded-[10px] transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white"
                          : "bg-[#F3F6F6] dark:bg-[#212425] text-[#44566C] dark:text-[#A6A6A6] hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white"
                      }`}
                    >
                      <span className="text-xl mb-1">
                        <i className={item.icon}></i>
                      </span>
                      <span className="text-xs font-semibold">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <ThemeToggle />
      </header>
    </>
  );
}
