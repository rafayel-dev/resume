import type { Metadata } from "next";
import { Outfit, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Rafiul Islam | Senior Fullstack & React Native Developer",
  description:
    "Senior Fullstack and React Native App developer building clean, responsive web and mobile applications with Next.js, Node.js, and MongoDB.",
  keywords: [
    "Fullstack Developer",
    "React Native Developer",
    "App Developer",
    "Next.js",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Rafiul Islam" }],
  openGraph: {
    title: "Rafiul Islam | Senior Fullstack & React Native Developer",
    description:
      "Senior Fullstack and React Native App developer building responsive web and mobile apps.",
    url: "https://rafiulislam.dev", // User can change this later
    siteName: "Rafiul Islam Portfolio",
    images: [
      {
        url: "/images/about/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Rafiul Islam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafiul Islam | Senior Fullstack & React Native Developer",
    description: "Senior Fullstack and React Native App developer.",
    images: ["/images/about/avatar.jpg"],
  },
  icons: {
    icon: "/images/logo/f.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/fontaswesome/css/all.min.css" />
        <link
          rel="stylesheet"
          href="/assets/fontaswesome/css/fontawesome.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${robotoSlab.variable} font-outfit dark:bg-black`}
      >
        <div className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full pt-52 lg:pt-[220px] px-4 sm:px-0">
          <div className="container grid grid-cols-12 md:gap-10">
            <Sidebar />
            <div className="col-span-12 lg:col-span-8">
              <Navbar />
              <main className="lg:rounded-2xl bg-white dark:bg-[#111111] overflow-hidden shadow-sm border border-gray-100 dark:border-[#212425] min-h-[600px]">
                {children}
              </main>

              <footer className="py-10 text-center lg:rounded-b-2xl dark:bg-[#111111] bg-white border-t border-gray-100 dark:border-[#212425] lg:hidden">
                <p className="text-gray-lite dark:text-[#A6A6A6]">
                  © 2026 Rafiul Islam. All Rights Reserved.
                </p>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
