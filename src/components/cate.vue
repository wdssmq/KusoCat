<script setup>
// import { defineProps } from "vue";

defineProps({
  cate: Object,
})
</script>

<template>
  <div :id="`${cate.id}`" class="cate">
    <!-- 分类标题 -->
    <div class="cate_name" :class="cate.color">
      <p>
        <i class="fa" :class="cate.icon" aria-hidden="true" />
        {{ cate.title }}
      </p>
    </div>
    <!-- 分类下内容列表 -->
    <ul class="cate_list">
      <li v-for="item in cate.items" :key="item">
        <a
          :href="item.href"
          :title="item.text"
          :class="item.class"
          target="_blank"
        >{{ item.text }}</a>
        <b v-if="item.tag">{{ item.tag }}</b>
      </li>
    </ul>
    <br class="clear">
  </div>
</template>
