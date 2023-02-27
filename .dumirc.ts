import { defineConfig } from 'dumi';
import fs from 'fs';
const favicon = "/logo.jpg"
const styles = fs.readFileSync('./styles/light.css', 'utf-8')

export default defineConfig({
  themeConfig: {
    name: 'tangjiahui',
    footer: false,
    prefersColor: {
      default: 'light',
      switch: false
    },
    socialLinks: {
      'github': 'https://github.com/tangjiahui-cn'
    }
  },
  logo: favicon,
  favicons: [favicon],
  title: "tangjiahui's blog",
  styles: [
    styles
  ]
});
