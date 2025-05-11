// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    name: 'prettier-config',
    rules: prettierConfig.rules,
  }
);
