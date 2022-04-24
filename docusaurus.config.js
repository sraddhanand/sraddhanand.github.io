// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevSecOps | SRE | Kubernetes | Hybrid Cloud',
  tagline: 'Principal Cloud Development Engineer - ML & AI',
  url: 'https://sraddhanand.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sraddhanand', // Usually your GitHub org/user name.
  projectName: 'sraddhanand.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sraddhanand',
        logo: {
          alt: 'Sraddhanand',
          src: 'img/cs.png',
        },
        items: [
          { to: "docs/aws/aws-aurora", label: "AWS" },
          { type: 'doc', docId: 'terraform/providers', position: 'left', label: 'Terraform'},
          { to: "docs/mongo/mongod_config", label: "CAP" },
          { to: "docs/docker/commands", label: "Containers" },
          { to: "docs/kubernetes/architecture", label: "Kubernetes" },
          { to: "docs/devops-resources", label: "DevOps" },
          { href: 'https://github.com/sraddhanand', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/sraddhanand-c/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/infracoder7',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sraddhanand',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@sraddhanand',
              },
            ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
