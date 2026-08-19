import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "?v=2",
      },
    ],
  },
};

export default nextConfig;
