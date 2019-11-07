/* eslint-disable @typescript-eslint/no-var-requires */

const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

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
    // From preact example
    if (options.isServer) {
      config.externals = ['react', 'react-dom', ...config.externals];
    }

    // From preact example
    config.resolve.alias = {
      ...config.resolve.alias,
      react: 'preact/compat',
      react$: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom$': 'preact/compat',
    };

    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(withCSS(nextConfig));
