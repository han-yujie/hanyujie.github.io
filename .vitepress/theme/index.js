// 导入VitePress默认主题（保留所有原有功能：菜单、搜索、深色模式等）
import DefaultTheme from 'vitepress/theme'
// 导入Vue的h函数（官方渲染函数，无任何自定义变量）
import { h } from 'vue'

// 导出自定义主题，仅扩展右上角按钮，不修改任何默认功能
export default {
  // 完全继承默认主题，确保原有页面结构和功能不变
  ...DefaultTheme,

  // 重写布局，仅添加右上角平台链接
  Layout() {
    // 获取默认布局组件，保证首页、文章页正常渲染
    const DefaultLayout = DefaultTheme.Layout

    // 用Vue的h函数创建元素，无任何未定义变量
    return () =>
      h(DefaultLayout, null, {
        // 官方插槽：对应右上角按钮区域，样式自动统一
        'nav-bar-content-after': () => [
          // 第1个平台链接（B站）：用a标签更简单，无需处理点击事件
          h(
            'a',
            {
              // 复用默认按钮样式，和现有按钮完全一致
              class: 'vp-nav-bar-action',
              // 跳转链接
              href: 'https://www.bilibili.com',
              // 新标签页打开，不影响当前博客
              target: '_blank',
              // 鼠标悬浮提示
              title: '我的B站主页'
            },
            // 按钮显示文字
            'B站'
          ),
          // 第2个平台链接（微博）
          h(
            'a',
            {
              class: 'vp-nav-bar-action',
              href: 'https://weibo.com',
              target: '_blank',
              title: '我的微博主页'
            },
            '微博'
          )
        ]
      })
  }
}