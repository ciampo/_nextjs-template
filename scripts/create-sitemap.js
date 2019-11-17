/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
require('dotenv').config();

const ROOT_FOLDER = process.cwd();
const PUBLIC_FOLDER = path.join(ROOT_FOLDER, 'public');

const sitemapPages = ['/', '/about'];

const sitemapString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapPages
    .map((slug) => `<url><loc>${process.env.CANONICAL_URL}${slug}</loc></url>`)
    .join('\n  ')}
</urlset>`;

fs.writeFileSync(path.join(PUBLIC_FOLDER, 'sitemap.xml'), sitemapString, { encoding: 'utf8' });
