import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    minimumCacheTTL: 60,
  },
  // Enable webpack optimizations
  webpack: (config) => {
    // Enable top-level await
    config.experiments.topLevelAwait = true;
    
    // Optimize for performance
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };
    
    return config;
  },
};

export default nextConfig;