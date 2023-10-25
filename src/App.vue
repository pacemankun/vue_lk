<!--
 * @Descripttion: TOSS小熊
 * @version: 1.0.0
 * @Author: liukun
 * @Date: 2022-11-14 19:18:22
 * @LastEditTime: 2023-10-25 22:54:52
 * @LastEditors: liukun liukun0227@163.com
-->

<script setup lang="ts">
import type { Ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { getCurrentInstance, reactive, ref, computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
function ff2() {
  return 'href';
}
const obj = ref({ aa: 90 });
function callSome(t: Ref<object>) {
  console.info(t.value);
  t.value = { bb: 100 };
}
callSome(obj);
console.info(obj.value);
const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ');
  },
});
console.info(fullName.value);
fullName.value = 'liu kun';
console.info(fullName.value);
const timelk = ref(new Date());
const now1 = computed(() => timelk.value);
const classObject = ref({ active: true, 'text-danger': false });
console.info(ref(null).value);
const baseStyles = reactive({ color: 'red', fontSize: '13px' });
const overridingStyles = ref({ display: 'flex', justifyContent: 'flex-start' });
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
      :="{ id: 'yui', class: classObject }"
      :style="overridingStyles"
    />
    <a :[ff2()]="'www'">我呀</a>
    <div class="wrapper">
      <HelloWorld msg="You did !" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
