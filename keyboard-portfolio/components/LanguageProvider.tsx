"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANG,
  LANGUAGES,
  translate,
  type Lang,
} from "@/lib/i18n";

type LanguageCtx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => string;
};

const Ctx = createContext<LanguageCtx | null>(null);

export const LANG_BOOT_SCRIPT = `(function(){try{document.documentElement.lang='en';}catch(e){}})();`;

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  const setLang = useCallback(() => {}, []);
  const t = useCallback((path: string) => translate(path, "en"), []);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLanguage(): LanguageCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    return {
      lang: "en",
      setLang: () => {},
      t: (path) => translate(path, "en"),
    };
  }
  return ctx;
}
