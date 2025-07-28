import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import StructuredData from './components/StructuredData';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
	title: 'Digitalizace Calderon - Zefektivněte chod vaší firmy | Ústí nad Labem',
	description:
		'Profesionální digitalizace dokumentů, procesů a účetnictví. Ušetřete až 70% času a zvyšte efektivitu vaší firmy. Bezplatná konzultace. Calderon Czech Republic s.r.o.',
	keywords: [
		'digitalizace',
		'digitalizace dokumentů',
		'digitalizace procesů',
		'digitální účetnictví',
		'automatizace',
		'efektivita',
		'digitální transformace',
		'Ústí nad Labem',
		'digitalizace firem',
		'Calderon',
		'Czech Republic',
		'úspora času',
		'firemní procesy',
		'elektronické dokumenty',
		'cloud řešení',
	],
	authors: [{ name: 'Calderon Czech Republic s.r.o.', url: 'https://calderon.cz' }],
	creator: 'Calderon Czech Republic s.r.o.',
	publisher: 'Calderon Czech Republic s.r.o.',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'cs_CZ',
		url: 'https://calderon.cz',
		title: 'Digitalizace Calderon - Zefektivněte chod vaší firmy',
		description:
			'Profesionální digitalizace dokumentů, procesů a účetnictví. Ušetřete až 70% času a zvyšte efektivitu vaší firmy. Bezplatná konzultace.',
		siteName: 'Calderon Czech Republic s.r.o.',
		images: [
			{
				url: '/images/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Digitalizace Calderon - Zefektivněte chod vaší firmy',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Digitalizace Calderon - Zefektivněte chod vaší firmy',
		description:
			'Profesionální digitalizace dokumentů, procesů a účetnictví. Ušetřete až 70% času a zvyšte efektivitu vaší firmy.',
		images: ['/images/twitter-card.png'],
		creator: '@calderon_cz',
		site: '@calderon_cz',
	},
	alternates: {
		canonical: 'https://calderon.cz',
	},
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.png', type: 'image/png' },
			{ url: '/favicon.ico', type: 'image/x-icon' },
		],
		apple: [
			{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{
				rel: 'mask-icon',
				url: '/safari-pinned-tab.svg',
				color: '#2563eb',
			},
			{
				rel: 'manifest',
				url: '/manifest.json',
			},
		],
	},
	metadataBase: new URL('https://calderon.cz'),
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		me: 'your-me-verification-code',
	},
	other: {
		'google-site-verification': 'your-google-verification-code',
		'msvalidate.01': 'your-bing-verification-code',
		'facebook-domain-verification': 'your-facebook-verification-code',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='cs'>
			<head>
				<StructuredData />
			</head>
			<body className={`${inter.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
