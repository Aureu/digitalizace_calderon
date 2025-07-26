'use client';

import React from 'react';
import { BusinessIcons } from './icons/icons';
import DigitalTransform from './animations/DigitalTransform';
import AnimatedIcon from './animations/AnimatedIcon';
import DigitalizationWizard from './ui/DigitalizationWizard';
import ScrollAnimation from './animations/ScrollAnimation';

interface ServiceCardProps {
	icon: string;
	title: string;
	description: string;
	delay?: number;
}

interface ServicesProps {
	className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	icon,
	title,
	description,
	delay = 0,
}) => {
	const IconComponent = icon as keyof typeof BusinessIcons;
	const Icon = BusinessIcons[IconComponent];

	return (
		<div
			className='bg-white p-8 rounded-lg shadow-sm text-center'
			style={{ animationDelay: `${delay}ms` }}
		>
			{/* Icon */}
			<AnimatedIcon
				variant='scale'
				duration='medium'
				className='w-16 h-16 bg-gradient-to-br from-brand-primary to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'
			>
				<Icon className='w-8 h-8 text-white' />
			</AnimatedIcon>

			{/* Title */}
			<h3 className='text-xl font-semibold mb-4 text-brand-secondary'>
				{title}
			</h3>

			{/* Description */}
			<p className='text-gray-600 leading-relaxed'>{description}</p>
		</div>
	);
};

export default function Services({ className = '' }: ServicesProps) {
	const services = [
		{
			icon: 'documents',
			title: 'Dokumenty',
			description:
				'Převedeme vaše papírové dokumenty do digitální podoby s možností rychlého vyhledávání a organizace. Snížíte náklady na archivaci a zvýšíte dostupnost informací.',
		},
		{
			icon: 'processes',
			title: 'Procesy',
			description:
				'Automatizujeme opakující se úkoly a zoptimalizujeme workflow vaší firmy. Eliminujeme chyby způsobené lidským faktorem a urychlíme zpracování dat.',
		},
		{
			icon: 'accounting',
			title: 'Účetnictví',
			description:
				'Digitalizujeme finanční procesy pro lepší přehled a kontrolu nad financemi. Získáte real-time reporting a zjednodušíte daňové povinnosti.',
		},
	];

	return (
		<section
			className={`bg-gray-50 py-16 sm:py-20 px-4 ${className}`}
			aria-label='Naše služby digitalizace'
		>
			<div className='max-w-6xl mx-auto'>
				{/* Section Header */}
				<ScrollAnimation animation='fade-up'>
					<div className='text-center mb-12 sm:mb-16'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-brand-secondary mb-4 sm:mb-6'>
							Co digitalizujeme
						</h2>
						<p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0'>
							Zaměřujeme se na tři klíčové oblasti vaší firmy, které nejvíce
							profitují z digitální transformace
						</p>
					</div>
				</ScrollAnimation>

				{/* Services Grid */}
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							icon={service.icon}
							title={service.title}
							description={service.description}
							delay={index * 100}
						/>
					))}
				</div>

				{/* Additional Benefits */}
				<div className='mt-16 text-center'>
					<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto'>
						<div className='flex flex-col items-center'>
							<div className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center mb-3'>
								<BusinessIcons.timesSaving className='w-6 h-6 text-brand-primary' />
							</div>
							<span className='text-sm font-medium text-gray-700'>
								Úspora času až 70%
							</span>
						</div>

						<div className='flex flex-col items-center'>
							<div className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center mb-3'>
								<BusinessIcons.security className='w-6 h-6 text-brand-primary' />
							</div>
							<span className='text-sm font-medium text-gray-700'>
								Bezpečné ukládání
							</span>
						</div>

						<div className='flex flex-col items-center'>
							<div className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center mb-3'>
								<BusinessIcons.dataInsights className='w-6 h-6 text-brand-primary' />
							</div>
							<span className='text-sm font-medium text-gray-700'>
								Real-time reporting
							</span>
						</div>

						<div className='flex flex-col items-center'>
							<div className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center mb-3'>
								<BusinessIcons.support className='w-6 h-6 text-brand-primary' />
							</div>
							<span className='text-sm font-medium text-gray-700'>
								Odborná podpora
							</span>
						</div>
					</div>
				</div>

				{/* Digital Transformation Visualization */}
				<div className='mt-20'>
					<DigitalTransform />
				</div>

				{/* Interactive Digitalization Wizard */}
				<div className='mt-20'>
					<DigitalizationWizard />
				</div>

				{/* CTA Section */}
				<div className='mt-20 text-center bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8'>
					<h3 className='text-2xl font-bold text-brand-secondary mb-4'>
						Připraveni na digitální transformaci?
					</h3>
					<p className='text-lg text-gray-600 mb-6 max-w-2xl mx-auto'>
						Získejte osobní konzultaci s naším expertem a zjistěte, jak můžeme
						vaší firmě ušetřit čas a peníze.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<button
							onClick={() => {
								const contactSection = document.getElementById('contact');
								if (contactSection) {
									contactSection.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									});
								}
							}}
							className='btn-primary px-8 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-brand-primary focus:ring-opacity-50'
						>
							Získat konzultaci zdarma
						</button>
						<a
							href='tel:+420474777200'
							className='btn-outline px-8 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-brand-primary focus:ring-opacity-50'
						>
							Zavolat: +420 474 777 200
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
