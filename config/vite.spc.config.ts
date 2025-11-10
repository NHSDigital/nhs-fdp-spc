import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { existsSync } from 'fs';
import dts from 'vite-plugin-dts';

// Ignore SCSS during JS lib build
const ignoreScssPlugin = (): Plugin => ({
  name: 'spc-ignore-scss',
  load(id) {
    if (id.endsWith('.scss')) return { code: '' };
  }
});

// Resolve '@' alias: in monorepo use root src; in split use local src
const monorepoSrc = resolve(__dirname, '../../../src');
const localSrc = resolve(__dirname, '../src');
const atAlias = existsSync(monorepoSrc) ? monorepoSrc : localSrc;

export default defineConfig({
  plugins: [
    ignoreScssPlugin(),
    react({ jsxRuntime: 'classic' }),
    dts({
      entryRoot: resolve(__dirname, '../src'),
      outDir: resolve(__dirname, '../dist'),
      tsconfigPath: resolve(__dirname, '../tsconfig.json'),
      copyDtsFiles: true
    })
  ],
  resolve: {
    alias: {
      '@': atAlias
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, '../src/index.ts'),
        engine: resolve(__dirname, '../src/engine/index.ts'),
        icons: resolve(__dirname, '../src/icons/index.ts')
      },
      formats: ['es'],
      fileName: (_format, entryName) => {
        if (entryName === 'index') return 'index.esm.js';
        return `${entryName}/index.js`;
      }
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime'
      ]
    },
    sourcemap: true,
    copyPublicDir: false,
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true
  }
});
