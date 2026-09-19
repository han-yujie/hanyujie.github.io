<script setup>
import ContentCard from './ContentCard.vue'
import KnowledgeEntries from './KnowledgeEntries.vue'
import { data as catalog } from '../.shared/content.data.mjs'
import { latestPublished } from '../.shared/contentClient.js'
const latest = latestPublished([...catalog.learning, ...catalog.methods, ...catalog.resources], 6)
const reading = latest.length ? latest : latestPublished(catalog.workflows, 3)
const cards = reading.map(item => ({ ...item, summary: item.desc, image: item.cover, alt: item.coverAlt, eyebrow: item.type, cta: item.kind === 'resource' ? '查看资源' : '阅读全文' }))
</script>
<template>
  <div class="knowledge-hub">
    <header class="knowledge-hub__head"><h1>知识库</h1><p>记录观察、整理方法、积累工具。三个栏目随实际项目与研究持续更新。</p></header>
    <KnowledgeEntries />
    <section class="knowledge-hub__reading">
      <header class="knowledge-hub__head">
        <h2>{{ latest.length ? '最近更新' : '先从项目实践读起' }}</h2>
        <p>{{ latest.length ? '这里是三个知识栏目最近发布的内容。' : '知识内容正在整理。下面是已经发布的工作流，记录项目中的做法与判断。' }}</p>
      </header>
      <div v-if="cards.length" class="knowledge-hub__grid"><ContentCard v-for="item in cards" :key="item.id" :item="item" /></div>
      <a v-else href="/portfolio/" class="knowledge-hub__fallback">先看看我的作品 →</a>
    </section>
  </div>
</template>
<style scoped>
.knowledge-hub { width: min(var(--page-width), 100%); margin-inline: auto; }
.knowledge-hub__head { max-width: 760px; margin-bottom: 30px; }
.knowledge-hub__head :is(h1,h2) { margin: 0; font: 600 34px/1.3 var(--font-display); color: var(--text-main); }
.knowledge-hub__head p { margin: 12px 0 0; color: var(--text-sub); font-size: 15px; line-height: 1.8; }
.knowledge-hub__reading { margin-top: 64px; }
.knowledge-hub__grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 22px; }
.knowledge-hub__fallback { color: var(--brand-main); }
@media(max-width: 800px) { .knowledge-hub__grid { grid-template-columns: 1fr; } .knowledge-hub__head :is(h1,h2) { font-size: 28px; } .knowledge-hub__reading { margin-top: 44px; } }
</style>
