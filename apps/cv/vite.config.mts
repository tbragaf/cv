import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
    root: import.meta.dirname,
    cacheDir: "../../node_modules/.vite/apps/cv",
    server: { port: 4200, host: "localhost" },
    preview: { port: 4300, host: "localhost" },
    plugins: [react()],
    resolve: { tsconfigPaths: true },
    build: { outDir: "../../dist/apps/cv", emptyOutDir: true }
}));
