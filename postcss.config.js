/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-easy-import'),
    require('tailwindcss'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./pages/**/*.{js,tsx}', './components/**/*.{js,tsx}'],
      defaultExtractor: (content) => content.match(/[\w-:/]+(?<!:)/g) || [],
    }),
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-reporter')({ clearReportedMessages: true }),
  ],
};
