import { ThemeModeScript } from "flowbite-react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DarkThemeToggle } from "flowbite-react";
import { ThemeInit } from "../../.flowbite-react/init";
import "./globals.css";
import SwInit from "@/providers/SwInit";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  colorScheme: "dark light",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white px-4 py-12 antialiased dark:bg-gray-900`}
      >
        <ThemeInit />
        <SwInit />
        <div className="theme-toggle absolute top-4 right-4">
          <DarkThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
