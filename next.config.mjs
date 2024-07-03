/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gist.github.com',
            hostname: 'i.ibb.co',
          },
        ],
      },
};

export default nextConfig;
