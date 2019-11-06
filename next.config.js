const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
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

    return config;
  }
};

module.exports = withBundleAnalyzer(
  withCSS(
    nextConfig
  )
);
