/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sks.uskudar.edu.tr",
      },
    ],
  },
  staticPageGenerationTimeout: 999999,
};

export default nextConfig;
