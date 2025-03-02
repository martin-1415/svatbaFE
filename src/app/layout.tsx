
import {  Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation/Navigation";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Svatba Martin & Šárka',
    description: 'Pozvánka na naši svatbu!',
}

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: "400",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
            rel="stylesheet"
        />
      </head>
      <body className={`${dancingScript.variable} flex flex-col`}>

        <div id="header" className="h-header bg-violet-300 ">
            <Navigation />
        </div>

        <main>
            <div className="min-h-[calc(100vh-120px)] sm:px-10 sm:py-2 ">
                {children}
            </div>
        </main>

        <div id="footer" className="relative bg-violet-950 min-h-header text-white flex justify-center">
            <div className="px-2  py-4  text-right sm:text-left">Design stránek: Šárka</div>
            <div className="px-2 py-4" >©</div>
            <div className="px-2 py-4 ">Realizace stránek: Martin </div>

        </div>
      </body>
    </html>
  );
}
