module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "eslint:recommended",
        'plugin:sonarjs/recommended',
    ],
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
        },
        // override "simple-import-sort" config
        {
            "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
            "rules": {
                "simple-import-sort/imports": [
                    "error",
                    {
                        "groups": [
                            // Packages `react` related packages come first.
                            ["^react", "^@?\\w"],
                            // Internal packages.
                            ["^(@|components)(/.*|$)"],
                            // Side effect imports.
                            ["^\\u0000"],
                            // Parent imports. Put `..` last.
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                            // Style imports.
                            ["^.+\\.?(css)$"]
                        ]
                    }
                ]
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        'import',
        "unused-imports",
        "simple-import-sort",
        "jsx-a11y",
        'sonarjs',
        "react-hooks"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type":'off',
        "@typescript-eslint/no-non-null-assertion":'off',
        "@typescript-eslint/no-namespace":'off',
        "@typescript-eslint/no-misused-promises":'off',
        'unused-imports/no-unused-imports': 'error',
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "react/jsx-indent": ["error", 2],
        'react/static-property-placement': 'off',
        'react/forbid-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'prefer-destructuring': 'off',
        'wrap-iife': 'off',
        'spaced-comment': 'off',
        'react/no-find-dom-node': 'off',
        'react/no-did-mount-set-state': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-this-in-sfc': 'warn',
        'react/prop-types': 'off',
        'react/jsx-boolean-value': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-curly-newline': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/prefer-stateless-function': 'off',
        'react/no-children-prop': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-danger': 'off',
        'react/function-component-definition': 'off',
        "react/jsx-closing-tag-location": "error",
        'react/jsx-pascal-case': [2, { ignore: ['UI', 'antd'] }],
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["to"]
        }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/no-relative-packages': 'off',
        'import/no-cycle': 'off',
        'import/no-mutable-exports': 'warn',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/prefer-immediate-return': 'off',
        "sonarjs/cognitive-complexity": "error",
        "sonarjs/no-identical-expressions": "error"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
