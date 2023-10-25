<!--
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-11-14 19:18:22
 * @LastEditTime: 2023-10-25 22:44:47
 * @LastEditors: liukun liukun0227@163.com
-->
<script setup lang="ts">
import { ref, defineAsyncComponent, watch } from 'vue';
import type { Ref } from 'vue';
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue';
import gsap from 'gsap'; // 在需要动画的组件 顶部引入

// import AsyncComp1 from "@/components/AsyncComp1.vue";

const AsyncComp1 = defineAsyncComponent(
  () => import('@/components/AsyncComp1.vue'),
);

const objectRef = ref({ count: 0 });
const stringRef = ref('nihao');

const number = ref(0);
const tweened = ref({ numberlk: 0 });

watch(number, newCount => {
  console.info('---', newCount);
  gsap.to(tweened.value, { numberlk: newCount, duration: 1.2 });
});

setTimeout(() => {
  stringRef.value = '大家好';
}, 3000);
let n = objectRef.value.count; // 将响应式对象的属性赋值至本地变量时
n++;
console.info(n, objectRef.value.count);

const props = defineProps<{
  name2?: Ref<string>;
  count?: number;
}>();

// const cc: Number = new Number(34);
// console.log(cc);

const tt1: object = {};
console.info(tt1);

const tt2: Array<string> = [];
console.info(tt2);

const tt3: Set<string> = new Set();
console.info(tt3);

const tt4: Map<string, symbol> = new Map();
console.info(tt4);
tt4.set('65', Symbol());

console.info('--------', props);

// lai================lai
const year = ref<string | number>('2020');
year.value = 2020; // 成功！
</script>

<template>
  <div class="about">
    <div class="xixi" data-animalType="鸟类">鸟类🐦</div>
    <progress />
    <details>
      <summary>全部功能</summary>
      <p>菜单项1</p>
      <p>菜单项2</p>
      <p>菜单项3</p>
    </details>
    <el-button type="primary">Primary</el-button>
    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
    <el-button type="success" size="small">xixi</el-button>
    <el-button type="warning" size="large">haha</el-button>
    <el-button type="primary" size="default">ddd</el-button>

    <h1>This is an about page</h1>
    <Suspense>
      <AsyncComp1 :pp="objectRef" :yy="stringRef" />
      <template #fallback> loading.... </template>
    </Suspense>
    <input v-model.number="number" />
    <mark>{{ ~~tweened.numberlk }}</mark>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
