import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                home: resolve(import.meta.dirname, "index.html"),
                curriculum: resolve(import.meta.dirname, "cv/index.html")
            }
        }
    }
});
