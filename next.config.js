/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages用の設定
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-site/' : '',
}

module.exports = nextConfig
