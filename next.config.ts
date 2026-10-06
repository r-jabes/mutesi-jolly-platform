import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress Next.js development activity indicators in the UI
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
