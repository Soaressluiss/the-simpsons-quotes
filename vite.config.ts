import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
    registerType: "prompt",
    manifest: {
        name: "The Simpsons Quotes",
        short_name: "The Simpsons Quotes",
        description: "List your favorite Api quotes from The Simpsons - by Soaressluiss on GitHub",
        theme_color: "#00ADE",
        background_color: "#00ADE",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "any",
        icons: [
            {
                src: "icons/icons-16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                src: "icons/icons-48.png",
                sizes: "48x48",
                type: "image/png",
            },
            {
                src: "icons/icons-64.png",
                sizes: "64x64",
                type: "image/png",
            },
            {
                src: "icons/icons-72.png",
                sizes: "72x72",
                type: "image/png",
            },
            {
                src: "icons/icons-96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                src: "icons/icons-128.png",
                sizes: "128x128",
                type: "image/png",
            },
            {
                src: "icons/icons-144.png",
                sizes: "144x144",
                type: "image/png",
            },
            {
                src: "icons/icons-152.png",
                sizes: "152x152",
                type: "image/png",
            },
            {
                src: "icons/icons-180.png",
                sizes: "180x180",
                type: "image/png",
            },
            {
                src: "icons/icons-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "icons/icons-256.png",
                sizes: "256x256",
                type: "image/png",
                purpose: "any maskable",
            },
        ],
    },
    workbox: {
        globPatterns: ["**/*.{js, css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
    },
    devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
    },
};
// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react(), VitePWA(manifestForPlugin)],
});
