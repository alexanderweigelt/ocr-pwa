import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OCR (PWA)",
    short_name: "OCR",
    description: "An offline-capable OCR application",
    lang: "en",
    start_url: "/",
    display: "standalone",
    display_override: ["window-controls-overlay"],
    orientation: "any",
    background_color: "#111827",
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
    categories: ["productivity", "utilities"],

    // Experimental: The next settings are experimental technology!
    // Check the Browser compatibility table carefully before using this in production.

    // File Handling: Öffnet die installierte PWA bei Doppelklick/"Öffnen mit …" auf Bilddateien
    // → navigiert zu "/#file-open" innerhalb deiner SPA
    file_handlers: [
      {
        action: "/#file-open",
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".bmp", ".tiff"],
        },
      },
    ],
    // Bestehendes Fenster nutzen, wenn möglich (bessere UX)
    launch_handler: {
      client_mode: "navigate-existing",
    },
    // Optional: eigener Deep-Link per Custom Protocol
    // Beispiel-Link irgendwo im Web: web+ocr:https%3A%2F%2Fexample.com%2Fscan.png
    // -> öffnet deine installierte PWA und navigiert zu "/#import?src=%s"
    protocol_handlers: [{ protocol: "web+ocr", url: "/#import?src=%s" }],
  };
}
