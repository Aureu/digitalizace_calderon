'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import TypewriterEffect from './animations/TypewriterEffect';
import ScrollAnimation from './animations/ScrollAnimation';

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
			<ScrollAnimation
				animation='fade-up'
				className='max-w-4xl mx-auto text-center'
			>
				{/* Main Heading */}
				<div className='mb-6 sm:mb-8 max-w-4xl mx-auto'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-high-contrast leading-tight font-black mb-4'>
						Zefektivněte chod vaší firmy pomocí
					</h1>
					<div className='bg-brand-primary/20 text-brand-secondary px-4 py-3 sm:px-6 sm:py-4 rounded-xl inline-block'>
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
							className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'
						/>
					</div>
				</div>

				{/* Description */}
				<p className='text-base sm:text-lg md:text-xl text-medium-contrast mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0'>
					Digitalizujeme dokumenty, procesy a účetnictví. Ušetřete čas a zvyšte
					efektivitu pomocí moderních řešení.
				</p>

				{/* CTA Button */}
				<button
					onClick={handleCTAClick}
					className='group btn-primary px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl focus:outline-none focus:ring-4 focus:ring-brand-primary focus:ring-opacity-50 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto'
					aria-label='Přejít na kontaktní formulář'
				>
					<span className='flex items-center justify-center gap-3'>
						Získat konzultaci zdarma
						<ArrowRight className='w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300' />
					</span>
				</button>

				{/* Trust indicators */}
				<div className='mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-caption text-low-contrast px-4 sm:px-0'>
					<div className='flex items-center gap-3'>
						<div className='w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center'>
							<CheckCircle className='w-4 h-4 text-brand-primary' />
						</div>
						<span className='font-medium'>Bezplatná konzultace</span>
					</div>
					<div className='flex items-center gap-3'>
						<div className='w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center'>
							<Clock className='w-4 h-4 text-brand-primary' />
						</div>
						<span className='font-medium'>Rychlá implementace</span>
					</div>
					<div className='flex items-center gap-3'>
						<div className='w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center'>
							<Users className='w-4 h-4 text-brand-primary' />
						</div>
						<span className='font-medium'>Odborná podpora</span>
					</div>
				</div>
			</ScrollAnimation>
		</section>
	);
}
