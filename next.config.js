/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages用の設定
  basePath: '/portfolio-site',
  assetPrefix: '/portfolio-site/',
}

module.exports = nextConfig
