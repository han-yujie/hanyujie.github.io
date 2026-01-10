<script setup>
// 逻辑层留空
</script>

<template>
  <div class="portfolio-list">

    <a href="/portfolio/brand-design" class="project-card">
      <div class="card-image">
        <img src="https://picsum.photos/id/42/600/400" alt="品牌设计" />
      </div>
      <div class="card-info">
        <h3>品牌视觉设计系统</h3>
        <p>UI/UX · 品牌全案 · 2025</p>
        <div class="btn">查看详情 →</div>
      </div>
    </a>

    <a href="/portfolio/3d-viz" class="project-card">
      <div class="card-image">
        <img src="https://picsum.photos/id/58/600/400" alt="3D可视化" />
      </div>
      <div class="card-info">
        <h3>3D建筑可视化</h3>
        <p>Blender · UE5 · 渲染</p>
        <div class="btn">查看详情 →</div>
      </div>
    </a>

    <a href="/portfolio/mobile-app" class="project-card">
      <div class="card-image">
        <img src="https://picsum.photos/id/3/600/400" alt="移动端设计" />
      </div>
      <div class="card-info">
        <h3>移动端应用设计</h3>
        <p>iOS界面 · 交互逻辑</p>
        <div class="btn">查看详情 →</div>
      </div>
    </a>

    <a href="/portfolio/smart-home" class="project-card">
      <div class="card-image">
        <img src="https://picsum.photos/id/201/600/400" alt="智能硬件" />
      </div>
      <div class="card-info">
        <h3>智能家居中控系统</h3>
        <p>HMI · 智能硬件交互</p>
        <div class="btn">查看详情 →</div>
      </div>
    </a>

    <a href="/portfolio/magazine" class="project-card">
      <div class="card-image">
        <img src="https://picsum.photos/id/338/600/400" alt="排版艺术" />
      </div>
      <div class="card-info">
        <h3>光影艺术杂志排版</h3>
        <p>平面设计 · 纸媒印刷</p>
        <div class="btn">查看详情 →</div>
      </div>
    </a>

    <a href="/portfolio/ai-video" class="project-card">
      <div class="card-image">
        <img src="https://picsum.photos/id/237/600/400" alt="AI视频" />
      </div>
      <div class="card-info">
        <h3>AIGC 视频生成探索</h3>
        <p>Runway · ComfyUI 工作流</p>
        <div class="btn">查看详情 →</div>
      </div>
    </a>

  </div> </template> <style scoped>
/* 强制 3 列布局 */
.portfolio-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

@media (max-width: 960px) {
  .portfolio-list { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .portfolio-list { grid-template-columns: 1fr; }
}

.project-card {
  display: block;
  background: rgba(255,255,255,0.05); /* 强制深色背景 */
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  text-decoration: none !important;
  transition: all 0.3s ease;
  color: #ffffff !important; /* 强制白色文字 */
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  border-color: #8B5CF6; 
}

.card-image { height: 200px; overflow: hidden; background: #333; }
.card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.project-card:hover .card-image img { transform: scale(1.05); }

.card-info { padding: 24px; }
.card-info h3 { margin: 0 !important; font-size: 1.2rem; font-weight: 700; line-height: 1.4; color: #ffffff; }
.card-info p { margin: 8px 0 16px 0 !important; font-size: 0.9rem; color: #999999; }
.btn { font-size: 0.9rem; font-weight: 600; color: #8B5CF6; }
</style>