import eslint from '@eslint/js';
import vitest from 'eslint-plugin-vitest';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  // typescript config and overrides
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        { default: 'array-simple', readonly: 'array-simple' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true, allowHigherOrderFunctions: true },
      ],
      'no-console': 'off',
      'no-unused-vars': 'off', // needed for the eslint-typescript no unused variable rule to work.
      curly: 'error',
    },
  },
  // test lint config and overrides
  {
    files: ['src/**/__tests__/*.test.ts'],
    plugins: { vitest },
    rules: vitest.configs.recommended.rules,
  },
  // files to ignore
  { ignores: ['dist/*'] },
);
