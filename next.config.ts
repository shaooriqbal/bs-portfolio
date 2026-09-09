import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/boiler-servicing", destination: "/boiler-service", permanent: true },
      { source: "/boiler-servicing/", destination: "/boiler-service", permanent: true },
      { source: "/drainage", destination: "/drain-unblocking", permanent: true },
      { source: "/drainage/", destination: "/drain-unblocking", permanent: true },
      { source: "/radiator-installation", destination: "/radiator-installation-balancing", permanent: true },
      { source: "/gas-leak", destination: "/gas-leak-detection-pipe-repairs", permanent: true },
      { source: "/hot-and-cold-water-pipes", destination: "/hot-cold-water-pipes", permanent: true },
      { source: "/what-is-a-reasonable-call-out-charge-for-a-plumber", destination: "/guides/call-out-charges", permanent: true },
      { source: "/what-is-a-reasonable-call-out-charge-for-a-plumber/", destination: "/guides/call-out-charges", permanent: true },
    ];
  },
};

export default nextConfig;
