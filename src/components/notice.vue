<script setup>
// import { defineProps } from "vue";

defineProps({
  notice: Object,
})
</script>

<template>
  <!-- 头部导航下的网站公告 -->
  <p v-for="item in notice.items" :key="item" class="notice">
    <span class="notice-led">网站公告 <i class="fa fa-bullhorn" /></span>
    <span v-html="item.html" />
    <template v-if="item.html2">
      <span class="notice-led">网站公告 <i class="fa fa-bullhorn" /></span>
      <span v-html="item.html2" />
    </template>
  </p>
</template>
