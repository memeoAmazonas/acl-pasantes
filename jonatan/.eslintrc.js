module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': 'off',
    'react/prop-types': 'off',
    radix: 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    'no-unused-expressions': 'off',
  },
};
