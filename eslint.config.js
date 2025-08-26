const { defineConfig, globalIgnores } = require('eslint/config');
const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const jsxA11Y = require('eslint-plugin-jsx-a11y');
const prettier = require('eslint-plugin-prettier');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    ignores: ['node_modules', 'build', 'dist', '*.test.tsx', '*.snap'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptEslint,
      'jsx-a11y': jsxA11Y,
      prettier,
    },
    extends: compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended'
    ),
    rules: {
      'prettier/prettier': 'warn',
      'no-debugger': 'warn',
      eqeqeq: ['warn', 'smart'],
      'react/no-children-prop': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      'react/self-closing-comp': 'warn',
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  globalIgnores(['**/scripts/', '**/node_modules/', '**/build/', '**/dist/', '**/*.test.tsx', '**/*.snap']),
]);
