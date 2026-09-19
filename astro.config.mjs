// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://solar8.co.za',
    vite: {
        css: {
            transformer: 'postcss'
        },
        plugins: [tailwindcss()],
        optimizeDeps: {
            force: true
        }
    },
    integrations: [react()]
});
