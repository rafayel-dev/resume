"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import { useLanguage } from "@/components/LanguageProvider";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT } from "@/lib/skills";

const EMAIL = "rafayeldevs@gmail.com";

// Localised content lives in `{ es, en }` objects inside these arrays so the
// page can be a straightforward array.map() at render time. Tech names stay
// as plain strings (they're brand names, not localised).
type Localised = { es: string; en: string };

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3" | "project4" | "project5";
};

const projects: Project[] = [
  {
    num: "01",
    name: {
      es: "Office ERP — Gestión de RRHH y Operaciones",
      en: "Office ERP — HR & Workforce Management",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Table",
    ],
    desc: {
      es: "ERP integral para asistencia, permisos, nóminas, gastos y proyectos con control geolocalizado y 6 niveles de permisos.",
      en: "Enterprise HR and office ERP for attendance, leave, payroll, expenses, and projects with geofenced check-in and 6 role-based levels.",
    },
    details: {
      es: "Desarrollado en DEVS KITCHEN. Sistema ERP empresarial de recursos humanos y gestión de empleados a través de 13 módulos integrados. Incluye fichaje geolocalizado, cadenas de aprobación jerárquicas de mánager a RRHH, motor de cálculo de nóminas y tablas interactivas con TanStack Table y Tailwind CSS.",
      en: "Built at DEVS KITCHEN. An enterprise HR and office ERP for attendance, leave, payroll, expenses and projects. Features geofenced check-in, manager-to-HR approval chains, and six role-based access levels across 13 modules, powered by TanStack Table and modern Next.js architecture.",
    },
    url: "https://devskitchen.dev.cv/work/office-erp",
    media: [
      "/projects/office-erp/cover.webp",
    ],
    highlights: ["nextdotjs", "react", "typescript", "tailwindcss"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: {
      es: "BooPaw — Red de Seguridad y Mascotas Perdidas",
      en: "BooPaw — Pet Safety & Lost/Found App",
    },
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    desc: {
      es: "App móvil para Android e iOS con identificación digital y collares con código QR para conectar mascotas con sus dueños.",
      en: "A cross-platform digital pet ID and lost-and-found mobile network for Android & iOS with QR collar tags.",
    },
    details: {
      es: "Desarrollado en DEVS KITCHEN. BooPaw conecta a dueños de mascotas mediante perfiles digitales y códigos QR en collares. Al escanear la placa desde cualquier navegador móvil, quien encuentre a la mascota puede contactar al dueño al instante sin necesidad de instalar la app. Desarrollado con React Native, Expo, Node.js y MongoDB.",
      en: "Built at DEVS KITCHEN. A digital pet ID and lost-and-found network for Android and iOS. QR collar tags allow anyone who finds a pet to reach the owner instantly through a responsive web profile, no app installation required. Engineered with React Native, Expo, Node.js, and MongoDB.",
    },
    url: "https://devskitchen.dev.cv/work/boopaw",
    media: [
      "/projects/boopaw/cover.webp",
    ],
    highlights: ["react", "expo", "typescript", "nodedotjs", "mongodb"],
    badge: { es: "Mobile App", en: "Mobile App" },
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      es: "AI Sales Desk — Bandeja Omnicanal con IA",
      en: "AI Sales Desk — Omnichannel AI Inbox",
    },
    stack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Socket.IO",
    ],
    desc: {
      es: "Bandeja de entrada omnicanal para web, Messenger, Instagram y WhatsApp con asistente IA de ventas en tiempo real.",
      en: "One unified inbox for website chat, Messenger, Instagram, and WhatsApp, with an AI assistant that answers from catalog data.",
    },
    details: {
      es: "Desarrollado en DEVS KITCHEN. Plataforma centralizada que unifica conversaciones de clientes en webchat, Messenger, Instagram y WhatsApp. Utiliza búsqueda vectorial con pgvector para que la IA responda basándose en el catálogo de productos de cada tienda, verificando stock y preparando pedidos automáticamente en tiempo real.",
      en: "Built at DEVS KITCHEN. A unified inbox combining website chat, Messenger, Instagram, and WhatsApp into one live interface. Integrates an AI assistant grounded in each shop's catalog using pgvector, checking inventory live and drafting customer orders via Socket.IO and NestJS.",
    },
    url: "https://devskitchen.dev.cv/work/ai-sales-desk",
    media: [
      "/projects/ai-sales-desk/cover.webp",
    ],
    highlights: ["nextdotjs", "postgresql", "typescript", "nodedotjs"],
    align: "left",
    section: "project3",
  },
  {
    num: "04",
    name: {
      es: "WeMama — Comunidad y Red Maternal",
      en: "WeMama — Motherhood Community Platform",
    },
    stack: [
      "React",
      "Remix",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST APIs",
    ],
    desc: {
      es: "Plataforma comunitaria verificada para mujeres en todas las etapas de la maternidad con grupos temáticos y sesiones de expertos.",
      en: "Verified women-only community web and mobile platform supporting women across all stages of motherhood.",
    },
    details: {
      es: "Espacio seguro y verificado para madres durante el embarazo y la crianza. Incluye verificación de identidad, foros dinámicos segmentados por etapas, mensajería en tiempo real, sesiones de preguntas en vivo con especialistas y seguimiento de bienestar. Desarrollado con React, Remix y Redux Toolkit.",
      en: "A verified women-only community web and mobile platform supporting women across all stages of motherhood with stage-based groups, expert Q&A sessions, peer support forums, and scalable state management built with React, Remix, and Redux Toolkit.",
    },
    url: "https://www.wemama.app/",
    media: [
      "/projects/wemama/cover.jpg",
    ],
    highlights: ["react", "redux", "tailwindcss", "javascript"],
    badge: { es: "Live Platform", en: "Live Platform" },
    align: "right",
    section: "project4",
  },
  {
    num: "05",
    name: {
      es: "bestKid EU — Moda Infantil Europea",
      en: "bestKid EU — European Kids Fashion",
    },
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Headless Commerce",
    ],
    desc: {
      es: "Tienda online internacional de moda infantil europea con gestión multidivisa, filtros dinámicos y pasarelas de pago seguras.",
      en: "International European children's fashion e-commerce storefront with multi-currency handling and dynamic product filters.",
    },
    details: {
      es: "Plataforma de comercio electrónico internacional para moda infantil europea. Desarrollada con Next.js y arquitectura headless commerce, con filtros facetados en tiempo real, manejo multidivisa, sincronización de stock y un flujo de checkout de alta conversión.",
      en: "An international e-commerce platform dedicated to premium European children's clothing. Built with Next.js and headless commerce architecture, featuring dynamic faceted product filtering, multi-currency localization, real-time inventory checks, and an ultra-fast checkout funnel.",
    },
    url: "https://bestkid.eu/",
    media: [
      "/projects/bestkid/cover.png",
    ],
    highlights: ["nextdotjs", "react", "typescript", "tailwindcss"],
    badge: { es: "E-Commerce", en: "E-Commerce" },
    align: "left",
    section: "project5",
  },
];

