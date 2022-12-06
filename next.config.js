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
        source: "/check_nickname/:path*",
        destination: `${process.env.NEXT_API_ENDPOINT}/user/:path*/check`,
      },
      // {
      //   source: "/private_key",
      //   destination: `${process.env.NEXT_API_ENDPOINT}/auth/private`,
      // },
      // {
      //   source: "/double_check",
      //   destination: `${process.env.NEXT_API_ENDPOINT}/auth/validation`,
      // },
      {
        source: "/items",
        destination: `${process.env.NEXT_API_ENDPOINT}/item/list`,
      },
      {
        source: "/item/:path*",
        destination: `${process.env.NEXT_API_ENDPOINT}/item/:path*`,
      },
      {
        source: "/item/update",
        destination: `${process.env.NEXT_API_ENDPOINT}/item`,
      },
      {
        source: "/item/:path*/delete",
        destination: `${process.env.NEXT_API_ENDPOINT}/item/:path*`,
      },
      {
        source: "/item/:path/like",
        destination: `${process.env.NEXT_API_ENDPOINT}/item/:path*/starred`,
      },
      {
        source: "/item/:path/unlike",
        destination: `${process.env.NEXT_API_ENDPOINT}/item/:path*/unstarred`,
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
