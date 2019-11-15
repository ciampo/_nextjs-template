/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  exportPathMap() {
    const pages = {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };

    ['test-a', 'test-b'].forEach((postId) => {
      pages[`/post/${postId}`] = { page: '/post/[id]', query: { id: postId } };
    });

    return pages;
  },
  webpack(config, options) {
    // From preact netx.js example
    if (options.isServer) {
      config.externals = ['react', 'react-dom', ...config.externals];
    }

    // From preact netx.js example
    config.resolve.alias = {
      ...config.resolve.alias,
      react: 'preact/compat',
      react$: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom$': 'preact/compat',
    };

    // Add custom plugins.
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Access values in the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    });

    // From the 'with-polyfills' netx.js example.
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js');
      }

      return entries;
    };

    return config;
  },
};

module.exports = withBundleAnalyzer(withCSS(nextConfig));
