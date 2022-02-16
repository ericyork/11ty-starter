# README
This is a starter package for a static site generator built with 11ty, Alpine JS, Tailwind CSS, and Vite. [11ty](https://www.11ty.dev/) generates static pages from templates, [Alpine JS](https://alpinejs.dev/) and [Tailwind CSS](https://tailwindcss.com/) are libraries that allow for rapid development, and [Vite](https://vitejs.dev/) is a bundler and dev environment.

The important files to get the project started are `tailwind.config.js`, `postcss.config.js` `vite.config.js`, the hidden file `.eleventy.js`, and of course `package.json`. The hidden file `.gitignore` is recommended.

For these to work as-is, there must be an `src`, an `_site` and a `dist` directory at the top level.

In general, the build process has two steps. First, Eleventy compiles the html from templates and then Vite bundles the files with tailwind and serves them. There are two scripts for this: `npm run compile` and then `npm run full`.

So, to use this starter, download and unzip it. Then, change into the new directory and initialize npm like so:

```
~ $  cd path/to/these/files
~ $  npm install
```

Go ahead and make any adjustments you need to make, like replacing the favicon, renaming folders if you want, etc. Then, change something in `index.md` to test, and run the following commands:

```
~ $  npm run compile
~ $  npm run full
```

You should be able to see your site running with your changes in the browser at localhost:5000.
