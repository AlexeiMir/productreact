module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension':
        [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': ['error', { ignoreComments: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};