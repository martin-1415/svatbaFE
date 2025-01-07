import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    <html lang="en">
    <head>
        <title>Tak dlouho se hledali až na sebe zbyli</title>
        <meta charSet="UTF-8"/>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-6`}>
        <Navigation />
        {children}
    </body>
    </html>
  );
}
