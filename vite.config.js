import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.js'), // Updated to src/
      name: 'ComponentLibrary',
      fileName: (format) => `component-library.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes',
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
});