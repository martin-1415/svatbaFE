
import {  Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation/Navigation";



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
        <title>Svatba Martin & Šárka</title>
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
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <Navigation />
        </div>

        <main>
            <div className="sm:px-20 sm:py-2 min-h-[calc(100vh-120px)]">
                {children}
            </div>
        </main>

        <div id="footer" className="relative bg-violet-950 h-header text-white">
        </div>
      </body>
    </html>
  );
}
