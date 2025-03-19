/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "centralapps.hivefinty.com",
      },
    ],
  },
};

export default nextConfig;
