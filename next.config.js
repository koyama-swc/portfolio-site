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
  // スタイルシートの読み込みを確実にするための設定
  webpack: (config) => {
    return config;
  },
  // トレイリングスラッシュを追加
  trailingSlash: true,
}

module.exports = nextConfig
