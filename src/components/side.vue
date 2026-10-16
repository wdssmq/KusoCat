<script setup>
// import { defineProps } from "vue";

defineProps({
  sides: Object,
})

// 延时
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
// 返回顶部
async function backTop() {
  const curTop = document.documentElement.scrollTop
  if (curTop > 0) {
    await sleep(17)
    document.documentElement.scrollTop = curTop - curTop / 4
    backTop()
  }
}
</script>

<template>
  <div class="side">
    <a
      v-for="item in sides"
      :key="item"
      :href="item.href"
      :title="item.title"
      :class="item.class"
      target="_blank"
    ><div class="side_div">{{ item.text }}</div></a>
    <a href="javascript:;" @click="backTop">
      <div id="gotop" class="side_div" />
    </a>
  </div>
</template>
