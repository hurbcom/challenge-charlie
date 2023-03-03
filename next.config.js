/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bing.com',
      },
    ],
  },
  webpack: (config) => {
    config.watchOptions = {
      pool: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};

module.exports = nextConfig
