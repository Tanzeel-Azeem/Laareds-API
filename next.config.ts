import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.pixabay.com",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        hostname: "images.ctfassets.net",
      },
      {
        hostname : 'plus.unsplash.com'
      },
    ],
  },
};

export default nextConfig;
