module.exports = {
    extends: [
        'eslint:recommended', 
        'plugin:@typescript-eslint/recommended',
        '@polyfill/eslint-config/react',
        '@polyfill/eslint-config/node',

    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules:{
        'react-hooks/exhaustive-deps': 'warn',
        'no-plusplus': 'warn',
        'react/no-unstable-nested-components': 'warn',
        'array-callback-return': 'warn',
        'react/no-array-index-key': 'warn',
        'eslint-comments/no-unlimited-disable': 'warn',
        'react/no-unused-prop-types': 'warn',
        '@typescript-eslint/indent': 'warn',
        'react/jsx-no-constructed-context-values': 'warn',
        'import/no-unresolved': 'warn',
        'global-require': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        'no-restricted-globals': 'warn',
        'implicit-arrow-linebreak': 'warn',
        'prefer-regex-literals': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'operator-linebreak': 'warn',
        },

    root: true,
  };