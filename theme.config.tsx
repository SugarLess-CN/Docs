import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
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
    const { title } = useConfig()

    return (
      <>
        <link rel="dns-prefetch" href="//pan.vinua.cn" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A Light Community System."
        />
        <meta
          name="og:description"
          content="A Light Community System."
        />
        <meta
          name="og:title"
          content={title ? title + ' | Sugarless' : 'Sugarless'}
        />
        {/* <meta name="og:image" content={socialCard} /> */}
        <meta name="apple-mobile-web-app-title" content="Sugarless" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    )
  },
  project: {
    link: 'https://github.com/SugarLess-CN/Docs',
  },
  docsRepositoryBase: 'https://github.com/SugarLess-CN/Docs/blob/main',
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="text-xs">
          © {new Date().getFullYear()} 2024-present Sugarless-CN Team
        </p>
      </div>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Sugarless',
      }
    }
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  banner: {
  },
}

export default config
