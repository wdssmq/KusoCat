<script setup>
// import { defineProps } from "vue";

defineProps({
  footer: Object,
})
</script>

<template>
  <!-- 底部说明及其他 -->
  <div id="footer" class="cate footer">
    <p>
      <span v-for="item in footer.items" :key="item" class="footer-link">
        <a :href="item.href" :title="item.text">{{ item.text }}</a>
      </span>
    </p>
    <p>{{ footer.desc }}</p>
  </div>
</template>
