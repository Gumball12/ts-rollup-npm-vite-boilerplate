module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    'no-restricted-syntax': ['error', 'ObjectPattern > RestElement'],
  },
  overrides: [
    {
      files: ['./__tests__/**'],
      rules: {
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
      },
    },
  ],
};
