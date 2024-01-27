/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cloudflare-ipfs.com', 'avatars.githubusercontent.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
