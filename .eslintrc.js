module.exports = {
  globals: { defineProps: 'readonly' },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.lint.json'],
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'import',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-console': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/member-delimiter-style': 'error',
    'max-len': ['error', {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-spaced-func': 'off',
  },
};
