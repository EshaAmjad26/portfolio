// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*', // Apply headers to all routes
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Cache assets for 1 year
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  