const experiences: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
    role: {
      es: "Executive Frontend & Mobile Engineer",
      en: "Executive Frontend & Mobile Engineer",
    },
    company: "Sparktech Agency",
    period: { es: "2023 — Presente", en: "2023 — Present" },
    location: { es: "Dhaka, Bangladesh", en: "Dhaka, Bangladesh" },
    summary: {
      es: "Liderazgo técnico en desarrollo frontend y móvil, dirigiendo la arquitectura de aplicaciones multiplataforma con React Native, Expo, Next.js y TypeScript con gestión de estado escalable.",
      en: "Directing frontend architecture and cross-platform mobile apps using React Native, Expo, Next.js, and TypeScript with scalable state management and team leadership.",
    },
    bullets: [
      {
        es: "Lideré el desarrollo y despliegue de aplicaciones móviles fluidas para Android e iOS con React Native y Expo.",
        en: "Led mobile app development and cross-platform releases for iOS and Android using React Native & Expo.",
      },
      {
        es: "Arquitecté plataformas web empresariales SaaS y paneles de administración interactivos en Next.js 16.",
        en: "Architected enterprise Next.js 16 SaaS dashboards, interactive data views, and high-scale web apps.",
      },
      {
        es: "Implementé arquitecturas de estado global predecibles con Redux Toolkit, Zustand y RTK Query.",
        en: "Streamlined complex state management with Redux Toolkit, Zustand, and automated API caching via RTK Query.",
      },
      {
        es: "Supervisé estándares de código, pipelines CI/CD y mentoría a desarrolladores del equipo.",
        en: "Mentored engineering team members and established smooth design-to-code production workflows.",
      },
    ],
    stack: [
      "React Native",
      "Expo",
      "Next.js 16",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
    ],
  },
];

