import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sugerless",
  description: "Sugerless程序使用文档",
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: {
      src: '../logo.webp',
      alt: "Logo图标",
    }, 

    nav: [
      { text: '文档', link: '/' },
      { text: '演示', link: '/demo' },
      { text: '赞助', link: '/donate' }
    ],

    sidebar: {
      "/": [
        {
          text: "程序",
          items: [
            {
              text: "介绍",
              link: "/guide/",
            },
            {
              text: "使用条例",
              link: "/aup/",
            },
            {
              text: "更新日志",
              link: "/update/",
            },
            {
              text: "赞助",
              link: "/donate/",
            },
          ],
        },
        {
          text: "后端安装",
          items: [
            {
              text: "构建安装",
              link: "/install/api-build-install",
            },
            {
              text: "Docker安装",
              link: "/install/api-docker-install",
            },
          ],
        },
        {
          text: "前端安装",
          items: [
            {
              text: "构建安装",
              link: "/install/front-build-install",
            },
            {
              text: "Docker安装",
              link: "/install/front-docker-install",
            },
          ],
        }
      ],
    },

    footer: {
      message: '本文档由 <a href="https://takagi3.top"> 木创社&极光星</a>承建',
      copyright: 'Copyright © 2024 <a href="https://i-hentai.cc/">无糖ACG社区</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SugarLess-CN/SugerlessDocs' }
    ],

    search: {
      provider: 'local'
    }                                                                                                            
  }
})
