module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['node_modules', 'dist', '.husky'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'off',
  },
};
