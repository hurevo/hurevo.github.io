import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import { tanstackRouter } from '@tanstack/router-vite-plugin'
import { paraglideVitePlugin } from "@inlang/paraglide-js"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tanstackRouter(),
        react(),
        tailwindcss(),
        paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/paraglide",
            strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Vendor libraries
                    'vendor-react': ['react', 'react-dom'],
                    'vendor-router': ['@tanstack/react-router'],
                    'vendor-ui': ['@base-ui/react', 'class-variance-authority', 'clsx', 'tailwind-merge'],
                    'vendor-motion': ['motion/react'],
                    'vendor-icons': ['lucide-react'],
                    'vendor-paraglide': ['@inlang/paraglide-js'],
                },
            },
        },
        chunkSizeWarningLimit: 600,
    },
})
