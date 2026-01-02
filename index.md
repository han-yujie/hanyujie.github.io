---
layout: home

hero:
  name: "Liuli"
  text: "A VitePress Site"
  tagline: My great project tagline
  image:
    src: /banner-image.png
    alt: 创意设计展示
    style: "max-width: 400px; height: auto;"
  actions:
    - theme: brand
      text: 浏览作品集
      link: /portfolio
    - theme: alt
      text: 创作资源
      link: /resources

features: []  # 清空原有features，防止显示默认内容
---

<!-- 精选作品集 -->
<div class="section-header">
  <h2>精选作品集</h2>
</div>

<div class="portfolio-grid">
  <a href="/portfolio/brand-design" class="portfolio-card">
    <div class="card-content">
      <h3>品牌视觉设计系统</h3>
      <p>为企业打造完整的品牌视觉识别系统，包括标志、色彩、版式和图形元素。</p>
      <div class="tags">
        <span class="tag tag-uiux">UI/UX</span>
        <span class="tag tag-brand">品牌设计</span>
      </div>
    </div>
  </a>
  
  <a href="/portfolio/3d-visualization" class="portfolio-card">
    <div class="card-content">
      <h3>3D建筑可视化</h3>
      <p>使用Blender和UE5创建的高质量建筑渲染与沉浸式虚拟漫游体验。</p>
      <div class="tags">
        <span class="tag tag-3d">3D建模</span>
        <span class="tag tag-viz">可视化</span>
      </div>
    </div>
  </a>
  
  <a href="/portfolio/mobile-design" class="portfolio-card">
    <div class="card-content">
      <h3>移动端应用设计</h3>
      <p>针对iOS和Android平台的用户界面设计，注重交互体验与视觉美感。</p>
      <div class="tags">
        <span class="tag tag-mobile">移动端</span>
        <span class="tag tag-interaction">交互设计</span>
      </div>
    </div>
  </a>
</div>

<!-- AIGC实时创作 -->
<div class="section-header">
  <h2>AIGC实时创作</h2>
</div>

<div class="aigc-section">
  <div class="aigc-content">
    <h3>AI辅助创作流程</h3>
    <p class="aigc-intro">我们的AIGC平台整合了多种AI模型，为您提供从灵感激发到作品完成的完整创作支持。</p>
    
    <div class="aigc-steps">
      <div class="aigc-step-card">
        <div class="step-icon-wrapper">
          <div class="step-icon">💡</div>
        </div>
        <div class="step-content">
          <h4>创意灵感生成</h4>
          <p>基于关键词和风格描述，AI生成多个创意方向和概念草图</p>
        </div>
      </div>
      
      <div class="aigc-step-card">
        <div class="step-icon-wrapper">
          <div class="step-icon">🎨</div>
        </div>
        <div class="step-content">
          <h4>视觉内容创作</h4>
          <p>利用扩散模型生成高质量图像，支持多种艺术风格和分辨率</p>
        </div>
      </div>
      
      <div class="aigc-step-card">
        <div class="step-icon-wrapper">
          <div class="step-icon">✏️</div>
        </div>
        <div class="step-content">
          <h4>内容优化调整</h4>
          <p>通过参数调整和局部修改，精细化控制生成结果</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 创作资源与工具 -->
<div class="section-header">
  <h2>创作资源与工具</h2>
</div>

<div class="tools-grid">
  <div class="tool-card">
    <div class="tool-icon">🖼️</div>
    <h3>Photoshop</h3>
    <p>专业的图像编辑与合成软件</p>
    <a href="/downloads/photoshop" class="download-btn">立即下载</a>
  </div>
  
  <div class="tool-card">
    <div class="tool-icon">✏️</div>
    <h3>Illustrator</h3>
    <p>矢量图形设计与绘制工具</p>
    <a href="/downloads/illustrator" class="download-btn">立即下载</a>
  </div>
  
  <div class="tool-card">
    <div class="tool-icon">📐</div>
    <h3>CorelDRAW</h3>
    <p>专业的矢量插图与排版软件</p>
    <a href="/downloads/coreldraw" class="download-btn">立即下载</a>
  </div>
  
  <div class="tool-card">
    <div class="tool-icon">🎬</div>
    <h3>Cinema 4D</h3>
    <p>专业的3D建模与动画软件</p>
    <a href="/downloads/cinema4d" class="download-btn">立即下载</a>
  </div>
  
  <div class="tool-card">
    <div class="tool-icon">🔦</div>
    <h3>Keyshot</h3>
    <p>实时3D渲染与可视化工具</p>
    <a href="/downloads/keyshot" class="download-btn">立即下载</a>
  </div>
  
  <div class="tool-card">
    <div class="tool-icon">🔄</div>
    <h3>Blender</h3>
    <p>开源3D创作套件</p>
    <a href="/downloads/blender" class="download-btn">立即下载</a>
  </div>
  
  <div class="tool-card">
    <div class="tool-icon">🎥</div>
    <h3>Premiere Pro</h3>
    <p>专业的视频编辑软件</p>
    <a href="/downloads/premiere" class="download-btn">立即下载</a>
  </div>
  
  <div class="tool-card">
    <div class="tool-icon">✨</div>
    <h3>After Effects</h3>
    <p>专业的动态图形与视觉效果软件</p>
    <a href="/downloads/aftereffects" class="download-btn">立即下载</a>
  </div>
