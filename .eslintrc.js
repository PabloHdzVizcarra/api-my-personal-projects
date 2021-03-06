module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest/globals": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
    },
    "plugins": [
        "jest"
    ]
};
