module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', 'react-native', 'unused-imports'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 1,
    'react/no-deprecated': 2,
    'react/no-this-in-sfc': 2,
    'react/prefer-stateless-function': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'no-unused-vars': 'off',
    'no-undef': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
