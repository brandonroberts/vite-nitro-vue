import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nitro from '@analogjs/vite-plugin-nitro';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nitro({
      ssr: true,
      entryServer: 'src/main.server.ts'
    })
  ],
});
