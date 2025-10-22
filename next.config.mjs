/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Avoid requiring eslint in production build environments
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
