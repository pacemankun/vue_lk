<!--
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-11-14 19:18:22
 * @LastEditTime: 2023-10-25 23:00:41
 * @LastEditors: liukun liukun0227@163.com
-->
<script setup lang="ts">
import { ref, reactive, provide, onMounted, inject } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import type { Ref } from 'vue';

const tte = ref('fdfdf');
const obj1 = ref({ title: 100 }); // aa
const objb = ref({ title: 100 }); // aa
const object2 = ref(100); // bb
console.info(obj1);
const obj2 = reactive({ title: ref(100) });

const object = ref({ title: 120 }); //

console.info(obj1);
function bb(ent: string) {
  console.info('我是爹', ent);
  console.info();
}
const t1 = ref({ title: 190 });
const t2 = ref(90);
const t3 = 90;
provide('t1', t1);
provide('t2', t2);
provide('t3', t3);
onMounted(() => {
  console.info(testlk.value?.a);
});
console.info(obj2.title + 9);
const testlk = ref<InstanceType<typeof TheWelcome> | null>(null); //
const testlk2 = ref<HTMLInputElement | null>(null); //
const testlk3 = inject<Ref<string>>('nihao');
const testlk4 = defineProps<{ aa: string }>();

let sonData1 = ref('hello');
// setInterval(() => {
//   console.info("哥哥哥", obj1.value);
// }, 2000);
console.info();
console.info(); //   wedwew
console.info();
</script>

<template>
  <main>
    <h1>{{ object.title + 2 }}</h1>
    <h6>{{ testlk ? testlk.a + 90 : '无措' }}</h6>
    <h2>{{ obj2.title + 9 }}</h2>
    <h1>mumu:{{ objb }}</h1>

    <hr />
    <h1>die:{{ t1 }}</h1>
    <h1>son:{{ t2 }}</h1>
    <hr />

    <h1>die:{{ obj1.title }}</h1>
    <h1>son:{{ object2 }}</h1>
    <mark>{{ sonData1 }}</mark>
    <!-- <input
      type="text"
      :ref="
        (el) => {
          console.info(333);
          el.value = 123;
        }
      "
    /> -->

    <TheWelcome
      ref="testlk"
      :ff="objb"
      :pp="obj2.title + 9"
      :pp2="obj1.title + 1"
      :aa="obj1"
      :bb="object2"
      :vv-yui="23"
      class="haha"
      id="yui"
      style="color: aqua"
      @sonEvent="bb"
      v-model="sonData1"
    />
  </main>
</template>
