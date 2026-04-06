import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: '/' for custom domain or root deployment
// base: '/repo-name/' for GitHub Pages project site (e.g. '/m-n-sakib-dev.github.io/')
export default defineConfig({
        plugins: [react()],
        base: "/",
        build: {
                outDir: "dist",
        },
});
