/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    env: {
      WORDPRESS_API_URL: "http://localhost:10008/wp-json",
    },
  };
  
  export default nextConfig;
  
