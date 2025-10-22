import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OCR (PWA)",
    short_name: "OCR",
    description: "An offline-capable OCR application",
    start_url: "/",
    display: "standalone",
    background_color: "#1E98E7",
    theme_color: "#1E98E7",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/home-desktop.png",
        sizes: "1280x673",
        type: "image/png",
        form_factor: "wide",
        label: "Home screen on desktop",
      },
      {
        src: "/screenshots/home-mobile.png",
        sizes: "720x1559",
        type: "image/png",
        label: "Home screen on mobile",
      },
    ],
  };
}
