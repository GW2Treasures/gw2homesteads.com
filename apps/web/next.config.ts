import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['@gw2homesteads.com/database'],
  experimental: {
    authInterrupts: true
  }
};

export default nextConfig;
