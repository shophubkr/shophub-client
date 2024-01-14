/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["picsum.photos"], // picsum.photos: 테스트 이미지를 위한 domain입니다.
  },
  transpilePackages: ["math-helpers"], // math-helpers: 외부 워크스페이스를 사용하기 위한 속성입니다.
};

module.exports = nextConfig;
