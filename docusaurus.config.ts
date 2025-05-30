import {themes as prismThemes} from 'prism-react-renderer';
import * as customThemes from './src/themes/prism'
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Spaghetti Punch',
  tagline: 'Gamedev and Tech Blog',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://spaghettipunch.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'spaghettipunch', // Usually your GitHub org/user name.
  projectName: 'spaghettipunch.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
            showReadingTime: true,
            routeBasePath: '/blog',
            blogTitle: 'Spaghetti Punch',
            blogDescription: 'Gamedev and Tech Blog',
            path: 'blog',
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'All Blog Posts',
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} SpaghettiPunch`,
            },

            // Useful options to enforce blogging best practices
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: ['./src/css/custom.scss'],
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/spaghettipunch-logo.svg',
    respectPrefersColorScheme: true,
    defaultMode: 'dark',
    navbar: {
      title: 'Spaghetti Punch',
      hideOnScroll: true,
      logo: {
        alt: 'Spaghetti Punch Blog Logo',
        src: 'img/spaghettipunch-logo.svg',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/SpaghettiPunch',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spaghetti Punch`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: customThemes.tokyonight,
      additionalLanguages: ['shell-session', 'bash', 'git', 'ini'],
      magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-terminal-command',
            line: 'terminal-command',
          },
          {
            className: 'code-block-terminal-command-multiline',
            line: 'terminal-command-multiline',
          },
        ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
