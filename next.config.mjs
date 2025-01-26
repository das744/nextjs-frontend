/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false, // File system module
      net: false, // Networking module
      dns: false, // DNS module
    };
    return config;
  },
};

export default nextConfig;
  
