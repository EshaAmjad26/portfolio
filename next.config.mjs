// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.jsdelivr.net',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
        },
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
        },
        {
          protocol: 'https',
          hostname: 'logo.svgcdn.com',
        },
      ],
    },
    async headers() {
      // Only apply aggressive caching in production
      if (process.env.NODE_ENV === 'production') {
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
      }
      // In development, don't cache aggressively
      return [];
    },
  };
  
  export default nextConfig;
  