import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  Layout() {
    const DefaultLayout = DefaultTheme.Layout
    return () =>
      h(DefaultLayout, null, {
        'nav-bar-content-after': () => [
          // 修正：引号/括号完全匹配
          h(
            'button',
            {
              class: 'vp-nav-bar-action',
              onclick: () => window.open('https://www.bilibili.com', '_blank'),
              title: '我的B站主页'
            },
            h('span', { class: 'vp-icon' }, 'B站')
          ),
          // 修正：引号/括号完全匹配
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