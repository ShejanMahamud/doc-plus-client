/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gist.github.com',
          },
        ],
      },
};

export default nextConfig;
