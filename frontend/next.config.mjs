import path from 'path';

export default {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  distDir: '.next',
  async headers() {
    return [
      {
        source: '/fonts.googleapis.com',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/fonts.googleapis.com/:path*',
        destination: 'https://fonts.googleapis.com/:path*',
        permanent: true,
      },
    ];
  },
};
