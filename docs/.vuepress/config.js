const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Kalaam Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: `https://raw.githubusercontent.com/Kalaam-Programming-Language/Kalaam/master/src/assets/Logo.png` }],
    ['meta', { name: 'theme-color', content: '#fbd31b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Github',
        link: 'https://github.com/Kalaam-Programming-Language/Kalaam'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Commands',
          collapsable: false,
          children: [
            "commands/print.md",
            "commands/input.md",
            "commands/if.md",
            "commands/loop.md",
            "commands/while.md",
            "commands/length.md",
            "commands/push.md",
            "commands/create.md",
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          children: [
            "examples/calculator.md",
            "examples/create.md",
            "examples/prime.md",
            "examples/function.md",
            "examples/fibonacci.md",
            "examples/reverse.md",
            "examples/road.md",
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
