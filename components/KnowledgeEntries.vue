<script setup>
import { PhNotebook, PhListChecks, PhToolbox, PhArrowUpRight } from '@phosphor-icons/vue'
import { data as catalog } from '../.shared/content.data.mjs'
import { publishedContent } from '../.shared/contentClient.js'
import categories from '../.shared/content/knowledgeHubCards.json'
const sources = {
  '/knowledge/learning-observation': { items: catalog.learning, icon: PhNotebook },
  '/knowledge/methods': { items: catalog.methods, icon: PhListChecks },
  '/knowledge/resources': { items: catalog.resources, icon: PhToolbox }
}
const entries = categories.items.map(item => ({ ...item,
  count: publishedContent(sources[item.link]?.items || []).length,
  icon: sources[item.link]?.icon || PhNotebook
}))
</script>
<template>
  <div class="knowledge-entries">
    <a v-for="entry in entries" :key="entry.id" :href="entry.link" class="knowledge-entry">
      <div class="knowledge-entry__top"><component :is="entry.icon" :size="28" aria-hidden="true" /><span>{{ entry.count ? `${entry.count} 篇已发布` : '整理中 · 暂无公开内容' }}</span></div>
      <h2>{{ entry.title }}</h2>
      <p>{{ entry.description }}</p>
      <span class="knowledge-entry__link">{{ entry.count ? '浏览内容' : '了解栏目' }}<PhArrowUpRight :size="18" aria-hidden="true" /></span>
    </a>
  </div>
</template>
<style scoped>
.knowledge-entries { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
.knowledge-entry { display: flex; flex-direction: column; min-width: 0; padding: 28px; border: 1px solid var(--border-soft); border-radius: var(--radius-card); background: var(--bg-card); color: inherit; text-decoration: none; transition: border-color 180ms; }
.knowledge-entry:hover { border-color: var(--brand-main); }
.knowledge-entry__top { display: flex; gap: 12px; align-items: center; justify-content: space-between; color: var(--brand-main); }
.knowledge-entry__top span { color: var(--text-sub); font-size: 12px; }
.knowledge-entry h2 { margin: 24px 0 12px; font: 600 26px/1.4 var(--font-display); color: var(--text-main); }
.knowledge-entry p { margin: 0 0 24px; font-size: 15px; line-height: 1.8; color: var(--text-sub); }
.knowledge-entry__link { display: flex; align-items: center; gap: 8px; margin-top: auto; min-height: 28px; color: var(--brand-main); font-size: 14px; font-weight: 600; }
@media(max-width: 800px) { .knowledge-entries { grid-template-columns: 1fr; gap: 14px; } .knowledge-entry { padding: 24px; } .knowledge-entry h2 { margin-top: 16px; } }
</style>
