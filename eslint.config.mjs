// eslint.config.mjs
import vuePlugin from 'eslint-plugin-vue'
import importPlugin from 'eslint-plugin-import'
import vueParser from 'vue-eslint-parser'

export default [
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      vue: vuePlugin,
      import: importPlugin,
    },
    rules: {
      'vue/no-v-html': 'off',
      'import/no-unresolved': 'error',
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal'],
          'newlines-between': 'always',
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        },
      },
    },
  },
]
