// 导入VitePress默认主题（保留所有原有功能：菜单、搜索、深色模式等）
import DefaultTheme from 'vitepress/theme'
// 导入Vue的h函数（用于创建自定义按钮组件）
import { h } from 'vue'

// 导出自定义主题，继承默认主题的所有功能
export default {
  // 完全继承默认主题的配置和功能，不破坏任何现有内容
  ...DefaultTheme,

  // 重写默认主题的布局，仅添加右上角平台按钮
  Layout() {
    // 获取默认主题的布局组件，保证原有页面结构不变
    const DefaultLayout = DefaultTheme.Layout

    // 返回自定义布局，仅在右上角添加按钮
    return () =>
      h(DefaultLayout, null, {
        // 关键插槽：nav-bar-content-after → 对应右上角现有按钮右侧区域，样式自动统一
        'nav-bar-content-after': () => [
          // 第1个平台按钮（示例：B站，可修改）
          h(
            'button',
            {
              // 复用VitePress默认按钮样式，和现有按钮（深色模式、刷新）完全一致
              class: 'vp-nav-bar-action',
              // 点击事件：跳转至你的平台主页，新标签页打开（不影响当前博客页面）
              onclick: () => window.open('https://www.bilibili.com', '_blank'),
              // 可选：鼠标悬浮时显示提示文字
              title: '我的B站主页'
            },
            // 按钮显示内容（文字/图标，这里用文字更简单，小白易修改）
            h('span', { class: 'vp-icon' }, 'B站')
          ),

          // 第2个平台按钮（示例：微博，可新增/删除）
          h(
            'button',
            {
              class: 'vp-nav-bar-action',
              onclick: () => window.open('https://weibo.com', '_blank'),
              title: '我的微博主页'
            },
            h('span', { class: 'vp-icon' }, '微博')
          )
        ]
      })
  }
}