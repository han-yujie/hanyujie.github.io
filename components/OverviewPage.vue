<script setup>
import ContentCard from './ContentCard.vue'
import PageHero from './PageHero.vue'

defineProps({
  titleLines: { type: Array, required: true },
  description: { type: String, required: true },
  visual: { type: String, default: 'system' },
  topics: { type: Array, default: () => [] },
  showHero: { type: Boolean, default: true },
  items: { type: Array, default: () => [] },
  sectionTitle: { type: String, default: '内容列表' },
  sectionDescription: { type: String, default: '' },
  emptyDescription: { type: String, default: '这个栏目还在整理中。你可以先阅读已发布的项目工作流。' }
})
</script>

<template>
  <div class="overview-page">
    <PageHero
      v-if="showHero"
      :title-lines="titleLines"
      :description="description"
      :visual="visual"
      :topics="topics"
    />
    <slot name="before-list" />
    <section class="overview-content">
      <header class="overview-content__head">
        <component :is="showHero ? 'h2' : 'h1'">{{ sectionTitle }}</component>
        <p v-if="sectionDescription">{{ sectionDescription }}</p>
      </header>
      <div class="overview-grid">
        <ContentCard v-for="item in items" :key="item.id || item.title" :item="item" />
      </div>
      <div v-if="!items.length" class="overview-empty" role="status">
        <span aria-hidden="true">···</span>
        <h2>内容整理中</h2>
        <p>{{ emptyDescription }}</p>
        <div class="overview-empty__actions"><a href="/aigc/">先看项目工作流 →</a><a href="/knowledge/">返回知识库</a></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.overview-page { width: min(var(--page-width), 100%); margin-inline: auto; }
.overview-content { margin-top: 0; }
.overview-content__head { max-width: 720px; margin-bottom: 30px; }
.overview-content__head :is(h1, h2) { margin: 0; font-size: 34px; line-height: 1.25; }
.overview-content__head p { margin: 12px 0 0; color: var(--text-sub); font-size: 15px; line-height: 1.8; }
.overview-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
.overview-empty { display: grid; min-height: 220px; place-content: center; gap: 10px; border: 1px dashed var(--border-soft); border-radius: var(--radius-card); background: var(--bg-soft); color: var(--text-muted); text-align: center; }
.overview-empty span { color: var(--brand-main); font: 700 20px/1 var(--font-mono); letter-spacing: .24em; }
.overview-empty h2 { margin: 0; color: var(--text-main); font: 600 24px/1.5 var(--font-display); }
.overview-empty p { max-width: 560px; margin: 0 auto; font-size: 15px; line-height: 1.8; }
.overview-empty { padding: 32px 24px; }
.overview-empty__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 28px; margin-top: 10px; }
.overview-empty__actions a { display: inline-flex; min-height: 44px; align-items: center; color: var(--brand-main); font-weight: 600; }
@media (max-width: 1100px) { .overview-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 640px) {
  .overview-content__head :is(h1, h2) { font-size: 28px; }
  .overview-grid { grid-template-columns: 1fr; }
}
</style>
