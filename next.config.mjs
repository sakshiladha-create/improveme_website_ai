/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.improvemeinstitute.com",
      },
    ],
  },
};

export default nextConfig;
