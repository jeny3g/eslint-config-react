module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "jsx-a11y",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
        endOfLine: "auto",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
