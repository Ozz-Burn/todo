module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
    ],
    plugins: [
        '@stylistic/js',
        '@kalimahapps/eslint-plugin-tailwind'
    ],
    rules: {
        "@kalimahapps/tailwind/sort": "warn",
        "@kalimahapps/tailwind/multiline": ["warn", {
            "maxLen": 80,
            "quotesOnNewLine": true
        }],
        "array-element-newline": ["error", {
            "ArrayExpression": "always",
            "ArrayPattern": { "minItems": 2 },
        }],
        "array-bracket-newline": ["error", {
            "multiline": true,
            "minItems": 2,
        }],
        "array-bracket-spacing": ["error", "always"],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 1
            },
            "multiline": {
                "max": 1
            }
        }],
        "vue/no-multiple-template-root": "off"
    },
    "overrides": [
        {
            "files": ["pages/**", "layouts/**"],
            "rules": {
                "vue/multi-word-component-names": "off"
            }

        }
    ]
}
