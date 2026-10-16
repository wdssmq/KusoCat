<script setup>
// 数据项
import data from 'virtual:dataset'

import { onMounted } from 'vue'

import elCateApp from './components/cate-app.vue'
import elCateDef from './components/cate.vue'
import elFooter from './components/footer.vue'
// 布局组件引入
import elHero from './components/hero.vue'
import elNotice from './components/notice.vue'
import elSide from './components/side.vue'

// 样式
import '../www/css/main.fix.css'

// opt 项提取
const nav = data['opt-nav']
const notice = data['opt-notice']
const ad = data['opt-ad']
const footer = data['opt-footer']

// 随机背景类
function rndBg() {
  const rnd = Math.round(Math.random()) + 1
  document.getElementsByTagName('body')[0].className = `bg${rnd}`
}

onMounted(() => {
  rndBg()
})

// console.log(data)
</script>

<template>
  <div id="container">
    <!-- 导航 -->
    <el-hero :nav="nav" />
    <!-- 公告 -->
    <el-notice :notice="notice" />
    <!-- cate-开头的内容 -->
    <template v-for="cate in data" :key="cate">
      <template v-if="cate.icon">
        <el-cate-app v-if="cate.id === 'app'" :cate="cate" />
        <el-cate-def v-else :cate="cate" />
        <template v-if="ad.items[cate.id]">
          <!-- 栏目分类中间广告横幅图片 -->
          <div class="banner">
            <a
              :href="ad.items[cate.id].href"
              target="_blank"
              :title="ad.items[cate.id].text"
            >
              <img :src="ad.items[cate.id].img" :alt="ad.items[cate.id].text">
            </a>
          </div>
          <!-- 栏目分类中间广告横幅图片 -->
        </template>
      </template>
    </template>
    <!-- 页脚 -->
    <el-footer :footer="footer" />
    <!-- 浮动侧栏 -->
    <el-side :sides="nav.sides" />
  </div>
</template>
