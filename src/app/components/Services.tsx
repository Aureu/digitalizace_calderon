'use client';

import React from 'react';
import { BusinessIcons } from './icons/icons';
import DigitalTransform from './animations/DigitalTransform';
import AnimatedIcon from './animations/AnimatedIcon';
import DigitalizationWizard from './ui/DigitalizationWizard';

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
			className='bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1'
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
			className={`bg-gray-50 py-20 px-4 ${className}`}
			aria-label='Naše služby digitalizace'
		>
			<div className='max-w-6xl mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-brand-secondary mb-6'>
						Co digitalizujeme
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Zaměřujeme se na tři klíčové oblasti vaší firmy, které nejvíce
						profitují z digitální transformace
					</p>
				</div>

				{/* Services Grid */}
				<div className='grid md:grid-cols-3 gap-8'>
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
						<div className='flex flex-col items-center group'>
							<div className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:shadow-lg'>
								<BusinessIcons.timesSaving className='w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300' />
							</div>
							<span className='text-sm font-medium text-gray-700 group-hover:text-brand-secondary transition-colors duration-300'>
								Úspora času až 70%
							</span>
						</div>

						<div className='flex flex-col items-center group'>
							<div className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:shadow-lg'>
								<BusinessIcons.security className='w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300' />
							</div>
							<span className='text-sm font-medium text-gray-700 group-hover:text-brand-secondary transition-colors duration-300'>
								Bezpečné ukládání
							</span>
						</div>

						<div className='flex flex-col items-center group'>
							<div className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:shadow-lg'>
								<BusinessIcons.dataInsights className='w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300' />
							</div>
							<span className='text-sm font-medium text-gray-700 group-hover:text-brand-secondary transition-colors duration-300'>
								Real-time reporting
							</span>
						</div>

						<div className='flex flex-col items-center group'>
							<div className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:shadow-lg'>
								<BusinessIcons.support className='w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300' />
							</div>
							<span className='text-sm font-medium text-gray-700 group-hover:text-brand-secondary transition-colors duration-300'>
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
			</div>
		</section>
	);
}
