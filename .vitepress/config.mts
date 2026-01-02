import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        // 新增：配置本地搜索范围，确保搜集全站内容
        locales: {
          '/': {
            placeholder: '搜索全站内容',
            translations: {
              button: {
                text: '搜索'
              },
              modal: {
                noResultsText: '未找到匹配结果',
                resetButtonTitle: '清除查询',
                footer: {
                  selectText: '选择',
                  navigateText: '跳转',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '作品集', link: '/markdown-examples' },
      { text: 'AIGC', link: '/markdown-examples' },
      // 改动：创作资源从单一菜单改为带下拉子菜单
      {
        text: '创作资源',
        items: [
          { text: '3D建模', link: '/markdown-examples' }, // 暂用现有链接，后续可替换为对应页面
          { text: '视频剪辑', link: '/markdown-examples' },
          { text: '平面工具', link: '/markdown-examples' },
          { text: '网站搭建', link: '/markdown-examples' }
        ]
      },
      { text: '博客', link: '/markdown-examples' },
      { text: '随记', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'youtube', link: 'https://www.youtube.com/@yujie1992' },
      { 
        icon: {
          // 抖音图标（黑色音符）
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>'
        }, 
        link: 'https://www.douyin.com/你的抖音主页'
      },
      { 
        icon: {
          // 【修改】小红书图标（统一为单一线条风格，抽象化的“书”图形）
          svg: '<<svg t="1767349615649" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15711" width="200" height="200"><path d="M706.4 490.1h25.8v-33.8h-26z" fill="#515151" p-id="15712"></path><path d="M758.4 310.6H269.2c-111.5 0-201.9 90.4-201.9 201.9s90.4 201.9 201.9 201.9h489.2c111.5 0 201.9-90.4 201.9-201.9 0.1-111.4-90.4-201.9-201.9-201.9zM233.5 596.7c-8.2-14.3-15.7-27.6-23.2-40.9 0-1.6 14.9-47 11.6-98.4h40.9c-0.1 0 1.4 96.3-29.3 139.3z m95.5-5.2c0.4 24-16.2 24-16.2 24h-23.5l-24.7-32.7h25.9V403h38.9c0 58.9-0.2 129.6-0.4 188.5z m56.5 3.1c-18.6-16.3-28.7-65.1-28.4-137.4h38.4c-2.9 38.1 9.4 89 9.4 89s-11.3 24.9-19.4 48.4z m84.2 16.8c-1.1 2-4.4 3.9-6.8 4-18.1 0.3-36.2 0.1-57 0.1 7.8-15.7 14.3-28.4 20-39.6h62c-6.8 13.6-12.2 24.8-18.2 35.5z m15.1-49c-13.7 0-27.5 0.4-41.2-1.1-9.8-1.1-13.7-8.6-9.8-17.9 4.6-11.6 10.2-22.8 15.4-34.3 1.7-4 3.6-7.8 6.1-13.7-7.6 0-13.1 0.1-18.7 0-16.1-0.7-21.5-8-14.9-22.8 10.6-23.5 22.6-46.6 33.9-69.7h38.9c-9.6 19-20.2 37.6-27 55.6 15.8-0.9 30.1-1.7 47-2.7-9 18.1-17 34.1-25 50.2-1.1 2.1-2.1 4.4-3.2 6.5-8.4 16.7-8.4 16.9 10.2 17.3 2 0 3.9 0.3 7.4 0.7-5.2 10.2-9.8 19.5-14.7 28.7-0.6 1.5-2.9 3.2-4.4 3.2z m143.4 53.3H488.7l18.8-37.3h39.8v-122h-24.8v-38.1h89.9v37.6h-24.6v122.7h40.4v37.1z m184.6-28.2c0 28.2-27.5 27.4-27.5 27.4h-35.8l-15-32.3 38.9 0.1s0.4-29.2 0-39.3c-0.3-8.5-4.9-13.9-13.5-14.1-17.3-0.4-34.7-0.1-53.6-0.1V615h-38.5v-85.2h-38.9v-39.7h37.8v-33.6h-25.1v-37.6H667V403h38.9l0.3 15.9h30.9s28.5-0.7 28.7 27.1c0.1 8.2 0.3 35.2 0.3 44.2 32.8-0.1 46.7 6.5 46.7 29.3v68z m-16.5-130h-20.7v-19.8c0-7.2 3.6-13.8 9.7-17.7 6.9-4.4 16.5-7.2 25.5 1.5 0.4 0.3 0.7 0.7 0.9 1.1 12.5 13.2 2.7 34.9-15.4 34.9z" fill="#515151" p-id="15713"></path></svg>>'
        }, 
        link: 'https://www.xiaohongshu.com/你的小红书主页'
      }
    ]
  }
})