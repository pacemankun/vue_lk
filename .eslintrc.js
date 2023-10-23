/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2023-10-17 23:32:05
 * @LastEditTime: 2023-10-23 22:57:23
 * @LastEditors: liukun liukun0227@163.com
 */

module.exports = {
  // 代码运行的环境
  env: {
    browser: true,
    es2021: true,
  },
  // 扩展配置
  extends: [
    'eslint:recommended', // ESLint推荐的规则,用于检查js代码的质量
    'plugin:@typescript-eslint/recommended', // TypeScript项目的推荐规则
    'plugin:vue/vue3-essential', // Vue3 项目的推荐规则
  ],
  // 用于增强 ESLint 功能的插件
  plugins: ['@typescript-eslint', 'vue'],

  // 指定 ESLint 如何解析代码
  parserOptions: {
    ecmaVersion: 'latest', // 用最高es版本解析代码
    sourceType: 'module', // 代码使用的模块系统是 ESM
    parser: '@typescript-eslint/parser', // 指定用TS解析器,来分析 TypeScript 代码
  },
  // 具体规则-空则使用默认规则
  rules: {
    'no-console': 'warn',
    // "no-console": "error",
    'no-var': 1,

    'no-unused-vars': 'off', // you must disable the base rule, as it can report incorrect errors
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  // 特定文件(通常是自身配置文件)的配置
  overrides: [
    {
      env: {
        // 定义配置的运行环境
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
        'lint-staged.config.{js,cjs}',
        'commitlint.config.{js,cjs}',
      ], // 特定文件
      parserOptions: {
        sourceType: 'script',
        // 表示代码是纯粹的js脚本文件,没有使用任何模块化系统
        // 这在处理配置文件时很有用，因为配置文件通常不包含模块化的导入和导出语句
      },
    },
  ],
}
