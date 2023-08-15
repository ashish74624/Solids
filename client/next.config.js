/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image-get.vercel.app',
            port: '',
            pathname: '/Ecommerce/**',
          },
        ],
      },
}

module.exports = nextConfig
