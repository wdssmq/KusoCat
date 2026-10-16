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
    <div class="navi">
      <div v-for="item in cate.items" :key="item" class="appico">
        <a :href="item.href" target="_blank">
          <div class="naicon btn btn-raised" :title="item.text">
            <img :src="item.logo">
          </div>
        </a>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
