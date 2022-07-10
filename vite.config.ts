import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), VitePWA({})],
    resolve: {
        alias: [{ find: "src", replacement: resolve(__dirname, "src") }],
    },
});
