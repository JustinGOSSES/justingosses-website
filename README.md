# justingosses-website
This repository builds the personal website justingosses.com. The website holds a blog, about me section, links to side projects, etc. This repository & website replace an existing 6 year old WordPress version of justingosses.com

## Tech Stack
Next.js & Tailwind CSS deployed on Azure static web apps

## Installation

```bash
npm install
```

## Development

First, run the development server:

```bash
npm start
```
or 
```bash
npm run dev
```

<!-- `npm start`

or

`npm run dev` -->

### Watching
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.

#### NOTE: A Common Pitfall
If you get errors like `npm ERR! Failed at the tailwind-nextjs-starter-blog@1.5.0 dev script 'next dev'.
npm ERR! Make sure you have the latest version of node.js and npm installed.` then check if you're using system node.js or the latest version. 
If you're using nvm, you can run `nvm list` to see what version of node your terminal window is running.

### Places to Change Settings & Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card on the projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`css/prism.css` - controls the styles associated with the code blocks. Feel free to customize it and use your preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.


#### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tailwind Nextjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

#### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## Deployment
- run `npm run build` . This runs the script `next build && next export` as defined in package.json and should output static website into a folder named 'out'.
- run `git add *`
- run `git commit -m updates`
- run `git push origin main` <= This will kick off a github actions script that should deploy the page to Azure Static Web Apps

## URL of Deployed Website
- https://witty-hill-0659b8610.1.azurestaticapps.net/
- https://justingosses.com

-------------------------

<!-- ![tailwind-nextjs-banner](/public/static/images/twitter-card.png) -->




## The Template this Website Started From
This website is a fork of the [Tailwind Nextjs Starter blog template](https://github.com/timlrx/tailwind-nextjs-starter-blog). It uses [Next.js](https://nextjs.org/) to build the HTML from static markdown and [Tailwind CSS](https://tailwindcss.com/) to handle the styling. It is a next.js based replacement for the more well known, at least as of 2022, Jekyll and Hugo individual blogs. The basic premise 
is write markdown for the content and only mess with CSS and JavaScript when you want to do so.

[![GitHub Repo stars](https://img.shields.io/github/stars/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/network/)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Ftimlrxx)](https://twitter.com/timlrxx)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/timlrx)](https://github.com/sponsors/timlrx)

Facing issues? Check the [FAQ page](https://github.com/timlrx/tailwind-nextjs-starter-blog/wiki) and do a search on past issues. Feel free to open a new issue if none has been posted previously.

<!-- ## Examples

- [Demo Blog](https://tailwind-nextjs-starter-blog.vercel.app/) - this repo
- [My personal blog](https://www.timlrx.com) - modified to auto-generate blog posts with dates
- [Aloisdg's cookbook](https://tambouille.vercel.app/) - with pictures and recipes!
- [GautierArcin's demo with next translate](https://tailwind-nextjs-starter-blog-seven.vercel.app/) - includes translation of mdx posts, [source code](https://github.com/GautierArcin/tailwind-nextjs-starter-blog/tree/demo/next-translate)
- [David Levai's digital garden](https://davidlevai.com/) - customized design and added email subscriptions
- [Thinh's Corner](https://thinhcorner.com/) - [customized layout](https://github.com/Th1nhNg0/th1nhng0.vercel.app/blob/5e73a420828d82f01e7147512a2c3273c4ec19f8/layouts/PostLayout.js) with sticky side table of contents
- [Leo's Blog](https://leohuynh.dev) - Tuan Anh Huynh's personal site. Add Snippets Page, Author Profile Card, Image Lightbox, ...
- [thvu.dev](https://thvu.dev) - Added `mdx-embed`, view count, reading minutes and more.
- [fiqrychoerudin.dev](https://www.fiqrychoerudin.dev/) - simple portfolio.
- [irvin.dev](https://www.irvin.dev/) - Irvin Lin's personal site. Added YouTube embedding.
- [the all JavaScript Blog](https://the-all-javascript-blog.vercel.app/) - a JavaScript enlightenment blog uses this
- [KirillSo.com](https://www.kirillso.com/) - Personal blog & website.
- [DevBoy Blog](https://devboy.vercel.app/) - M.Reza's personal blog
- [slightlysharpe.com](https://slightlysharpe.com) - [Tincre's](https://tincre.com) main company blog
- [blog.b00st.com](https://blog.b00st.com) - [b00st.com's](https://b00st.com) main music promotion blog
- [astrosaurus.me](https://astrosaurus.me/) - Ephraim Atta-Duncan's Personal Blog
- [dhanrajsp.me](https://dhanrajsp.me/) - Dhanraj's personal site and blog.
- [blog.r00ks.io](https://blog.r00ks.io/) - Austin Rooks's personal blog ([source code](https://github.com/Austionian/blog.r00ks)).
- [honghong.me](https://honghong.me) - Tszhong's personal website ([source code](https://github.com/tszhong0411/home))
- [alfoncode.com](https://alfoncode.com) - Alfonso García's personar website. Customized design ([source code](https://github.com/alfoncode/personal-web))

Using the template? Feel free to create a PR and add your blog to this list. -->

### Features of Tailwind Nextjs Starter Blog Template
- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- Lightweight, 45kB first load JS, uses Preact in production build
- Mobile-friendly view
- Light and dark theme
- Self-hosted font with [Fontsource](https://fontsource.org/)
- Supports [plausible](https://plausible.io/), [simple analytics](https://simpleanalytics.com/) and google analytics
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Math display supported via [KaTeX](https://katex.org/)
- Citation and bibliography support via [rehype-citation](https://github.com/timlrx/rehype-citation)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Flexible data retrieval with [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- Blog templates
- TOC component
- Support for nested routing of blog posts
- Newsletter component with support for mailchimp, buttondown, convertkit and klaviyo
- Supports [giscus](https://github.com/laymonage/giscus), [utterances](https://github.com/utterance/utterances) or disqus
- Projects page
- Preconfigured security headers
- SEO friendly with RSS feed, sitemaps and more!


<!-- 2. Personalize `siteMetadata.js` (site related information)
3. Modify the content security policy in `next.config.js` if you want to use
   any analytics provider or a commenting solution other than giscus.
4. Personalize `authors/default.md` (main author)
5. Modify `projectsData.js`
6. Modify `headerNavLinks.js` to customize navigation links
7. Add blog posts
8. Deploy on Vercel -->

<!-- ## Installation

```bash
npm install
```

## Development

First, run the development server:

```bash
npm start
```

or

```bash
npm run dev
``` -->


## Support the Template

Using the template? Support their effort by giving it a star on GitHub, sharing your own blog and giving a shoutout on Twitter or becoming a project [sponsor](https://github.com/sponsors/timlrx).

## Licence

Nextjs Tailwind Starter Blog template has License of [MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE) © [Timothy Lin](https://www.timrlx.com)

Any other code by JustinGosses also has MIT license. Content copyright Justin Gosses