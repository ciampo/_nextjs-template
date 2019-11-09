/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

// Follows the convention for Netlify's _headers file
// Can't have tailored caching stategies because of https://github.com/zeit/next.js/issues/6303
// TODO: add CSP
const _headersContent = `
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-XSS-Protection: 1; mode=block
`;

console.log('\nGenerating Netlify headers...');

const ROOT_FOLDER = process.cwd();
const OUT_FOLDER = path.join(ROOT_FOLDER, 'out');

fs.writeFileSync(path.join(OUT_FOLDER, '_headers'), _headersContent, {
  encoding: 'utf8',
});

console.log('Netlify headers added successfully');
