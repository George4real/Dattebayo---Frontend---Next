import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['static.wikia.nocookie.net'],
    // Opcional: puedes usar remotePatterns para más control (Next.js 12.3+)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
      },
    ],
  },
  api: {
    responseLimit: false,
    externalResolver: true,
    bodyParser: {
      sizeLimit: '10mb',
    },
  }
}
export default nextConfig;
