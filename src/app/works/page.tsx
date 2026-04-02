"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "SAAS Analytics Dashboard",
    category: "Fullstack",
    image: "/images/work_images/1.jpg",
    link: "#",
    tech: ["Next.js", "Node.js", "MongoDB", "Recharts"],
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    category: "React Native",
    image: "/images/work_images/2.jpg",
    link: "#",
    tech: ["React Native", "Expo", "Redux Toolkit", "Stripe API"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend",
    image: "/images/work_images/3.jpg",
    link: "#",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 4,
    title: "Health & Fitness App",
    category: "React Native",
    image: "/images/work_images/4.jpg",
    link: "#",
    tech: ["React Native", "Firebase", "Victory Native"],
  },
];

export default function Works() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="px-5 sm:px-8 md:px-10 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="after-effect">Works</h2>
        <ul className="flex flex-wrap space-x-6">
          {["All", "Fullstack", "React Native", "Frontend"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer font-medium transition-colors ${activeTab === tab ? "text-[#FA5252]" : "text-[#44566c] dark:text-[#A6A6A6] hover:text-[#FA5252]"}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-5 rounded-2xl bg-[#F3F6F6] dark:bg-[#1D1D1D] group border dark:border-[#212425]"
          >
            <div className="overflow-hidden rounded-xl mb-4 relative aspect-video bg-gray-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-[14px] text-[#FA5252] font-semibold">
              {project.category}
            </span>
            <h3 className="text-xl font-bold mt-1 mb-2 dark:text-white transition-colors group-hover:text-[#FA5252]">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-white/50 dark:bg-black/50 px-2 py-1 rounded dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
