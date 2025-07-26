import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// Enable standalone output for Docker deployment
	output: 'standalone',

	// Image optimization for production
	images: {
		unoptimized: false,
		domains: [],
	},

	// Experimental features disabled for Docker compatibility
	experimental: {
		// optimizeCss: true, // Disabled - causes issues with missing 'critters' module
	},
};

export default nextConfig;
