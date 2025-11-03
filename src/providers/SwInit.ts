"use client";

import { useEffect } from "react";

export default function SwInit() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register(
          `${basePath}/sw.js`,
          {
            scope: `${basePath}/`,
            updateViaCache: "none",
          },
        );

        reg.addEventListener("updatefound", () => {
          const sw = reg.installing;
          if (!sw) return;
          sw.addEventListener("statechange", () => {
            if (
              sw.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              if (Notification.permission === "granted") {
                new Notification("Update available", {
                  body: "Reload to use the latest version.",
                });
              } else {
                console.info("[PWA] Update available – please reload.");
              }
            }
          });
        });
      } catch (e) {
        console.error("[PWA] Service worker registration failed:", e);
      }
    };

    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }

    register().then();
  }, [basePath]);

  return null;
}
