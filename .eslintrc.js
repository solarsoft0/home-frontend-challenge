module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.idea/*', '!.prettierrc'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        'react/no-unescaped-entities': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // todo customize to fit
        '@typescript-eslint/explicit-function-return-type': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc rules
      },
    },
  ],
}
