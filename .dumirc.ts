import { defineConfig } from 'dumi';
const favicon = "/logo.jpg"

export default defineConfig({
  themeConfig: {
    name: 'tangjiahui',
    footer: false,
    prefersColor: {
      default: 'light'
    },
    socialLinks: {
      'github': 'https://github.com/tangjiahui-cn'
    }
  },
  logo: favicon,
  favicons: [favicon],
  title: "tangjiahui's blog"
});
