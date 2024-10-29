import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

interface CustomDocsThemeConfig extends DocsThemeConfig {
  frontMatter?: {
    description?: string;
  };
}

const config: CustomDocsThemeConfig = {
  // ... existing code ...
  head: function useHead() {
    const {title} = useConfig()
    const image = 'https://docs.i-hentai.cc/logo.png'

    const description =
      (config.frontMatter && config.frontMatter.description) ||
      'Sugarless是一个前后端分离社区系统，基于Nuxt.js'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title}/>
        <meta name="description" content={description}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={image}/>

        <meta name="msapplication-TileColor" content="#B2A711"/>
        <meta name="theme-color" content="#B2A711"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="icon" href="/logo.png" type="image/png"/>
      </>
    )
  },
  project: {
    link: 'https://github.com/SugarLess-CN/Docs',
  },
  docsRepositoryBase: 'https://github.com/SugarLess-CN/Docs/blob/main',
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Sugarless-CN
        </p>
      </div>
    ),
  },
  editLink: {
    content: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
}

export default config
