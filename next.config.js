/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    paymentServer: process.env.paymentServer,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image-get.onrender.com',
            port: '',
            pathname: '/ashishkumar74624@gmail.com/Ecommerce/**',
          },
          {
            protocol:'https',
            hostname:"placehold.co",
            port:'',
            pathname:"/**"
          },
          {
            protocol:'https',
            hostname:"fakestoreapi.com",
            port:'',
            pathname:"/**"
          }
        ],
      },
}

module.exports = nextConfig
