// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/palenight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ParrotOS Documentation',
  tagline: 'An important part of any operating system is documentation, the technical manuals which describe the operation and use of programs. As part of its efforts to create a high-quality free operating system, the Parrot Project is making every effort to provide all of its users with proper documentation in an easily accessible form.',
  url: 'https://parrotsec.org',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'parrot', // Usually your GitHub org/user name.
  // projectName: 'parrot-documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /**
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        **/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      defaultMode: 'dark',
      navbar: {
        /* title: 'ParrotOS', */
        logo: {
          alt: 'Parrot Logo',
          src: 'img/parrot-logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'introduction/what-is-parrot',
            position: 'left',
            label: 'Documentation',
          },
          /** {to: '/blog', label: 'Blog', position: 'left'}, **/
          {
            to: 'https://parrotsec.org/download',
            label: 'Download',
            position: 'left'
          },
          { to: 'https://parrotsec.org/contribute/',
            label: 'Contribute',
            position: 'left'
          },
          {
            href: 'https://gitlab.com/parrotsec',
            label: 'GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/parrotsec',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/parrotproject/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ParrotSec/'
              },
              {
                label: 'Telegram',
                href: 'https://t.me/parrotsecgroup'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://community.parrotsec.org',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/j7QTaCzAsm',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'GitLab',
                href: 'https://gitlab.com/parrotsec',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/parrotsec',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Team',
                to: 'https://parrotsec.org/team/',
              },
              {
                label: 'Partners',
                to: 'https://parrotsec.org/partners/',
              },
              {
                label: 'Donate',
                to: 'https://parrotsec.org/donate/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Parrot Security. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          path: 'docs'
        },
      ],
    ],
  /*
  customFields: {
		wallpaper: 'parrot_desktop.png',
	},
  */
};

module.exports = config;
