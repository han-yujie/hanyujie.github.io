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

<!-- AIGC实时创作（修复原代码缺失的标签） -->
<div class="section-header">
  <h2>AIGC实时创作</h2>
</div>

<div class="aigc-section">
  <div class="aigc-content">
    <h3>AI辅助创作流程</h3>
    <p class="aigc-intro">我们的AIGC平台整合了多种AI模型，为您提供从灵感激发到作品完成的完整创作支持。</p>
    
    <div class="aigc-steps"> <!-- 修复：补充缺失的div开始标签 -->
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
    </div> <!-- 修复：补充缺失的div结束标签 -->
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
/* ===== 全局样式（适配Vue.js官网风格） ===== */
:root {
  /* Vue.js官网核心配色 */
  --vue-primary: #4FC08D; /* 主色：薄荷绿 */
  --vue-primary-light: #65D3A2; /* 主色浅调 */
  --vue-primary-dark: #3AA373; /* 主色深调 */
  --vue-secondary: #3B82F6; /* 辅助色：浅蓝 */
  --vue-secondary-light: #60A5FA; /* 辅助色浅调 */
  --vue-text-primary: #2C3E50; /* 主文本色：深灰蓝 */
  --vue-text-secondary: #64748B; /* 次文本色：中灰 */
  --vue-bg-light: #F8FAFC; /* 浅背景色 */
  --vue-bg-white: #FFFFFF; /* 白色背景 */
  --vue-border-color: #E2E8F0; /* 边框色 */
  --vue-shadow-light: 0 2px 8px rgba(0, 0, 0, 0.06); /* 轻阴影 */
  --vue-shadow-hover: 0 4px 16px rgba(79, 192, 141, 0.15); /* 悬浮阴影（主色关联） */
  --vue-transition-smooth: all 0.2s ease-in-out; /* 柔和过渡 */
}

/* 重置默认样式，与Vue官网对齐 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--vue-bg-light);
  color: var(--vue-text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

/* 移除Banner下面的分割线，适配Vue官网简约风格 */
.VPHero .VPImage {
  border: none !important;
}
.VPHero::after {
  display: none !important;
}

/* 移除所有下划线，Vue官网链接无下划线 */
a {
  text-decoration: none !important;
  color: inherit;
}

/* 章节标题样式（参考Vue官网章节标题） */
.section-header {
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
}

.section-header h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--vue-text-primary);
  position: relative;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--vue-border-color) !important;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -1px; /* 与底部边框对齐 */
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--vue-primary); /* Vue主色分割线 */
  border-radius: 1px;
}

/* ===== 作品集样式（Vue风格优化） ===== */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
}

.portfolio-card {
  display: block;
  background: var(--vue-bg-white);
  border: 1px solid var(--vue-border-color);
  border-radius: 8px; /* Vue官网小圆角风格 */
  padding: 1.75rem;
  transition: var(--vue-transition-smooth);
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
  height: 2px; /* 细线条，贴合Vue简约风格 */
  background: var(--vue-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-2px); /* 小幅悬浮，更柔和 */
  box-shadow: var(--vue-shadow-hover);
  border-color: var(--vue-primary-light);
}

.portfolio-card:hover::before {
  opacity: 1;
}

.card-content h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--vue-text-primary);
}

.card-content p {
  color: var(--vue-text-secondary);
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
  border-radius: 16px; /* 小圆角，贴合Vue风格 */
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  display: inline-block;
  transition: var(--vue-transition-smooth);
  border: none;
}

.tag:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

/* 标签配色替换为Vue风格低饱和色 */
.tag-uiux { background-color: var(--vue-secondary); }      /* UI/UX - Vue辅助蓝 */
.tag-brand { background-color: var(--vue-primary); }    /* 品牌设计 - Vue主绿 */
.tag-3d { background-color: #9333EA; opacity: 0.9; }       /* 3D建模 - 低饱和紫 */
.tag-viz { background-color: #F59E0B; opacity: 0.9; }      /* 可视化 - 低饱和橙 */
.tag-mobile { background-color: #EF4444; opacity: 0.9; }   /* 移动端 - 低饱和红 */
.tag-interaction { background-color: #06B6D4; opacity: 0.9; } /* 交互设计 - 低饱和青 */

/* ===== AIGC板块样式（Vue风格优化+修复语法错误） ===== */
.aigc-section {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
  margin-bottom: 5rem;
}

.aigc-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vue-text-primary);
  margin-bottom: 0.5rem;
}

.aigc-intro {
  color: var(--vue-text-secondary);
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
  background: var(--vue-bg-white);
  border: 1px solid var(--vue-border-color);
  border-radius: 8px;
  padding: 1.75rem;
  transition: var(--vue-transition-smooth);
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  position: relative;
  overflow: hidden;
}

.aigc-step-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vue-shadow-hover);
  border-color: var(--vue-primary-light);
}

.aigc-step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--vue-primary);
}

.step-icon-wrapper {
  flex-shrink: 0;
}

.step-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #F0FDF4, #E3F9E5); /* Vue主色关联浅渐变 */
  border-radius: 12px; /* 小圆角，贴合Vue风格 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--vue-primary);
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--vue-text-primary);
}

.step-content p {
  margin: 0;
  color: var(--vue-text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* ===== 创作资源与工具样式（Vue风格优化） ===== */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 2rem auto 5rem;
  max-width: 1200px;
  padding: 0 1.5rem;
}

.tool-card {
  background: var(--vue-bg-white);
  border: 1px solid var(--vue-border-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: var(--vue-transition-smooth);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vue-shadow-hover);
  border-color: var(--vue-primary-light);
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--vue-primary);
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
  background: linear-gradient(135deg, #F0FDF4, #E3F9E5); /* Vue主色关联浅渐变 */
  border-radius: 50%;
  color: var(--vue-primary);
}

.tool-card h3 {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vue-text-primary);
}

.tool-card p {
  color: var(--vue-text-secondary);
  font-size: 0.85rem;
  margin-bottom: 1.2rem;
  line-height: 1.4;
  flex-grow: 1;
}

.download-btn {
  display: inline-block;
  background: var(--vue-primary); /* Vue主色按钮 */
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px; /* 小圆角，贴合Vue风格 */
  font-weight: 500;
  font-size: 0.85rem;
  transition: var(--vue-transition-smooth);
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  max-width: 140px;
  text-align: center;
}

.download-btn:hover {
  background: var(--vue-primary-dark);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(79, 192, 141, 0.2); /* 主色轻阴影 */
}

/* ===== 响应式调整（与Vue官网响应式逻辑对齐） ===== */
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
    font-size: 1.6rem;
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
  
  .section-header {
    margin-top: 4rem;
  }
}
</style>