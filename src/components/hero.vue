<script setup>
// import { defineProps } from "vue";

defineProps({
  nav: Object,
})
</script>

<template>
  <!-- 头部导航 -->
  <div id="top" class="nav">
    <ul>
      <li v-for="item in nav.items" :key="item">
        <a :href="item.href" :title="item.text" :class="item.class">{{
          item.text
        }}</a>
      </li>
    </ul>
    <br class="clear">
  </div>
</template>
