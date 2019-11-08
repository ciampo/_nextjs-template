/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');

// Can't had tailored caching stategies because of https://github.com/zeit/next.js/issues/6303

// TODO: add CSP
const headerContent = `
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-XSS-Protection: 1; mode=block
`;

fs.writeFileSync('./out/_headers', headerContent, { encoding: 'utf8' });
