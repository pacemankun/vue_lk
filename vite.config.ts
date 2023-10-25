/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-11-14 19:18:22
 * @LastEditTime: 2023-10-25 22:39:22
 * @LastEditors: liukun liukun0227@163.com
 */
import path from 'path';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // resolve选项,用于配置 模块解析的行为:解析文件的扩展名、模块查找路径 如:
    // extensions：指定可以省略的文件扩展名，默认为 [".js", ".json", ".mjs", ".jsx", ".ts", ".tsx", ".vue"]
    // alias：配置模块的别名，用于简化模块的引用路径
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // fileURLToPath(path.join(__dirname, "src")),
    },
  },
});
// 从 node:url 模块中导入 fileURLToPath 和 URL 方法
// 通过使用 import.meta.url 获取当前配置文件的 URL
// 用 URL 构造函数创建一个新的 URL 对象，将当前模块的 URL 与 "./src" 相对路径组合起来
// 用 fileURLToPath 方法将 URL 对象转换为文件路径，并将其作为别名 "@" 的值

//  "@" 别名映射到了 import.meta.url 的所在目录下的 "./src" 目录。
// 这意味着在项目中可以使用 "@" 别名来引用 "./src" 目录下的模块或文件
