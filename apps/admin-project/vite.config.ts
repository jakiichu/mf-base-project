import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "http://localhost:5175",
    plugins: [
        tsconfigPaths(),
        react(),
        tailwindcss(),
        federation({
            name: "admin",
            filename: "remoteEntry.js",
            exposes: {
                "./router": "./src/main.tsx",
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
    server: { port: 5175, strictPort: true, cors: true },
    preview: { port: 5175 },
    build: { target: "chrome89" },
});
