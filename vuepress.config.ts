import { getDirname, path } from 'vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import theme from './.vuepress/theme.js'
import { viteBundler } from '@vuepress/bundler-vite'

const __dirname = getDirname(import.meta.url)
const resolve = (...dirs: string[]) => path.resolve(__dirname, ...dirs)

export default defineUserConfig({
  lang: 'zh-CN',
  locales: {
    '/': { lang: 'zh-CN', title: 'ross.dev', description: '热爱生活' },
  },
  dest: 'docs',
  public: resolve('public'),
  temp: resolve('.vuepress/.temp'),
  cache: resolve('.vuepress/.cache'),
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'keywords', content: 'ross.dev,fullstack,ross.dev,fullstack' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'msvalidate.01', content: 'F93FF013B8AA2553779A91388C14A0F7' }],
    ['meta', { name: 'google-site-verification', content: 'X5YSaTDn-pKqQBUKD_05_dQcxVItzEq7Rlbg2ZEU7AM' }],
  ],
  plugins: [googleAnalyticsPlugin({ id: 'G-TMXNCJR2K7' })],

  bundler: viteBundler({
    viteOptions: {
      server: {
        // https://github.com/vuepress/core/issues/1526
        // 此设置用于修复 每次新建 md文件后修改 permalink 会导致报错的问题
        // vuepress 不确定是否将此设置内置到 vuepress 中，因此目前在此设置
        fs: { cachedChecks: false },
      }
    }
  }),

  theme,
})
