<!--
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2023-02-11 18:42:54
 * @LastEditTime: 2023-03-05 11:13:49
 * @LastEditors: liukun liukun0227@163.com
-->
<template>
  <div>我是异步组件,{{ lk }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import type { Ref } from "vue";

const props = defineProps<{
  pp: {
    count: number
  }
  yy: string
}>()

console.info(props.pp.count)
console.info(props.yy)
// setInterval(() => {
//   console.info(props.yy);
// }, 1000);
// setTimeout(() => {
//   console.info(props?.count);
// }, 2500);

const lk = ref('32')
lk.value = await new Promise(resolve => {
  setTimeout(() => {
    resolve('我加载好了')
  }, 2000)
})
</script>

<style lang="scss" scoped></style>
