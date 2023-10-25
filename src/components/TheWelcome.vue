<script lang="ts">
export default { inheritAttrs: false }
</script>
<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import {
  useAttrs,
  watch,
  ref,
  inject,
  reactive,
  computed,
  onMounted,
} from 'vue'
import type { Ref } from 'vue'

const props = defineProps(['aa', 'bb', 'pp', 'modelValue'])
const emits = defineEmits(['update:modelValue', 'sonEvent'])

console.info('----------你好呀', props.modelValue)
console.info('dndn你好')
// props.aa.title = 30;
const lk = ref({ ...props.aa })
lk.value.title = 777
// console.info(props.aa, lk);
// props.aa.title = 40;
console.info(props.bb)
let digit = props.bb
console.info(++digit, props.bb)

//  12323267371-----12323267371
const attrs = useAttrs()
// attrs.ff.title = 33;
console.info(attrs.ff)
const textObj = ref({ aa: 789 })
console.info(textObj)

console.info(textObj, textObj.value)
watch([() => textObj.value.aa, () => attrs.class], newv => {
  console.info('变化', newv)
})

let x = ref<{ a: number } | number>({ a: 90 }),
  y = reactive({ a: 90 })
watch(
  x,
  (newS, oldS) => {
    console.log(newS)
  },
  { deep: true },
)

setTimeout(() => {
  x.value = 120
}, 2000)

const t1 = inject<Ref<{ title: number }>>('t1')
const t2 = inject('t2')
const t3 = inject('t3')
// console.warn(t3);

// console.warn(t2);
// console.warn(t2.value);

console.info(t1!.value.title)
console.info((t1 as Ref<{ title: number }>).value.title)

t2.value = 100
defineExpose({ a: ref('xixi') })
const tt1 = { a: ref(90) }
const { a: f1 } = tt1
f1.value = 100
console.info(tt1)
const kun1 = { a: reactive({ ff: 100 }) }
let b = kun1.a
b = { cc: 200 }
console.info(kun1)
emits('sonEvent', 200)
console.info()

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const useCountdown = (endTime: string) => {
  const timeLeft = ref<number>(0)

  const countdown: Ref<Countdown> = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  let timer: number

  const year = ref(2020)

  const calculateTimeLeft = () => {
    const endTimeMs = new Date(endTime).getTime()
    const now = new Date().getTime()
    timeLeft.value = endTimeMs - now
    // console.info("----------------", timeLeft.value);
    if (timeLeft.value <= 0) {
      clearInterval(timer)
    }

    countdown.value.days = Math.floor(timeLeft.value / (1000 * 60 * 60 * 24))

    countdown.value.hours = Math.floor(
      (timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )

    countdown.value.minutes = Math.floor(
      (timeLeft.value % (1000 * 60 * 60)) / (1000 * 60),
    )
    countdown.value.seconds = Math.floor((timeLeft.value % (1000 * 60)) / 1000)
    // console.info("----------------", countdown.value);
  }
  onMounted(() => {
    timer = setInterval(calculateTimeLeft, 1000)
  })

  return {
    countdown,
  }
}

const { countdown } = useCountdown('2023-12-31')
console.info(countdown.value)
</script>

<template>
  <div>
    <p>Days: {{ countdown.days }}</p>
    <p>Hours: {{ countdown.hours }}</p>
    <p>Minutes: {{ countdown.minutes }}</p>
    <p>Seconds: {{ countdown.seconds }}</p>
  </div>
  <input
    type="text"
    :value="props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
  <button @click="$emit('sonEvent', 100)">点我</button>
  {{ props.bb }}
  {{ lk.title + 3 }}
  <mark>{{ $attrs }}</mark>
  <h1 :class="$attrs.class">1</h1>
  <h2 :id="$attrs.id">2</h2>
  <h3 :style="$attrs.style">3</h3>
  <strong v-bind="$attrs">全部</strong>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener"
      >official documentation</a
    >
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      rel="noopener"
      >Vite</a
    >. The recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"
      >VSCode</a
    >
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
      rel="noopener"
      >Volar</a
    >. If you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
    and
    <a href="https://on.cypress.io/component" target="_blank"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
      >Vue Router</a
    >,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
      >Vue Test Utils</a
    >, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
      >Vue Dev Tools</a
    >. If you need more resources, we suggest paying
    <a
      href="https://github.com/vuejs/awesome-vue"
      target="_blank"
      rel="noopener"
      >Awesome Vue</a
    >
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a
    >, our official Discord server, or
    <a
      href="https://stackoverflow.com/questions/tagged/vue.js"
      target="_blank"
      rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener"
      >our mailing list</a
    >
    and follow the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
      >@vuejs</a
    >
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
      >becoming a sponsor</a
    >.
  </WelcomeItem>
</template>
