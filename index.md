---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Liuli"
  text: "A VitePress Site"
  tagline: My great project tagline
  image:
    src: /banner-image.png  # 请替换为你的Banner右侧创意图片
    alt: 创意设计展示
    style: "max-width: 400px; height: auto;"
  actions:
    - theme: brand
      text: 浏览作品集
      link: /portfolio
    - theme: alt
      text: 创作资源
      link: /aigc

# 移除原有的 features 部分
---

<!-- 精选作品集 -->
<div class="section-header">
  <h2>🎨 精选作品集</h2>
</div>

<div class="portfolio-grid">
  <a href="/portfolio/brand-design" class="portfolio-card">
    <div class="card-content">
      <h3>品牌视觉设计系统</h3>
      <p>为企业打造完整的品牌视觉识别系统，包括标志、色彩、版式和图形元素。</p>
      <div class="tags">
        <span class="tag">UI/UX</span>
        <span class="tag">品牌设计</span>
      </div>
    </div>
  </a>
  
  <a href="/portfolio/3d-visualization" class="portfolio-card">
    <div class="card-content">
      <h3>3D建筑可视化</h3>
      <p>使用Blender和UE5创建的高质量建筑渲染与沉浸式虚拟漫游体验。</p>
      <div class="tags">
        <span class="tag">3D建模</span>
        <span class="tag">可视化</span>
      </div>
    </div>
  </a>
  
  <a href="/portfolio/mobile-design" class="portfolio-card">
    <div class="card-content">
      <h3>移动端应用设计</h3>
      <p>针对iOS和Android平台的用户界面设计，注重交互体验与视觉美感。</p>
      <div class="tags">
        <span class="tag">移动端</span>
        <span class="tag">交互设计</span>
      </div>
    </div>
  </a>
</div>

<!-- AIGC实时创作 -->
<div class="section-header">
  <h2>🤖 AIGC实时创作</h2>
</div>

<div class="aigc-section">
  <div class="aigc-content">
    <h3>AI辅助创作流程</h3>
    <p>我们的AIGC平台整合了多种AI模型，为您提供从灵感激发到作品完成的完整创作支持。</p>
    
    <div class="process-steps">
      <div class="step">
        <div class="step-icon">💡</div>
        <div class="step-text">
          <h4>创意灵感生成</h4>
          <p>基于关键词和风格描述，AI生成多个创意方向和概念草图</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-icon">🎨</div>
        <div class="step-text">
          <h4>视觉内容创作</h4>
          <p>利用扩散模型生成高质量图像，支持多种艺术风格和分辨率</p>
        </div>
      </div>
      
      <div class="step">
        <div class="step-icon">✏️</div>
        <div class="step-text">
          <h4>内容优化调整</h4>
          <p>通过参数调整和局部修改，精细化控制生成结果</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 创作资源与工具 -->
<div class="section-header">
  <h2>🛠️ 创作资源与工具</h2>
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
/* 移除标题前的#号 */
h1 a.header-anchor,
h2 a.header-anchor,
h3 a.header-anchor,
h4 a.header-anchor,
h5 a.header-anchor,
h6 a.header-anchor {
  display: none !important;
}

.section-header h2 {
  border-bottom: none;
  padding-bottom: 0;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.section-header h2::after {
  content: none;
}

/* 作品集样式 */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.portfolio-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: block;
  color: inherit;
  text-decoration: none;
  background: var(--vp-c-bg);
}

.portfolio-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: inherit;
}

.portfolio-card .card-content h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}

.portfolio-card .card-content p {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: linear-gradient(135deg, var(--vp-c-brand), var(--vp-c-brand-light));
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  display: inline-block;
}

/* AIGC板块样式 */
.aigc-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
  border-radius: 16px;
  padding: 2.5rem;
  margin: 2rem 0 3rem;
  border: 1px solid rgba(var(--vp-c-brand-rgb), 0.1);
}

.aigc-content h3 {
  margin-top: 0;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
}

.aigc-content > p {
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
  max-width: 800px;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  max-width: 800px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--vp-c-divider);
}

.step-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, var(--vp-c-brand), var(--vp-c-brand-light));
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-text h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.step-text p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* 创作资源工具样式 */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0 4rem;
}

.tool-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.8rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  background: var(--vp-c-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tool-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.tool-icon {
  font-size: 3rem;
  margin-bottom: 1.2rem;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--vp-c-bg-soft), var(--vp-c-bg-soft-up));
  border-radius: 50%;
}

.tool-card h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

.tool-card p {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.download-btn {
  display: inline-block;
  background: linear-gradient(135deg, var(--vp-c-brand), var(--vp-c-brand-light));
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.download-btn:hover {
  background: linear-gradient(135deg, var(--vp-c-brand-dark), var(--vp-c-brand));
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(var(--vp-c-brand-rgb), 0.3);
}

/* 响应式调整 */
@media (max-width: 992px) {
  .tools-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .aigc-section {
    padding: 1.5rem;
  }
  
  .step {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  .step-icon {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .tag {
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>