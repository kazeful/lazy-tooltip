/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  const isDev = mode === 'development'

  let build = {}
  if (isProd) {
    build = {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'lazy-tooltip',
        fileName: 'index',
        formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        /**
         * make sure to externalize deps that shouldn't be bundled into your library
         */
        external: [
          'vue',
          'vue-demi',
        ],
        output: {
          /**
           * Provide global variables to use in the UMD build for externalized deps
           */
          globals: {
            'vue': 'Vue',
            'vue-demi': 'VueDemi',
          },
        },
      },
    }
  }

  let optimizeDeps = {}
  if (isDev) {
    /**
     * dependency pre-bundling
     */
    optimizeDeps = {
      exclude: ['vue-demi'],
    }
  }

  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      VueMacros({
        plugins: {
          vue: Vue(),
        },
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          // 'vue/macros',
          '@vueuse/core',
        ],
        dts: true,
        dirs: [
          './src/composables',
        ],
        vueTemplate: true,
      }),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
      }),

      // https://github.com/antfu/unocss
      // see uno.config.ts for config
      UnoCSS({
        // mode: 'vue-scoped',
      }),
    ],
    optimizeDeps,
    build,
    test: {
      environment: 'jsdom',
      deps: {
        inline: [
          '@vue',
          'vue-demi',
        ],
      },
      coverage: {
        reporter: [
          'text',
          'text-summary',
          'lcov',
        ],
      },
    },
  }
})
