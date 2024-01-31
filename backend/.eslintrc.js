module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/newline-after-import': 'off',
    'import/first': 'off',
    'class-methods-use-this': 'off',
    strict: 'off',
    camelcase: 'off',
    'no-param-reassign': 'off',
    quotes: 'off',
    'max-len': 'off',
    'prefer-template': 'off',
  },
};
