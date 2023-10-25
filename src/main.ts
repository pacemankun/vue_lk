/*
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2023-10-17 23:25:16
 * @LastEditTime: 2023-10-25 22:27:40
 * @LastEditors: liukun liukun0227@163.com
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.errorHandler = err => {
  console.info(err)
  /* 处理错误 */
}
app.config.globalProperties = { ...window, console, aatitle: '腻子粉' }

app.use(createPinia())
app.use(router)

app.mount('#app')
