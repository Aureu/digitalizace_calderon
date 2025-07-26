import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
	name: string;
	email: string;
	phone?: string;
	message: string;
}

// Validation helper
function validateContactData(data: any): {
	isValid: boolean;
	errors: string[];
} {
	const errors: string[] = [];

	if (!data.name || data.name.trim().length < 2) {
		errors.push('Jméno musí mít alespoň 2 znaky');
	}

	if (
		!data.email ||
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
	) {
		errors.push('Neplatný formát emailu');
	}

	if (data.phone && !/^(\+420)?[0-9\s]{9,}$/.test(data.phone)) {
		errors.push('Neplatný formát telefonu');
	}

	if (!data.message || data.message.trim().length < 10) {
		errors.push('Zpráva musí mít alespoň 10 znaků');
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
}

// Simulate email sending (replace with actual email service)
async function sendEmail(data: ContactFormData): Promise<boolean> {
	// TODO: Implement actual email sending
	// Options: SendGrid, Resend, Nodemailer, etc.

	console.log('📧 Simulace odeslání emailu:');
	console.log('📧 Od:', data.email);
	console.log('📧 Jméno:', data.name);
	console.log('📧 Telefon:', data.phone || 'Nezadán');
	console.log('📧 Zpráva:', data.message);

	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 500));

	// Simulate 95% success rate
	return Math.random() > 0.05;
}

// Rate limiting helper (simple in-memory store)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const windowMs = 15 * 60 * 1000; // 15 minutes
	const maxRequests = 5; // max 5 requests per 15 minutes

	const entry = rateLimitStore.get(ip);

	if (!entry || now > entry.resetTime) {
		rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
		return true;
	}

	if (entry.count >= maxRequests) {
		return false;
	}

	entry.count++;
	return true;
}

export async function POST(request: NextRequest) {
	try {
		// Get client IP for rate limiting
		const clientIP =
			request.headers.get('x-forwarded-for')?.split(',')[0] ??
			request.headers.get('x-real-ip') ??
			'unknown';

		// Check rate limit
		if (!checkRateLimit(clientIP)) {
			return NextResponse.json(
				{
					success: false,
					message: 'Příliš mnoho požadavků. Zkuste to prosím později.',
				},
				{ status: 429 }
			);
		}

		// Parse request body
		const body = await request.json();

		// Validate data
		const validation = validateContactData(body);
		if (!validation.isValid) {
			return NextResponse.json(
				{
					success: false,
					message: 'Neplatná data formuláře',
					errors: validation.errors,
				},
				{ status: 400 }
			);
		}

		const contactData: ContactFormData = {
			name: body.name.trim(),
			email: body.email.trim().toLowerCase(),
			phone: body.phone?.trim(),
			message: body.message.trim(),
		};

		// Send email
		const emailSent = await sendEmail(contactData);

		if (!emailSent) {
			return NextResponse.json(
				{
					success: false,
					message: 'Chyba při odesílání emailu. Zkuste to prosím později.',
				},
				{ status: 500 }
			);
		}

		// Log successful submission (for analytics)
		console.log('✅ Úspěšné odeslání formuláře:', {
			timestamp: new Date().toISOString(),
			name: contactData.name,
			email: contactData.email,
			hasPhone: !!contactData.phone,
			messageLength: contactData.message.length,
			ip: clientIP,
		});

		return NextResponse.json(
			{
				success: true,
				message: 'Zpráva byla úspěšně odeslána. Brzy se vám ozveme!',
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('❌ Chyba API /contact:', error);

		return NextResponse.json(
			{
				success: false,
				message: 'Interní chyba serveru. Zkuste to prosím později.',
			},
			{ status: 500 }
		);
	}
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
	return new NextResponse(null, {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		},
	});
}
