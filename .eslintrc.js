module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // Interface starts with I
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    // Do not allow unused vars
    '@typescript-eslint/no-unused-vars': 'error',
    // Warning throw on function return type explicit
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // indent 2 spaces
    "indent": ["error", 2, { "SwitchCase": 1, "VariableDeclarator": 1 }],
    // Shadowing is the process by which a local variable shares the same name as a variable in its containing scope
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error", { "allow": ["err", "callback"]}],
    // Disallow semicolons
    semi: ['error', 'never'],
  },
  ignorePatterns: ['.eslintrc.js']
};