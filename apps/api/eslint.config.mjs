import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import perfectionist from 'eslint-plugin-perfectionist';

export default defineConfig([
    {
        ignores: ['dist/**', 'node_modules/**'],
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