function pick<T>(loc: { en: T } | T, _lang?: string): T {
  if (typeof loc === "object" && loc !== null && "en" in loc) {
    return (loc as { en: T }).en;
  }
  return loc as T;
}

// Hero name split per word so each can rise independently. Whitespace
// preserved as its own span so the line wraps naturally if needed.
function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. On mobile
            the canvas lives inside the hero instead (see below) so it scrolls
            away and the rest of the page is clean, fast 2D. */}
        {!isMobile && (
          <div className="fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap"
            >
              Rafiul Islam
            </span>
            {/* Wrapper (not the pill itself) carries the hide: .status-pill
                hard-sets display:inline-flex, which beats Tailwind's .hidden
                due to CSS source order, so hiding must happen on a parent. */}
            <span className="hidden md:inline-flex">
              <span className="status-pill">{t("header.availability")}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <span className="hidden md:inline-flex">
              <a
                href="https://github.com/rafayel-dev"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="frost-btn !py-1.5 !px-3 !text-xs"
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>GitHub</span>
              </a>
            </span>
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {/* Mobile-only 3D centerpiece. Lives inside the hero (scrolls away
                with it) and takes pointer events so keycaps are tappable. */}
            {isMobile && (
              <div className="w-full h-[34vh] mt-12 -mb-4 pointer-events-auto">
                <FrozenKeyboard mobile />
              </div>
            )}
            <div className="mt-2 md:mt-20">
              <p
                className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                style={{ ["--d" as string]: "0ms" }}
              >
                {t("hero.greeting")}
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92] whitespace-nowrap">
                <HeroWord text="Rafiul" delay={120} />
                <br />
                <HeroWord text="Islam" delay={260} className="text-ice-400" />
              </h1>
              <p
                className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up"
                style={{ ["--d" as string]: "520ms" }}
              >
                {t("hero.roleLine")}
                <br />
                {t("hero.tagline")}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                style={{ ["--d" as string]: "700ms" }}
              >
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn frost-btn--primary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  {t("hero.cv")}
                </a>
                <button
                  type="button"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                  onClick={() =>
                    document
                      .querySelector<HTMLElement>(
                        '[data-kb-section="contact"]'
                      )
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {t("hero.hire")}
                </button>
                {/* Mobile-only full-width break: forces the social icons onto
                    their own row below the two primary buttons. Hidden on md+
                    so desktop keeps everything on a single line. */}
                <div className="basis-full h-0 md:hidden" aria-hidden />
                <a
                  href="https://www.linkedin.com/in/rafayel-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/rafayel-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated scroll indicator at bottom */}
            <div
              className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>{t("hero.scroll")}</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                {t("hero.keysHint")}
              </span>
            </div>
          </section>

          {/* Stack */}
          <section
            data-kb-section="stack"
            className="relative md:min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative md:h-[150vh]">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    <span className="hidden md:inline">{t("stack.hint")}</span>
                    <span className="md:hidden">{t("stack.hintMobile")}</span>
                  </p>
                </Reveal>
              </div>

              {/* Mobile skills grid */}
              {isMobile && (
                <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pointer-events-auto">
                  {SKILLS_FLAT.map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-start gap-3 rounded-xl bg-ink-1/70 backdrop-blur-sm border border-ink-3 p-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill={`#${s.hex}`}
                        className="flex-none mt-0.5"
                        aria-hidden
                      >
                        <path d={s.path} />
                      </svg>
                      <div>
                        <p className="text-ice-50 font-medium text-sm">
                          {s.title}
                        </p>
                        <p className="text-ice-400 text-xs mt-0.5 leading-snug">
                          {t(`keyboard.taglines.${s.slug}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Experience */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("experience.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("experience.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(b, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · {t("projects.kicker")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {pick(p.name, lang)}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {pick(p.badge, lang)}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {pick(p.desc, lang)}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 md:justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex md:justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      {t("projects.viewMore")}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Contact */}
          <section
            data-kb-section="contact"
            className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-xl relative">
              <Reveal>
                <p className="font-mono text-sm text-ice-400 mb-3">
                  {t("contact.kicker")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                  {t("contact.title")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">{t("contact.body")}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 pointer-events-auto">
                  <CopyEmail
                    email={EMAIL}
                    className="frost-btn frost-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    {t("contact.copyEmail")}
                  </CopyEmail>
                  <a
                    href="https://github.com/rafayel-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.github")}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rafayel-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.linkedin")}
                  </a>
                  <a
                    href="https://wa.me/8801640080338"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                {t("contact.footer")}
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
