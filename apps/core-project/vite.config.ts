import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { federation } from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        viteReact(),
        tailwindcss(),
        tsconfigPaths(),
        federation({
            name: "core",
            remotes: {
                admin: {
                    type: "module",
                    name: "admin",
                    entry: "http://localhost:5175/remoteEntry.js",
                },
                main: {
                    type: "module",
                    name: "main",
                    entry: "http://localhost:5174/remoteEntry.js",
                },
            },

            shared: {
                react: {
                    singleton: true,
                    requiredVersion: undefined,
                    strictVersion: undefined,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: undefined,
                    strictVersion: undefined,
                },
                "@tanstack/react-router": {
                    singleton: true,
                    requiredVersion: undefined,
                    strictVersion: undefined,
                },
            },
        }),
    ],
    resolve: {
        preserveSymlinks: true,
        dedupe: ["react", "react-dom", "@tanstack/react-router"],
    },
    optimizeDeps: { exclude: ["@shared/core"] },
});
