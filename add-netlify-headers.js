/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');

const headerContent = `

/*
  Cache-Control: no-cache, no-store, must-revalidate
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block

*.js
  Cache-Control: no-cache, no-store, must-revalidate

*.css
  Cache-Control: no-cache, no-store, must-revalidate
`;

fs.writeFileSync('./out/_headers', headerContent, { encoding: 'utf8' });
