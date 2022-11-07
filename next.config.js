/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  crossOrigin: "anonymous",
  async rewrites() {
    return [
      {
        source: "/user/create",
        destination: `${process.env.NEXT_API_ENDPOINT}/user`,
      },
      {
        source: "/user/info",
        destination: `${process.env.NEXT_API_ENDPOINT}/user/nickname`,
      },
      {
        source: "/user/update",
        destination: `${process.env.NEXT_API_ENDPOINT}/user`,
      },
      {
        source: "/user/delete",
        destination: `${process.env.NEXT_API_ENDPOINT}/user/address`,
      },
      {
        source: "/private_key",
        destination: `${process.env.NEXT_API_ENDPOINT}/auth/private`,
      },
      {
        source: "/double_check",
        destination: `${process.env.NEXT_API_ENDPOINT}/auth/validation`,
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
        source: "/item/create*",
        destination: `${process.env.NEXT_API_ENDPOINT}/item`,
      },
      {
        source: "/item/update",
        destination: `${process.env.NEXT_API_ENDPOINT}/item`,
      },
      {
        source: "/item/delete",
        destination: `${process.env.NEXT_API_ENDPOINT}/item/:path*`,
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
