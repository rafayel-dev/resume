"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "WeMama — Motherhood Community App",
    category: "SaaS & Apps",
    image: "/images/work_images/wemama.jpg",
    link: "https://www.wemama.app/",
    description:
      "A verified women-only community web and mobile platform supporting women across all stages of motherhood with stage-based groups and expert sessions.",
    tech: ["React", "Remix", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
  },
    {
    id: 2,
    title: "bestKid EU — European Kids Fashion",
    category: "E-Commerce",
    image: "/images/work_images/bestkid.png",
    link: "https://bestkid.eu/",
    description:
      "International European children's fashion e-commerce storefront with multi-currency handling, dynamic product filters, and secure online shopping.",
    tech: ["React", "Next.js", "Tailwind CSS", "Headless Commerce"],
  },
  {
    id: 3,
    title: "Gestlio — Airbnb Automation SaaS",
    category: "SaaS & Apps",
    image: "/images/work_images/gestlio.jpg",
    link: "https://gestlio.com/en",
    description:
      "Automated management platform for Airbnb hosts to sync bookings via iCal, schedule cleaners, automate payments, and generate invoices seamlessly.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "iCal Sync"],
  },
  {
    id: 4,
    title: "Origin Attire — Streetwear E-Commerce",
    category: "E-Commerce",
    image: "/images/work_images/originattire.jpg",
    link: "https://www.originattirebd.com/",
    description:
      "High-performance fashion storefront for premium baggy denim and oversized streetwear with responsive product browsing and nationwide delivery.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "Cart & Checkout"],
  },
    {
    id: 5,
    title: "SRZ Films — Film Production & Media",
    category: "Media & Agency",
    image: "/images/work_images/srzfilms.jpg",
    link: "https://srzfilms.com/",
    description:
      "Cinematic portfolio and production agency website showcasing visual storytelling, showreels, high-definition video players, and client cases.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Video Player API"],
  },
    {
    id: 6,
    title: "Sokher Baksho — Handcrafted Gifts Store",
    category: "E-Commerce",
    image: "/images/work_images/sokherbaksho.jpg",
    link: "https://www.sokherbaksho.com/",
    description:
      "Artisan e-commerce boutique for handcrafted personalized gifts, jewelry, home decor, dynamic shopping bag, and custom orders.",
    tech: ["React", "Node.js", "Tailwind CSS", "REST APIs"],
  },
  {
    id: 7,
    title: "Eclipse Denim — Apparel Storefront",
    category: "E-Commerce",
    image: "/images/work_images/eclipsedenim.jpg",
    link: "https://www.eclipsedenim.com/",
    description:
      "Modern lifestyle and streetwear e-commerce platform offering interactive catalog browsing, instant checkout, and real-time inventory synchronization.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Payment Gateway"],
  },
  {
    id: 8,
    title: "MathBook UK — Interactive EdTech Platform",
    category: "SaaS & Apps",
    image: "/images/work_images/mathbook.jpg",
    link: "http://mathbook.co.uk/",
    description:
      "Interactive British curriculum mathematics learning platform offering GCSE problem sets, calculus diagrams, and student progress tracking.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4 shrink-0">
          <h2 className="text-[35px] font-bold dark:text-white font-roboto-slab leading-none">
            Works
          </h2>
          <div className="h-[2px] w-16 sm:w-20 md:w-28 bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-full"></div>
        </div>
        <ul className="flex flex-wrap gap-2.5 sm:gap-5 text-sm sm:text-base">
          {["All", "SaaS & Apps", "E-Commerce", "Media & Agency"].map(
            (tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer font-medium transition-colors ${
                  activeTab === tab
                    ? "text-[#FA5252] font-semibold"
                    : "text-[#44566c] dark:text-[#A6A6A6] hover:text-[#FA5252]"
                }`}
              >
                {tab}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-5 rounded-2xl bg-[#F3F6F6] dark:bg-[#1D1D1D] group border dark:border-[#212425] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl mb-4 relative aspect-video bg-gray-200 dark:bg-black/50"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] font-semibold text-[#FA5252] uppercase tracking-wider">
                  {project.category}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FA5252]/10 text-[#FA5252] hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white transition-all shadow-xs"
                  aria-label={`Visit live website for ${project.title}`}
                >
                  <span>Live Demo</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
              </div>
              <h3 className="text-xl font-bold mt-1 mb-2 dark:text-white transition-colors group-hover:text-[#FA5252]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-sm text-[#44566c] dark:text-[#A6A6A6] mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs pt-2 border-t border-gray-200/50 dark:border-[#282828]">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-white/70 dark:bg-black/40 px-2.5 py-1 rounded-md text-[11px] font-medium dark:text-gray-300 border border-gray-200/50 dark:border-[#282828]"
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
