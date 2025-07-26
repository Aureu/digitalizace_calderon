import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// Enable standalone output for Docker deployment
	output: 'standalone',

	// Image optimization for production
	images: {
		unoptimized: false,
		domains: [],
	},

	// Experimental features for better performance
	experimental: {
		optimizeCss: true,
	},
};

export default nextConfig;
