export default function SkipLinks() {
	return (
		<div className='sr-only focus:not-sr-only'>
			<a
				href='#main-content'
				className='absolute top-4 left-4 z-50 bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium 
                          focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 
                          transform -translate-y-full focus:translate-y-0 transition-transform duration-150'
			>
				Přeskočit na hlavní obsah
			</a>
			<a
				href='#navigation'
				className='absolute top-4 left-32 z-50 bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium 
                          focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 
                          transform -translate-y-full focus:translate-y-0 transition-transform duration-150'
			>
				Přeskočit na navigaci
			</a>
			<a
				href='#contact'
				className='absolute top-4 left-64 z-50 bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium 
                          focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 
                          transform -translate-y-full focus:translate-y-0 transition-transform duration-150'
			>
				Přeskočit na kontakt
			</a>
		</div>
	);
}
