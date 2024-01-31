/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
    domains: ["assets.acme.com"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
