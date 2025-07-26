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
	title: 'Digitalizace Calderon - Zefektivněte chod vaší firmy',
	description:
		'Digitalizujeme dokumenty, procesy a účetnictví. Ušetřete čas a zvyšte efektivitu vaší firmy pomocí moderních digitálních řešení.',
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
	],
	authors: [{ name: 'Calderon', url: 'https://calderon.cz' }],
	creator: 'Calderon',
	publisher: 'Calderon',
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
			'Digitalizujeme dokumenty, procesy a účetnictví. Ušetřete čas a zvyšte efektivitu vaší firmy pomocí moderních digitálních řešení.',
		siteName: 'Calderon',
		images: [
			{
				url: '/images/logo_calderon.png',
				width: 1200,
				height: 630,
				alt: 'Calderon - Digitalizace firemních procesů',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Digitalizace Calderon - Zefektivněte chod vaší firmy',
		description:
			'Digitalizujeme dokumenty, procesy a účetnictví. Ušetřete čas a zvyšte efektivitu.',
		images: ['/images/logo_calderon.png'],
	},
	alternates: {
		canonical: 'https://calderon.cz',
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
