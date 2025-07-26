import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		// Simple health check - you can add more sophisticated checks here
		// For example: database connectivity, external service availability, etc.

		const healthData = {
			status: 'healthy',
			timestamp: new Date().toISOString(),
			uptime: process.uptime(),
			environment: process.env.NODE_ENV,
			version: process.env.npm_package_version || '1.0.0',
		};

		return NextResponse.json(healthData, {
			status: 200,
			headers: {
				'Cache-Control': 'no-cache, no-store, must-revalidate',
			},
		});
	} catch (error) {
		console.error('Health check failed:', error);

		return NextResponse.json(
			{
				status: 'unhealthy',
				timestamp: new Date().toISOString(),
				error: 'Health check failed',
			},
			{ status: 503 }
		);
	}
}

// Handle HEAD requests for simple health checks
export async function HEAD(request: NextRequest) {
	try {
		return new NextResponse(null, { status: 200 });
	} catch (error) {
		return new NextResponse(null, { status: 503 });
	}
}
