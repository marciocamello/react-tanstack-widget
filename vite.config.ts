import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  return {
    plugins: [
      tailwindcss(),
      react(),
      isProduction && dts({ rollupTypes: true }),
    ].filter(Boolean),
    build: {
      ...(isProduction ? {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'ReactTanstackWidget',
          fileName: (format) => `react-tanstack-widget.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom', '@tanstack/react-router', '@tanstack/react-query'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              '@tanstack/react-router': 'TanStackRouter',
              '@tanstack/react-query': 'TanStackQuery'
            }
          }
        }
      } : {}),
      sourcemap: true,
    },
    optimizeDeps: {
      include: ['@tanstack/react-router', '@tanstack/react-query']
    }
  }
});
