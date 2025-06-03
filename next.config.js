/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio-site',
  assetPrefix: '/portfolio-site/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
