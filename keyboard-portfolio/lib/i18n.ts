// Minimal i18n layer: single dictionary with English copy.
// Consumers read via `useLanguage().t()`
export type Lang = "en";

export const LANGUAGES: Lang[] = ["en"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = { en: string; es?: string } | string;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  if (typeof node === "string") return true;
  return typeof (node as { en?: string }).en === "string";
}

export const DICT = {
  picker: {
    season: { en: "Season" },
    language: { en: "Language" },
  },
  seasons: {
    spring: { en: "Spring" },
    summer: { en: "Summer" },
    autumn: { en: "Autumn" },
    winter: { en: "Winter" },
  },
  nav: {
    aria: { en: "Sections" },
    home: { en: "Home" },
    stack: { en: "Stack" },
    experience: { en: "Experience" },
    project: { en: "Projects" },
    contact: { en: "Contact" },
  },
  header: {
    availability: {
      en: "Available for Full-time & Freelance",
    },
  },
  hero: {
    greeting: { en: "Hi, I am" },
    roleLine: {
      en: "Executive Frontend & Mobile Engineer.",
    },
    tagline: {
      en: "Specialised in Next.js 16, React Native & scalable full-stack web and mobile apps.",
    },
    cv: { en: "Download CV" },
    hire: { en: "Contact me" },
    scroll: { en: "Scroll to explore" },
    keysHint: {
      en: "· hover over the keys",
    },
  },
  stack: {
    title: { en: "Tech Stack" },
    hint: {
      en: "(hint: hover over a key)",
    },
    hintMobile: {
      en: "The tools I build with.",
    },
  },
  experience: {
    title: { en: "Experience" },
    subtitle: {
      en: "My professional journey & engineering leadership.",
    },
  },
  projects: {
    kicker: { en: "featured project" },
    viewMore: { en: "View details" },
    openSite: { en: "Visit site" },
    viewCode: { en: "View code" },
    close: { en: "Close" },
    stackLabel: { en: "Stack" },
    overview: { en: "Overview" },
  },
  contact: {
    kicker: { en: "contact" },
    title: { en: "Let's connect!" },
    body: {
      en: "Whether you have a new project, a freelance contract, or an exciting full-time role, the keyboard is ready for your message.",
    },
    copyEmail: { en: "Copy email" },
    openMail: { en: "Send email" },
    github: { en: "GitHub" },
    linkedin: { en: "LinkedIn" },
    emailToast: { en: "Email copied to clipboard" },
    footer: {
      en: "© 2026 Rafiul Islam. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      javascript: {
        en: "The core engine of modern web development.",
      },
      typescript: {
        en: "Same JavaScript, with type-safety and robust scalability.",
      },
      html5: {
        en: "Semantic and accessible structural foundation.",
      },
      css: {
        en: "Modern, responsive, and pixel-perfect design.",
      },
      tailwindcss: {
        en: "Tailwind CSS v4: high-performance utility-first styling.",
      },
      react: {
        en: "Modern component-driven architecture with React 19.",
      },
      nextdotjs: {
        en: "Next.js 16: App Router, Server Actions, SSR & Edge delivery.",
      },
      expo: {
        en: "Fluid cross-platform mobile apps for iOS and Android.",
      },
      nodedotjs: {
        en: "High-throughput asynchronous backend runtime.",
      },
      express: {
        en: "Lightweight and robust RESTful API web framework.",
      },
      redux: {
        en: "Predictable global state management & caching with RTK Query.",
      },
      mongodb: {
        en: "Flexible, document-oriented NoSQL database for rapid growth.",
      },
      postgresql: {
        en: "Rock-solid relational database with ACID compliance.",
      },
      docker: {
        en: "Consistent application containerization and deployment.",
      },
      git: {
        en: "Version control, team branching workflows, and automation.",
      },
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for English
export function translate(path: string, _lang?: string): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (typeof ref === "string") return ref;
  if (isLeaf(ref)) return (ref as { en: string }).en ?? path;
  return path;
}
