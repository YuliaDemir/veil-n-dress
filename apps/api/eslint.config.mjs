import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['dist/**', 'coverage/**'],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  perfectionist.configs['recommended-natural'],

  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
]);