import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  base: "/Office-de-Tourisme-de-Port-de-Bouc/",
  resolve: {
    alias: {
      "@": path.resolve(new URL("client/src", import.meta.url).pathname),
      "@shared": path.resolve(new URL("shared", import.meta.url).pathname),
      "@assets": path.resolve(
        new URL("attached_assets", import.meta.url).pathname,
      ),
    },
  },
  root: path.resolve(new URL("client", import.meta.url).pathname),
  build: {
    outDir: path.resolve(new URL("dist/public", import.meta.url).pathname),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
