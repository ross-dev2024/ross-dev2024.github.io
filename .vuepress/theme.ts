import { plumeTheme } from 'vuepress-theme-plume'
import notes from './notes/index.js'
import navbar from './navbar.js'

export default plumeTheme({
  logo: '/logo.png',
  hostname: 'https://wangjw.cn/',
  repo: 'https://github.com/ross-dev2024',
  docsDir: 'src',
  contributors: false,

  navbar,
  notes,

  avatar: {
    name: 'ross.dev',
    url: '/images/blogger-fav.png',
    description: '世间的美好总是不期而遇',
  },
  social: [
    { icon: 'github', link: 'https://github.com/ross-dev2024' },
    // { icon: 'discord', link: 'https://discord.gg/ZPV9tQyRuh' },
  ],

  editLinkText: '在 GitHub 上编辑此页',
  // footer: { copyright: 'Copyright © 2021-present pengzhanbo' },

  plugins: {
    externalLinkIcon: false,
    baiduTongji: { key: '49ebcb8d1abfcde890ef6f320a101db7' },
    shiki: { twoslash: true },
    markdownEnhance: { demo: true },
    markdownPower: { caniuse: true, jsfiddle: true, },

    docsearch: {
      appId: 'KRJOJ00KBL',
      apiKey: '3f3b13613235873fbcbc9d304de18126',
      indexName: 'ross.dev',
    },

    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'ross-dev2024/ross-dev2024.github.io',
      repoId: 'R_kgDOM29lxQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOM29lxc4Ci5Jd',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
      darkTheme: 'dark_protanopia',
      lightTheme: 'light_protanopia',
    },
  },
})
