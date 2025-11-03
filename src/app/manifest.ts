import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const getPath = (path: string): string => `${basePath}${path}`;
  return {
    name: "OCR (PWA)",
    short_name: "OCR",
    description: "An offline-capable OCR application",
    lang: "en",
    start_url: getPath("/"),
    scope: getPath("/"),
    display: "standalone",
    display_override: ["window-controls-overlay"],
    orientation: "any",
    background_color: "#111827",
    theme_color: "#1c64f2",
    icons: [
      {
        src: getPath("/icons/android-chrome-192x192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: getPath("/icons/android-chrome-512x512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: getPath("/screenshots/home-desktop.png"),
        sizes: "1280x673",
        type: "image/png",
        form_factor: "wide",
        label: "Home screen on desktop",
      },
      {
        src: getPath("/screenshots/home-mobile.png"),
        sizes: "720x1559",
        type: "image/png",
        label: "Home screen on mobile",
      },
    ],
    categories: ["productivity", "utilities"],

    // Experimental: The next settings are experimental technology!
    // Check the Browser compatibility table carefully before using this in production.
    launch_handler: {
      client_mode: "navigate-existing",
    },
  };
}
