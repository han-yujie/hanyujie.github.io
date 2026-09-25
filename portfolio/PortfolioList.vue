<script setup>
import OverviewPage from '../components/OverviewPage.vue'
import { data as contentCatalog } from '../.shared/content.data.mjs'
import { publishedContent } from '../.shared/contentClient.js'

const items = publishedContent(contentCatalog.cases)
  .slice()
  .sort((left, right) => String(right.createdAt || '').localeCompare(String(left.createdAt || '')))
  .map((item) => ({
  id: item.id,
  title: item.title,
  summary: item.desc,
  link: item.link,
  status: item.status,
  tags: item.tags,
  image: item.cover,
  alt: item.coverAlt,
  imageSubject: `${item.title}的项目主视觉或最终交付成果`,
  imageFilename: item.imageFilename,
  eyebrow: '项目与作品',
  cta: '查看完整作品'
}))
</script>

<template>
  <OverviewPage
    :title-lines="['作品集']"
    description="按电商、3D 渲染、品牌系统、展会视觉等方向浏览作品合集。"
    visual="cases"
    :topics="['电商视觉', '展会视觉', '品牌系统', '3D 渲染', '转化设计']"
    :show-hero="false"
    :items="items"
    section-title="作品集"
    section-description="品牌设计、工业产品与电商视觉。进入项目，查看完整作品和交付内容。"
  />
</template>
