module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },

  settings: {
    react: {
      version: "latest",
    },
  },

  rules: {
    "linebreak-style": "off", // Неправильно работает в Windows.
    "implicit-arrow-linebreak": "off",
    "arrow-parens": "off", // Несовместимо с prettier
    "object-curly-newline": "off", // Несовместимо с prettier
    "arrow-body-style": "off",
    "function-paren-newline": "off", // Несовместимо с prettier
    "space-before-function-paren": "off", // Несовместимо с prettier
    "class-methods-use-this": "off",
    "operator-linebreak": "off",
    "max-classes-per-file": "off",
    "consistent-return": "off",
    "prefer-const": "warn",
    "dot-notation": "warn",
    "array-callback-return": "warn",
    "guard-for-in": "warn",
    "prefer-template": "warn",
    "new-cap": "warn",
    "prefer-object-spread": "warn",
    "prefer-arrow-callback": "off",
    "comma-dangle": "off",
    "lines-between-class-members": "off", // не позволяет группировать поля в классах
    "prefer-destructuring": "off",
    "wrap-iife": "off",

    // NO-RULES
    "no-mixed-operators": "off", // Несовместимо с prettier
    "no-continue": "off",
    "no-plusplus": "off",
    "no-prototype-builtins": "off",
    "no-underscore-dangle": "off",
    "no-bitwise": "off",
    "no-unused-expressions": "error",
    "no-useless-escape": "warn",
    "no-restricted-syntax": "warn",
    "no-confusing-arrow": "error",
    "no-return-assign": "warn",
    "no-await-in-loop": "warn",
    "no-use-before-define": "off", // правило присутствует в ts
    "no-nested-ternary": "error",
    "no-void": "off",
    "no-useless-return": "off",
    "no-console": ["warn", { allow: ["error", "info"] }],
    "no-shadow": "off",
    "no-param-reassign": "off",

    // FORMATTERS
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        jsxSingleQuote: false,
        bracketSameLine: false,
        arrowParens: "avoid",
        semi: true,
        printWidth: 100,
        endOfLine: "auto",
      },
    ],
  },

  overrides: [
    {
      files: ["*.js"],
      plugins: ["prettier"],
      extends: ["eslint:recommended", "plugin:prettier/recommended"],
    },
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      globals: {
        JSX: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: ".",
        project: "tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
      },

      plugins: [
        "@typescript-eslint",
        "react-hooks",
        "react",
        "sort-imports-es6-autofix",
        "unused-imports",
      ],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        // TYPESCRIPT
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        /* запрещает использовать namspaces */
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: "interface",
            format: ["PascalCase"],
          },
        ],

        // REACT
        "react/no-deprecated": "off",
        "react/static-property-placement": "off",
        "react/forbid-prop-types": "off",
        "react/require-default-props": [1, { ignoreFunctionalComponents: true }],
        "react/no-unused-prop-types": "off",
        "react/no-find-dom-node": "off",
        "react/no-did-mount-set-state": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/no-this-in-sfc": "warn",
        "react/prop-types": "off",
        "react/jsx-boolean-value": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-curly-newline": "off",
        "react/no-array-index-key": "off",
        "react/jsx-wrap-multilines": "off",
        "react/prefer-stateless-function": "off",
        "react/no-children-prop": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-danger": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/display-name": "warn",
        "react/jsx-key": "warn",
        "react/jsx-pascal-case": [2, { allowNamespace: true, ignore: ["UI", "samoletUI", "antD"] }],

        // REACT-HOOKS
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",

        // UNUSED-IMPORTS
        "unused-imports/no-unused-imports": "warn",
        "no-unused-vars": "off", // конфликтует с правилом ниже
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],

        // FORMATTERS
        radix: "warn",
        camelcase: "off", // deprecated use @typescript-eslint/naming-convention instead
        strict: "warn",
        quotes: "off",
        eqeqeq: "warn",
        indent: "off",

        "sort-imports-es6-autofix/sort-imports-es6": [
          2,
          {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          },
        ],
        "id-length": "off",
      },
    },
  ],
};
