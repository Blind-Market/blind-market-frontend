/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  crossOrigin: "anonymous",
  // async rewrites() {
  // 	return [
  // 		{
  // 			source: "/ping",
  // 			destination: `${process.env.NEXT_PUBLIC_API_URL}/ping`,
  // 		},
  // 		{
  // 			source: "/private_key",
  // 			destination: `${process.env.NEXT_PUBLIC_API_URL}/private_key`,
  // 		},
  // 		{
  // 			source: "/items",
  // 			destination: `${process.env.NEXT_PUBLIC_API_URL}/items`,
  // 		},
  // 	];
  // },
};

module.exports = nextConfig;
