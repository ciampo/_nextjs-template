/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');

const headerContent = `/*
  Cache-Control: public, max-age=60
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block`;

fs.writeFileSync('./out/_headers', headerContent, { encoding: 'utf8' });
