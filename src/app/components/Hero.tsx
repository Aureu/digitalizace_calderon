'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import TypewriterEffect from './animations/TypewriterEffect';

interface HeroProps {
	className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
	const handleCTAClick = () => {
		// Scroll to contact form
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<section
			className={`bg-white py-20 px-4 ${className}`}
			aria-label='Úvodní sekce'
		>
			<div className='max-w-4xl mx-auto text-center'>
				{/* Main Heading */}
				<h1 className='text-display md:text-6xl lg:text-7xl text-high-contrast mb-8 max-w-4xl mx-auto'>
					Zefektivněte chod vaší firmy pomocí{' '}
					<span className='bg-brand-primary/20 text-brand-secondary px-3 py-1 rounded-lg font-black'>
						<TypewriterEffect
							words={[
								'digitalizace',
								'automatizace',
								'modernizace',
								'optimalizace',
							]}
							typingSpeed={120}
							deletingSpeed={60}
							pauseTime={3000}
							className='min-h-[1.2em] inline-block'
						/>
					</span>
				</h1>

				{/* Description */}
				<p className='text-body-large md:text-xl text-medium-contrast mb-10 max-w-3xl mx-auto'>
					Digitalizujeme dokumenty, procesy a účetnictví. Ušetřete čas a zvyšte
					efektivitu pomocí moderních řešení.
				</p>

				{/* CTA Button */}
				<button
					onClick={handleCTAClick}
					className='group btn-primary px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl focus:outline-none focus:ring-4 focus:ring-brand-primary focus:ring-opacity-50'
					aria-label='Přejít na kontaktní formulář'
				>
					<span className='flex items-center justify-center gap-3'>
						Chci digitalizovat
						<ArrowRight className='w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300' />
					</span>
				</button>

				{/* Trust indicators */}
				<div className='mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-caption text-low-contrast'>
					<div className='flex items-center gap-3 group'>
						<div className='w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300'>
							<CheckCircle className='w-4 h-4 text-brand-primary group-hover:text-white transition-colors duration-300' />
						</div>
						<span className='group-hover:text-medium-contrast transition-colors duration-300 font-medium'>
							Bezplatná konzultace
						</span>
					</div>
					<div className='flex items-center gap-3 group'>
						<div className='w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300'>
							<Clock className='w-4 h-4 text-brand-primary group-hover:text-white transition-colors duration-300' />
						</div>
						<span className='group-hover:text-medium-contrast transition-colors duration-300 font-medium'>
							Rychlá implementace
						</span>
					</div>
					<div className='flex items-center gap-3 group'>
						<div className='w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300'>
							<Users className='w-4 h-4 text-brand-primary group-hover:text-white transition-colors duration-300' />
						</div>
						<span className='group-hover:text-medium-contrast transition-colors duration-300 font-medium'>
							Odborná podpora
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
