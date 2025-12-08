import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import nextConfig from 'eslint-config-next/core-web-vitals';

// Flat config equivalent of the requested .eslintrc JSON
export default [
  // Next.js flat config (includes TypeScript + core-web-vitals + ignores)
  ...nextConfig,

  // TypeScript ESLint flat presets
  ...tseslint.configs.recommended,

  // Project rules
  {
    name: 'app-rules',
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        browser: 'readonly',
        es6: 'readonly',
        node: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // Linting config for this config file itself
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
];
