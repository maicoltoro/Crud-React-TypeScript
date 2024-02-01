module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project" : "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        'react/prop-types': 'off',
        "react/react-in-jsx-scope":"off"
    }
}
