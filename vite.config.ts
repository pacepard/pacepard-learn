import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(rootDir, 'src'),
        },
        dedupe: ['react', 'react-dom'],
    },
    server: {
        port: 5402,
        strictPort: true,
        fs: {
            allow: [rootDir, path.resolve(rootDir, '../pacepard-ui')],
        },
    },
    preview: {
        port: 5402,
        strictPort: true,
    },
});
