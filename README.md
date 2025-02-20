# Nuxt 3 + Tailwind CSS + DaisyUI Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/1fcf26af-7f44-4e56-abe5-94ae4073f109/deploy-status)](https://app.netlify.com/sites/requiem-blog/deploys)

Personal blog made by [Nuxt 3](https://nuxt.com/)
Click [Link](https://requiem-blog.netlify.app/) to see the page

## Setup
### Install dependencies
```bash
yarn install
````

### Development
```bash
yarn dev
```
The website will run on port 3005

### Production
Build the application for production:
```bash
yarn build
```

### Preview build:
```bash
yarn preview
```

## config
### .env
Check `.env.example` file in project directory.
### app.config.ts
| Name                 | Description             |
|----------------------|-------------------------|
| startedAt            | First day to start blog |
| github               | github links            |
| blogCategories       | blog categories         |
| blogTags.programming | Programming tags        |
| showcaseCategories   | Showcase categories     |
| showcaseTags         | Showcase tags           |
| profile              | Blog Owner profile      |

## Packages
### Nuxt Modules
- [@nuxt/content](https://content.nuxtjs.org/): Content made easy for Vue Developers
- [@pinia/nuxt](https://pinia.vuejs.org/ssr/nuxt.html) - Pinia module for Nuxt
  - [pinia](https://nuxt.com/modules/pinia) - Type Safe, Extensible, and Modular by design. Forget you are even using a store.
- [@nuxtjs/i18n](https://github.com/nuxt-modules/i18n) - vueI18n module for Nuxt 3
- [@vueuse/nuxt]() - vueuse module for Nuxt 3
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxt.dev/) - Tailwind module for Nuxt 3
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) - Dark and Light mode with auto detection made easy with Nuxt
- [@nuxt/devtools]() - Nuxt devtool. It's currently beta.
- [nuxt-simple-robots]() - generate robots.txt
- [nuxt-simple-sitemap]() - generate sitemap
### Relative with Content
- [remark-reading-time](https://www.npmjs.com/package/remark-reading-time) - Add reading time
### ETC
- [tailwindcss](https://tailwindcss.com/)= Tailwind css
  - [postcss-custom-properties](https://www.npmjs.com/package/postcss-custom-properties) - Fix ```nuxt Cannot start nuxt: Cannot find module 'postcss-custom-properties'``` error
- [daisyui](https://daisyui.com/) - Tailwind based UI Framework
- [theme-change](https://github.com/saadeghi/theme-change) - Change theme with daisyui
- [dayjs](https://day.js.org/): 
- [fast-glob]() - Find all files under specific directory
- ~~[vue-gtag]()~~
- [vue-gtag-next]()
- [animate.css](https://animate.style/) - A library of ready-to-use, cross-browser animations
- [sitemap](https://github.com/ekalinin/sitemap.js) - Generate sitemap
- ~~[vite-pwa](https://github.com/vite-pwa/nuxt)~~
- [consola](https://github.com/unjs/consola) - Fix the error of consola
- [drizzle-orm]() - ORM
  - [drizzle-kit]()

## :file_folder: Folder structure
See more detail to click the [Link](https://nuxt.com/docs/guide/directory-structure/nuxt)
```text
├─ .github/                     # Files Relative wth Github (GitHub Actions)
├─ assets/                      # Assets (Videos, fonts ...)
├─ components/                  # Components
├─ content/                     # Content ( .md, .mdx ...)
├─ db/                          # Drizzle ORM Database
├─ layouts/                     # Layouts
├─ locales/                     # i18n locales files
├─ node_modules/                # node modules
├─ pages/                       # Pages
├─ plugins/                     # Vue Plugins (Server, Client), Automatically adjust
├─ public/                      # Assets (images ...)
├─ server/                      # Server files
│  ├─ api/                      # API, File name will be path
│  ├─ public/                   # Public Data for server
│  ├─ routes/                   # Generate page from serverside
├─ stores/                      # Pinia store
├─ styles/                      # CSS Files
├─ types/                       # Typescript handler (Types, class, Interface, declare and constant variables ...)
├─ .eslintrc.cjs                # Eslint config.
├─ .gitignore                   # gitignore.
├─ nitro.config.ts              # Nitro build config.
├─ app.vue                      # App vue file
├─ app.config.ts                # App config
├─ nuxt.config.ts               # Nuxt 3 config
├─ package.json                 # Package.json
├─ README.md                    # README.md
├─ tailwind.config.js           # Tailwind CSS config.
├─ tsconfig.json                # Typescript config
```

## Contributors
Thank you for helping me to make better blog.

[//]: # (max 7 td in each tr)
[//]: # (<a href="https://github.com/kkan0615/blog-nuxt/commits?author=kkan0615" title="Examples">💡</a> )
[//]: # (<a href="https://github.com/kkan0615/blog-nuxt/commits?author=kkan0615" title="Tests">⚠️</a>)
[//]: # (<a href="https://github.com/kkan0615/blog-nuxt/commits?author=kkan0615" title="Ideas, Planning, & Feedback">🤔</a>)
[//]: # (<a href="https://github.com/kkan0615/blog-nuxt/issues?q=author%3Akkan0615" title="Bug reports">🐛</a>)
<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/kkan0615">
          <img src="https://avatars.githubusercontent.com/u/46660361?v=4?s=64" width="64px;" alt="Youngjin Kwak"/><br /><sub><b>Youngjin Kwak</b></sub>
        </a><br />
        <a href="https://github.com/kkan0615/blog-nuxt/commits?author=kkan0615" title="Code">💻</a> 
        <a href="https://github.com/kkan0615/blog-nuxt/commits?author=kkan0615" title="Maintenance">🚧</a>
        <a href="https://github.com/kkan0615/blog-nuxt/commits?author=kkan0615" title="Documentation">📖</a> 
        <a href="https://github.com/kkan0615/blog-nuxt/commits?author=kkan0615" title="Design">🎨</a>
      </td>
    </tr>
  </tbody>
</table>

## Supports
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/youngjinkwak)

<img src="./public/donations/paypal-qrcode.png" alt="paypal" width="250" height="250">

[![](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/youngjin_kwak)
## Reference Sites
- [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
- [deployment documentation](https://nuxt.com/docs/getting-started/deployment)
- [Github - Nuxt](https://github.com/nuxt/nuxt)
- [Nuxt Tailwind with DaisyUI and color mode.](https://tailwindcss.nuxtjs.org/examples/daisyui)
