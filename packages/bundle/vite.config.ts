import { defineConfig } from 'vite';

export default defineConfig({
  build: {
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
