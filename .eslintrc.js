/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2023-10-17 23:32:05
 * @LastEditTime: 2023-10-18 00:04:12
 * @LastEditors: liukun liukun0227@163.com
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "no-console": "warn",
    // "no-console": "error",
    "no-var": 1,
  },
};
