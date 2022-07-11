import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        VitePWA({
            includeAssets: ["favicon-512px.png", "favicon.svg", "favicon-192px.png"],
            manifest: {
                name: "MIDI FX",
                short_name: "MIDIFX",
                description: "Node Editor for Creative MIDI Effects",
                theme_color: "#3df5b8",
                icons: [
                    {
                        src: "favicon-512px.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "favicon-192px.png",
                        sizes: "192x192",
                        type: "image/png",
                    }
                ]
            }
        }),
    ],
    resolve: {
        alias: [{ find: "src", replacement: resolve(__dirname, "src") }],
    },
    base: "/midi-fx/",
});
