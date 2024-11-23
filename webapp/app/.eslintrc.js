module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard', 'plugin:react/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        // 'space-before-function-paren': ['error', 'never']
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ]
    }
}
