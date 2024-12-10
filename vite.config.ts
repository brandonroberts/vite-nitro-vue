import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nitro from '@analogjs/vite-plugin-nitro';

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  build: {
    target: ['es2020'],
    outDir: 'dist/client',
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    isSsrBuild ? [] : vue(),
    nitro({
      ssr: true,
      entryServer: `${__dirname}/src/main.server.ts`,
    }, {
      output: {
        dir: '.output',
        publicDir: '.output/public'
      }
    }),
  ],
}));