</div>

<style>
/* ===== 全局样式 ===== */
:root {
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --secondary-color: #10b981;
  --accent-color: #8b5cf6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-light: #f9fafb;
  --border-color: #e5e7eb;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --card-shadow-hover: 0 10px 25px rgba(0, 0, 0, 0.08);
  --transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 移除标题前的#号 */
h1 a.header-anchor,
h2 a.header-anchor,
h3 a.header-anchor,
h4 a.header-anchor,
h5 a.header-anchor,
h6 a.header-anchor {
  display: none !important;
}

/* 移除Banner下面的分割线 */
.VPHero .VPImage {
  border: none !important;
}
.VPHero::after {
  display: none !important;
}

/* 移除所有下划线 */
a {
  text-decoration: none !important;
}

.section-header {
  margin-top: 4rem;
  margin-bottom: 2.5rem;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  position: relative;
  padding-bottom: 0.5rem;
  border-bottom: none !important;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
}

/* ===== 作品集样式 ===== */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.portfolio-card {
  display: block;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.75rem;
  transition: var(--transition-smooth);
  color: inherit;
  position: relative;
  overflow: hidden;
}

.portfolio-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--primary-color);
}

.portfolio-card:hover::before {
  opacity: 1;
}

.card-content h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
}

.card-content p {
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tag {
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  display: inline-block;
  transition: transform 0.2s ease;
}

.tag:hover {
  transform: translateY(-1px);
}

.tag-uiux { background-color: #3b82f6; }      /* UI/UX - 蓝色 */
.tag-brand { background-color: #10b981; }    /* 品牌设计 - 绿色 */
.tag-3d { background-color: #8b5cf6; }       /* 3D建模 - 紫色 */
.tag-viz { background-color: #f59e0b; }      /* 可视化 - 橙色 */
.tag-mobile { background-color: #ef4444; }   /* 移动端 - 红色 */
.tag-interaction { background-color: #06b6d4; } /* 交互设计 - 青色 */

/* ===== AIGC板块样式 ===== */
.aigc-section {
  margin: 3rem 0 4rem;
}

.aigc-content h3 {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.aigc-intro {
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  line-height: 1.6;
}

.aigc-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.aigc-step-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.75rem;
  transition: var(--transition-smooth);
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  position: relative;
  overflow: hidden;
}

.aigc-step-card:hover {
  transform: scale(1.02);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--primary-color);
}

.aigc-step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
}

.step-icon-wrapper {
  flex-shrink: 0;
}

.step-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary-color);
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
}

.step-content p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* ===== 创作资源与工具样式 ===== */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0 5rem;
}

.tool-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 1.5rem;
  text-align: center;
  transition: var(--transition-smooth);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.tool-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--primary-color);
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tool-card:hover::before {
  opacity: 1;
}

.tool-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: 50%;
  color: var(--primary-color);
}

.tool-card h3 {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.tool-card p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: 1.2rem;
  line-height: 1.4;
  flex-grow: 1;
}

.download-btn {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.85rem;
  transition: var(--transition-smooth);
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  max-width: 140px;
  text-align: center;
}

.download-btn:hover {
  background: linear-gradient(135deg, var(--primary-hover), #1d4ed8);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* ===== 响应式调整 ===== */
@media (max-width: 992px) {
  .tools-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .aigc-steps {
    grid-template-columns: 1fr;
  }
  
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
  
  .section-header h2 {
    font-size: 1.7rem;
  }
}

@media (max-width: 480px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .tool-card {
    padding: 1.25rem;
  }
  
  .tag {
    padding: 0.3rem 0.8rem;
    font-size: 0.75rem;
  }
}
</style>