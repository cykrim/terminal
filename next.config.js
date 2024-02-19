//module.exports = {
//  assetPrefix: '.',
//};

const nextConfig = {
  output: 'export',
  assetPrefix: '.',
  //basePath: '/terminal',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'out',
}

module.exports = nextConfig