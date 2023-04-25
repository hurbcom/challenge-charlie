/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bing.com',
      },
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig
