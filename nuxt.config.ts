// https://nuxt.com/docs/api/configuration/nuxt-config
import { DefaultLocale } from './types/locale'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    '@nuxt/devtools',
    // '@vite-pwa/nuxt',
  ],
  runtimeConfig: {
    public:{
      GOOGLE_ANALYTICS_ID: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
      NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
      CA_PUB: process.env.NUXT_PUBLIC_CA_PUB,
      NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID: process.env.NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID
    },
    GOOGLE_ANALYTICS_ID: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
    CA_PUB: process.env.NUXT_PUBLIC_CA_PUB,
    NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID: process.env.NUXT_PUBLIC_AMZN_ASSOC_TARCKING_ID
  },
  css: [
    'animate.css',
    '~/styles/global.scss',
    '~/styles/libs/animate.css',
  ],
  app: {
    head: {
      meta: [
        {
          name: 'naver-site-verification',
          content: process.env.NUXT_PUBLIC_NAVER_SEARCH,
        }
      ],
      script: [
        {
          async: true,
          src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NUXT_PUBLIC_CA_PUB}`,
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  // pwa: {
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: 'Requiem blog',
  //     short_name: 'Requiem_blog',
  //     theme_color: '#1E1E1E',
  //     icons: [
  //       {
  //         src: 'app/logo_color-128.png',
  //         sizes: '128x128',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'app/logo_color-256.png',
  //         sizes: '256x256',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'app/logo_color-512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'app/logo_color-512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //         purpose: 'any maskable',
  //       },
  //     ],
  //   },
  //   // workbox: {
  //   // navigateFallback: '/',
  //   //   globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  //   // },
  //   client: {
  //     installPrompt: true,
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module',
  //   },
  // },
  // security: {
  //   corsHandler: false,
  //   headers: false,
  // },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  i18n: {
    defaultLocale: DefaultLocale,
    strategy: 'prefix_and_default',
    trailingSlash: false,
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
      },
      {
        code: 'ko',
        iso: 'ko',
        name: 'Korean',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts'
  },
  image: {
    provider: 'netlify',
  },
  nitro: {
    preset: process.env.PRESET,
    serverAssets: [
      {
        baseName: 'public',
        dir: './public'
      }
    ],
    prerender: {
      // crawlLinks: true,
      routes: [
        // '/',
        '/sitemap.xml',
        '/blog-sitemap.xml',
      ],
      failOnError: false,
    }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  robots: {
    debug: false,
    disallow: ['/playgrounds', '/v1'],
    sitemap: [
      '/sitemap.xml',
      '/blog-sitemap.xml',
    ],
  },
  sitemap: {
    autoI18n: false,
    strictNuxtContentPaths: true,
  },
  content: {
    // https://github.com/shikijs/shiki/blob/main/docs/themes.md
    highlight: {
      theme: {
        default: 'github-light',
        'dark': 'github-dark',
        'base-dark': 'github-dark',
      }
      ,
      preload: ['java'] },
    markdown: {
      toc: {
        depth: 5, searchDepth: 5
      },
      anchorLinks: false,
      remarkPlugins: {
        'remark-reading-time': {},
      },
    },
  },
  devtools: {
    enable: true
  }
})
