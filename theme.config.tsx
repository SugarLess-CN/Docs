import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
const logo = (
  <span>
    <img
      height={40}
      src="../logo.png"
    />
    <span>Sugarless</span>

    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
      }
      img {
        margin-right: 8px;
        height: 40px;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
)
const config: DocsThemeConfig = {
  logo,
  head: function useHead() {
    const {title} = useConfig()
    const image = 'https://docs.i-hentai.cc/logo.png'

    const description =
    (config.frontMatter &&  config.frontMatter.description) ||
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
