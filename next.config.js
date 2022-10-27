/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  crossOrigin: "anonymous",
  async rewrites() {
    return [
      {
        source: "/private_key",
        destination: `${process.env.NEXT_API_ENDPOINT}/private`,
      },
      {
        source: "/items",
        destination: `${process.env.NEXT_API_ENDPOINT}/item/list`,
      },
      {
        source: "/item/:path*",
        destination: `${process.env.NEXT_API_ENDPOINT}/item/:path*`,
      },
      {
        source: "/user",
        destination: `${process.env.NEXT_API_ENDPOINT}/user`,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = nextConfig;
