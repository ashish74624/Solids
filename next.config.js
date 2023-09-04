/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image-get.onrender.com',
            port: '',
            pathname: '/ashishkumar74624@gmail.com/Ecommerce/**',
          },
        ],
      },
}

module.exports = nextConfig
