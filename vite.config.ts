import * as path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleInject from 'vite-plugin-style-inject'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [
    react(),
    styleInject(),
    dts({
      entryRoot: 'src/render',
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.json',
    }),
  ]
  const resolve = {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
  return mode === "lib" ? {
    plugins,
    resolve,
    build: {
      lib: {
        entry: 'src/render/index.ts',
        name: 'index',
        fileName: 'index',
        formats: ['es']
      },
      rollupOptions: {
        external: [],
      },
    },
  } : {
    plugins,
    resolve,
    base: mode === "page" ? "markdown-diff-render" : "/",
    build: {
      outDir: 'page',
      sourcemap: false
    },
    rollupOptions: {
      input: path.resolve(__dirname, 'src/views/main.tsx'),
    }
  }
})
