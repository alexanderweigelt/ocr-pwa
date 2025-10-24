import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";
import { ThemeInit } from "../../.flowbite-react/init";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OCR (PWA)",
  description: "An image to text converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white px-4 py-24 antialiased dark:bg-gray-900`}
      >
        <ThemeInit />
        <div className="absolute inset-0 size-full">
          <div className="relative h-full w-full select-none">
            <Image
              className="absolute right-0 min-w-dvh dark:hidden"
              alt="Pattern Light"
              src="/pattern-light.svg"
              width="803"
              height="774"
            />
            <Image
              className="absolute right-0 hidden min-w-dvh dark:block"
              alt="Pattern Dark"
              src="/pattern-dark.svg"
              width="803"
              height="775"
              loading={"eager"}
            />
          </div>
        </div>
        <div className="theme-toggle absolute top-4 right-4">
          <DarkThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
