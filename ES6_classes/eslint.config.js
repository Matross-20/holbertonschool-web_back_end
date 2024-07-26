import jest from 'eslint-plugin-jest';

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
];

