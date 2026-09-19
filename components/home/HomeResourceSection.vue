<script setup>
import SectionShell from '../SectionShell.vue'
import SectionHeader from '../SectionHeader.vue'
import KnowledgeEntries from '../KnowledgeEntries.vue'
</script>
<template>
  <SectionShell id="home-knowledge">
    <SectionHeader :title-lines="['知识积累']" desc="研究记录、方法指南和工具资源，随着实践持续整理。栏目状态与已发布内容保持一致。" />
    <div class="home-knowledge__entries"><KnowledgeEntries /></div>
  </SectionShell>
</template>
<style scoped>
.home-knowledge__entries { margin-top: 32px; }
</style>
