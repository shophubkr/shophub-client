/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  transpilePackages: ["math-helpers"],
  images: {
    domains: ["picsum.photos"], // picsum.photos: 테스트 이미지를 위한 domain입니다.
  },
};

module.exports = nextConfig;
