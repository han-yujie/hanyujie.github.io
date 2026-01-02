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
          // 抖音图标（官方风格）
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>'
        }, 
        link: 'https://www.douyin.com/你的抖音主页'
      },
      { 
        icon: {
          // 小红书图标（官方风格）
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF2442" d="M5.5 4A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4h-13zm10.65 5.35a.5.5 0 0 1 .7.7l-1.15 1.15a3.5 3.5 0 1 1-.7-.7l1.15-1.15zm-3.15 4.15a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>'
        }, 
        link: 'https://www.xiaohongshu.com/你的小红书主页'
      }
    ]
  }
})