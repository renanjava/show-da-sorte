import path from 'path';

const nextConfig = {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  distDir: '.next',
};

export default nextConfig;
