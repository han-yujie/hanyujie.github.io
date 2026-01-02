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
      { icon: 'youtube', link: 'https://www.youtube.com/你的频道' },
      { 
        icon: {
          // 抖音图标SVG
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.62 6.79c-1.49-.09-2.73-.64-3.75-1.54-.28-.25-.54-.52-.78-.81-.05-.06-.1-.13-.15-.19-1.2-1.54-1.89-3.44-1.89-5.25H9.1v14.45c0 2.23-1.81 4.04-4.04 4.04-2.23 0-4.04-1.81-4.04-4.04 0-2.23 1.81-4.04 4.04-4.04.79 0 1.53.23 2.15.63V8.77c-3.45.33-6.15 3.19-6.15 6.68 0 3.71 3.01 6.72 6.72 6.72 3.71 0 6.72-3.01 6.72-6.72V9.93c.75.41 1.57.7 2.43.83v-3.97h.02z" fill="#FF004F"/><path d="M15.93 5.17c.56.59 1.22 1.07 1.95 1.41v3.38c-.86-.13-1.68-.42-2.43-.83v-3.96c.16.08.32.17.48.28v-.28z" fill="#000"/><path d="M18.88 6.58c-.73-.34-1.39-.82-1.95-1.41v3.96c.75.41 1.57.7 2.43.83V6.58h-.48z" fill="#000"/></svg>'
        }, 
        link: 'https://www.douyin.com/你的主页'
      }
    ]
  }
})