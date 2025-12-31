import { defineConfig } from 'vitepress'; // 补充分号，分隔独立语句
export default defineConfig({
  title: "我的博客", // 浏览器标签页标题
  description: "个人作品集与知识分享", // 换行分隔，补充逗号

  // 开启本地搜索（点击搜索框，背景会自动模糊）
  themeConfig: { // 注释后换行，分隔配置项
    search: {
      provider: 'local'
    }, // 补充逗号，规范对象属性分隔

    // 网站左上角的 Logo（把你的 logo 图片放入 public 文件夹，命名为 logo.png）
    // logo: '/logo.png', // 注释后换行，保持格式整洁
    // 顶部导航栏 (你点名的所有菜单都在这)
    nav: [
      { text: '首页', link: '/' },
      { text: '作品集', link: '/portfolio/' },
      { text: 'AIGC', link: '/aigc/' },
      { 
        text: '创作资源', 
        items: [ // 这里是下拉子菜单
          { text: '平面工具', link: '/resources/graphic-tools' },
          { text: '视频剪辑', link: '/resources/video-editing' }
        ]
      },
      { text: '网站搭建', link: '/web-build/' },
      { text: '随记', link: '/notes/' }
    ],

    // 侧边栏 (点击不同菜单时，左侧显示的文章列表)
    sidebar: {
      '/portfolio/': [
        {
          text: '我的作品',
          items: [
            { text: '作品集介绍', link: '/portfolio/' },
            // 以后在这里添加新作品，比如：
            // { text: '第一个海报设计', link: '/portfolio/poster-design' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源分类',
          items: [
            { text: '资源总览', link: '/resources/' },
            { text: '平面工具下载', link: '/resources/graphic-tools' },
            { text: '视频剪辑神器', link: '/resources/video-editing' }
          ]
        }
      ],
      '/web-build/': [
        {
          text: '建站教程',
          items: [
            { text: '教程目录', link: '/web-build/' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的GitHub用户名' }
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 你的名字'
    }
  }
});