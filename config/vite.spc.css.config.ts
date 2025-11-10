import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, '../src/styles/spc.scss'),
      formats: ['es'],
      fileName: () => 'spc'
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) return 'spc.css';
          return assetInfo.name || '[name]';
        }
      }
    },
    sourcemap: true,
    copyPublicDir: false,
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: false,
    cssCodeSplit: false,
    minify: false
  }
});
