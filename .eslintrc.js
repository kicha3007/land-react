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
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'linebreak-style': ['error', 'unix'],
    'eol-last': 'off',
    // 'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
