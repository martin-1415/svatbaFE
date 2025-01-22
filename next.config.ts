import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // output: 'export'  //static site
};

module.exports = {
    images: {
        unoptimized: true, // in case of static sites
    },
    serverRuntimeConfig: {
        host: '0.0.0.0',
        port: 4001,
    },
}

export default nextConfig;
