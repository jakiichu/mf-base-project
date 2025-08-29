import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "http://localhost:5173",
    plugins: [
        tsconfigPaths(),
        react(),
        tailwindcss(),
        federation({
            name: "core",
            remotes: {
                main: {
                    type: "module",
                    name: "main",
                    entry: "http://localhost:5174/remoteEntry.js",
                    entryGlobalName: "http://localhost:5174/remoteEntry.js",
                },
                admin: {
                    type: "module",
                    name: "admin",
                    entry: "http://localhost:5175/remoteEntry.js",
                    entryGlobalName: "http://localhost:5175/remoteEntry.js",
                },
            },
            shared: {
                react: {
                    singleton: true,
                },
                "react-dom": {
                    singleton: true,
                },
                "@tanstack/react-router": {
                    singleton: true,
                },
            },
        }),
    ],
    server: { port: 5173, strictPort: true },
    preview: { port: 5173 },
    resolve: {
        preserveSymlinks: true,
        dedupe: ["react", "react-dom", "@tanstack/react-router"],
    },
    optimizeDeps: { exclude: ["@shared/core"] },
    build: { target: "chrome89" },
});
