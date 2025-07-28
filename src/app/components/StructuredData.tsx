export default function StructuredData() {
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Calderon',
		url: 'https://calderon.cz',
		logo: 'https://calderon.cz/images/logo_calderon.png',
		description:
			'Specializujeme se na digitalizaci firemních procesů, dokumentů a účetnictví.',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Dlouhá 3458/2a',
			addressLocality: 'Ústí nad Labem',
			postalCode: '400 01',
			addressCountry: 'CZ',
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+420474777200',
			email: 'kancelar@vkurzu.cz',
			contactType: 'customer service',
			availableLanguage: 'Czech',
		},
		sameAs: [],
	};

	const localBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': 'https://calderon.cz',
		name: 'Calderon',
		description: 'Digitalizace dokumentů, procesů a účetnictví pro firmy.',
		url: 'https://calderon.cz',
		telephone: '+420474777200',
		email: 'kancelar@vkurzu.cz',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Dlouhá 3458/2a',
			addressLocality: 'Ústí nad Labem',
			postalCode: '400 01',
			addressCountry: 'CZ',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 50.6606,
			longitude: 14.042,
		},
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '17:00',
		},
		areaServed: {
			'@type': 'Country',
			name: 'Czech Republic',
		},
	};

	const servicesSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Digitalizace firemních procesů',
		description:
			'Komplexní digitalizace dokumentů, procesů a účetnictví pro efektivnější chod firmy.',
		provider: {
			'@type': 'Organization',
			name: 'Calderon',
			url: 'https://calderon.cz',
		},
		areaServed: {
			'@type': 'Country',
			name: 'Czech Republic',
		},
		serviceType: [
			'Digitalizace dokumentů',
			'Optimalizace procesů',
			'Digitální účetnictví',
		],
	};

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationSchema),
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localBusinessSchema),
				}}
			/>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(servicesSchema),
				}}
			/>
		</>
	);
}
