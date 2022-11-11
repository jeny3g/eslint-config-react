# Jeny3g ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## 💻 Setup

1. Install the dependencies
```
npm i -D eslint @jeny3g/eslint-config-react
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

2. Make sure you have this 2 extensions installed
<img width="186" alt="image" src="https://user-images.githubusercontent.com/31122067/201343644-11bbf89b-e4ae-450e-92a8-ff1c572a36fc.png">

3. Make sure you are using the right extension in your settings.json
```
{
  "[typescript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
  "editor.formatOnType": true,
    "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  }
}
```
---

## 💻 Usage

1. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@jeny3g/eslint-config-react/react"
}
```

2. Enjoy 😊

---

Feito com :heart: por jeny3g. :handshake: Entre em [contato](https://www.linkedin.com/in/mirandajean)!




