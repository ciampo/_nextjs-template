# _nextjs-template

This is a template for a next.js project using:

- next.js
- yarn
- typescript
- bundle analyzer
- preact
- tailwind (+ autoprefixer, cssnano, purgecss)
- lint styles via stylelint (integrated in next.js build)
- lint scripts via eslint / prettier / tsc (integrated in next.js build)
- git hooks (including pre-{commit, push} linting)
- page transitions (achieved through framer-motion)
- get contentful data
- use .env in code
- ie11 support w/ polyfills
- google analytics support
- comprehensive meta tags, favicons, webmanifest, preview sharing image

## Main scripts

### `yarn dev`

Starts the application in development mode (hot-code reloading, error reporting, etc)

### `yarn data`

Pulls data from contentful (make sure you added env variables both into a `.env` and into your Netlify project)

### `yarn static`

Builds the app in production mode and exports it as static site ready to be hosted on Netlify.

### `yarn serve:static`

Serves the static site. The application should be compiled with `yarn static` first.

## Other scripts

### `yarn build`

Compiles the application for production deployment (SSR).

### `yarn serve:ssr`

Starts and serves the application in production mode. The application should be compiled with `yarn build` first.

### `yarn analyze`

Builds the app and opens 2 graphs in the browser showing the app's bundle composition.

### `yarn test`

Lints scripts and styles.

### `yarn test:fix`

Lints scripts and styles, and tries to auto-fix any errors.

## Coming Soon

- use contentful content (e.g. pages)
- add contentful example models
- alternative layouts (other than MainLayout)
- CSP
- disable initial page animation

## Nice to have

- inline critical styles. It's not supported out of the box, but there may be a few inspirational examples (like [this one](https://github.com/zeit/next.js/pull/3451)). Also, follow [this GH issue](https://github.com/GoogleChromeLabs/critters/issues/44).
