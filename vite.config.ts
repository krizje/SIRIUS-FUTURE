import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint2';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    console.log(mode);
    
    return {
        plugins: [react(), eslint(), svgrPlugin()],

        css: {
             modules: {
                generateScopedName: mode === 'development' ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:8]',
            },
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },

        server: {
            port: 3000,
            strictPort: true,
            host: true,
        },

        resolve: {
            alias: {
                '@shared-types': path.resolve(__dirname, './src/types'),
                '@store': path.resolve(__dirname, './src/store'),
                '@api': path.resolve(__dirname, './src/api'),
                '@utils': path.resolve(__dirname, './src/utils'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@views': path.resolve(__dirname, './src/views'),
                '@layouts': path.resolve(__dirname, './src/layouts'),
                '@router': path.resolve(__dirname, './src/router'),
                '@containers': path.resolve(__dirname, './src/containers'),
                '@components': path.resolve(__dirname, './src/components'),
                '@styles': path.resolve(__dirname, './src/styles'),
                '@assets': path.resolve(__dirname, './src/assets'),
            },
        },
    };
});
