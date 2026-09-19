<script setup>
import { PhImages, PhFlowArrow, PhBooks, PhArrowUpRight } from '@phosphor-icons/vue'
const paths = [
  { title: '作品集', desc: '品牌与产品视觉', href: '/portfolio/', icon: PhImages },
  { title: '工作流', desc: '项目过程与方法', href: '/aigc/', icon: PhFlowArrow },
  { title: '知识库', desc: '研究、方法与工具', href: '/knowledge/', icon: PhBooks }
]
</script>
<template>
  <nav id="home-paths" class="home-paths" aria-label="探索本站">
    <a v-for="path in paths" :key="path.href" :href="path.href" class="path-link">
      <component :is="path.icon" :size="24" aria-hidden="true" />
      <span><strong>{{ path.title }}</strong><small>{{ path.desc }}</small></span>
      <PhArrowUpRight :size="18" class="path-link__arrow" aria-hidden="true" />
    </a>
  </nav>
</template>
<style scoped>
.home-paths { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); width: min(var(--page-width), calc(100% - 48px)); margin: 0 auto; padding: 20px 0; border-block: 1px solid var(--border-soft); }
.path-link { display: flex; min-width: 0; align-items: center; gap: 16px; padding: 8px 28px; color: var(--brand-main); text-decoration: none; border-radius: var(--radius-control); transition: background-color 180ms; }
.path-link + .path-link { border-left: 1px solid var(--border-soft); }
.path-link:hover, .path-link:focus-visible { background: var(--bg-soft); }
.path-link > svg { flex-shrink: 0; }
.path-link span { min-width: 0; }
.path-link strong { display: block; color: var(--text-main); font: 600 20px/1.4 var(--font-display); }
.path-link small { display: block; margin-top: 5px; color: var(--text-sub); font-size: 14px; line-height: 1.6; }
.path-link__arrow { margin-left: auto; }
@media(max-width: 700px) {
  .home-paths { width: calc(100% - 32px); padding: 14px 0; }
  .path-link { justify-content: center; flex-direction: column; gap: 8px; padding: 8px 4px; text-align: center; }
  .path-link strong { font-size: 18px; }
  .path-link small { font-size: 12px; }
  .path-link__arrow { display: none; }
}
</style>
