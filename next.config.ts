import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [new URL('https://fakestoreapi.com/img/**'), new URL('https://cdn.dummyjson.com/product-images/**')],
  },
};

export default nextConfig;
