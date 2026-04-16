/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.improvemeinstitute.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "best-excitement-b109c761d6.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "best-excitement-b109c761d6.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
