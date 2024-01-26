/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  transpilePackages: ["math-helpers"], // math-helpers: 외부 워크스페이스를 사용하기 위한 속성입니다.
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
  images: {
    domains: ["picsum.photos"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: `${process.env.NEXT_PUBLIC_REMOTE_HOST}`,
      },
      {
        protocol: "http",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
