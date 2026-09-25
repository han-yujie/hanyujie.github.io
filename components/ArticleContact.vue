<script setup>
import { computed } from 'vue'
import profile from '../.shared/content/profile.json'
const props = defineProps({ title: { type: String, default: '' } })
const emailLink = computed(() => `mailto:${profile.email}?subject=${encodeURIComponent(`关于：${props.title}`)}`)
</script>

<template>
  <section class="article-contact" aria-label="交流与反馈">
    <div><h2>交流与反馈</h2><p>有项目需求，或想交流文中的方法，欢迎写信给我。</p></div>
    <a :href="emailLink">邮件联系 ↗</a>
  </section>
</template>

<style scoped>
.article-contact { display:flex; align-items:center; justify-content:space-between; gap:24px; margin-top:48px; padding:28px 0; border-top:1px solid var(--border-soft); }
.article-contact h2 { margin:0 0 8px; border:0; padding:0; font-size:22px; }
.article-contact p { margin:0; color:var(--text-sub); font-size:14px; }
.article-contact a { flex-shrink:0; color:var(--brand-main); text-underline-offset:5px; }
@media(max-width:600px) { .article-contact { align-items:flex-start; flex-direction:column; gap:16px; } }
</style>
