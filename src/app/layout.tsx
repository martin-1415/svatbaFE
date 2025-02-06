import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Svatba",
  description: "Tak dlouho se hledali až na sebe zbyli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <head>
        <title>Tak dlouho se hledali až na sebe zbyli</title>
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} bg-orange-50 flex flex-col`}>
        <div id="header" className="h-header bg-violet-300 ">
            <Navigation />
        </div>

        <main>
            {children}
        </main>

        <div id="footer" className="relative bg-black h-40 text-white">
          <div className="flex justify-between text-sm">
            <div className="w-3/12 p-2">Šárka: Design stránek</div>
            <div className="w-3/12 p-2">Martin: NextJs, Spring Boot, Kubernates, MongoDB</div>
          </div>
        </div>
      </body>
    </html>
  );
}
