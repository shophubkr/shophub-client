/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  transpilePackages: ["math-helpers"],
};

module.exports = nextConfig;
