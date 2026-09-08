import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import perfectionist from 'eslint-plugin-perfectionist';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  perfectionist.configs['recommended-natural'],

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;