/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');

const headerContent = `
/*.js
  Cache-Control: no-cache, no-store, must-revalidate

/*.css
  Cache-Control: no-cache, no-store, must-revalidate

/*
  Cache-Control: no-cache, no-store, must-revalidate
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-XSS-Protection: 1; mode=block
`;

fs.writeFileSync('./out/_headers', headerContent, { encoding: 'utf8' });
