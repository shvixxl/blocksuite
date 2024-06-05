import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    target: 'es2018',
  },
  build: {
    target: 'ES2022',
    lib: {
      entry: ['./src/index.ts'],
      name: 'BlockSuite',
      formats: ['umd'],
    },
  },
  define: {
    process: {
      env: {},
    },
  },
});
