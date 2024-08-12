module.exports = {
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:import/typescript',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-native', 'import'],
  rules: {
    'import/extensions': [0, 'always', {ignorePackages: true}],
    'import/namespace': [0, {allowComputed: false}],
    'import/order': [1, {'newlines-between': 'always'}],
    'linebreak-style': 'off',
    'prettier/prettier': ['error', {endOfLine: 'auto'}, {usePrettierrc: true}],
    'react-native/no-color-literals': 1,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 0,
    'react-native/no-unused-styles': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      {ignoreClassNames: false, ignoreStyleProperties: false},
    ],
    'react-native/split-platform-components': 2,
    'react/display-name': [0, {ignoreTranspilerName: true}],
    'react/no-unescaped-entities': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {caseSensitive: true, minKeys: 2, natural: false},
    ],
    'sort-vars': ['error'],
  },
  settings: {
    'import/ignore': ['react-native'],
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
