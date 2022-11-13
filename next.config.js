/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["qcloud-cdn-static.lonepixel.cn"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
