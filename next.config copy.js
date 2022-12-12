/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 100,
  images: {
    unoptimized: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
