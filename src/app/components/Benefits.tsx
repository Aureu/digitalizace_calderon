'use client';

import React from 'react';
import { BusinessIcons } from './icons/icons';
import AnimatedIcon from './animations/AnimatedIcon';

interface BenefitCardProps {
	icon: string;
	title: string;
	description: string;
	metric?: string;
	delay?: number;
}

interface BenefitsProps {
	className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
	icon,
	title,
	description,
	metric,
	delay = 0,
}) => {
	const IconComponent = icon as keyof typeof BusinessIcons;
	const Icon = BusinessIcons[IconComponent];

	return (
		<div
			className='bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 group'
			style={{ animationDelay: `${delay}ms` }}
		>
			{/* Icon */}
			<div className='flex items-center justify-between mb-4'>
				<AnimatedIcon
					variant='bounce'
					duration='medium'
					className='w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center group-hover:bg-brand-primary shadow-sm group-hover:shadow-md'
				>
					<Icon className='w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300' />
				</AnimatedIcon>
				{metric && (
					<span className='text-2xl font-bold text-brand-primary'>
						{metric}
					</span>
				)}
			</div>

			{/* Content */}
			<h3 className='text-xl font-semibold mb-3 text-brand-secondary'>
				{title}
			</h3>
			<p className='text-gray-600 leading-relaxed'>{description}</p>
		</div>
	);
};

export default function Benefits({ className = '' }: BenefitsProps) {
	const benefits = [
		{
			icon: 'timesSaving',
			title: 'Úspora času',
			description:
				'Automatizace rutinních úkolů vám ušetří až 70% času stráveného administrativou. Zaměstnanci se mohou věnovat důležitějším aktivitám.',
			metric: '70%',
		},
		{
			icon: 'automation',
			title: 'Automatizace procesů',
			description:
				'Eliminujte lidské chyby a zrychlete zpracování dat pomocí inteligentních automatizovaných workflow.',
			metric: '24/7',
		},
		{
			icon: 'costReduction',
			title: 'Snížení nákladů',
			description:
				'Digitalizace snižuje náklady na papír, archivaci a ruční zpracování. Průměrná úspora činí 40% provozních nákladů.',
			metric: '40%',
		},
		{
			icon: 'dataInsights',
			title: 'Lepší přehled',
			description:
				'Získejte real-time data a detailní reporty o výkonnosti vaší firmy. Rozhodujte se na základě přesných informací.',
			metric: '∞',
		},
		{
			icon: 'security',
			title: 'Bezpečnost dat',
			description:
				'Moderní šifrování a zálohování chrání vaše citlivé informace lépe než jakékoli fyzické úložiště.',
			metric: '256bit',
		},
		{
			icon: 'scalability',
			title: 'Skalabilita',
			description:
				'Digitální řešení rostou s vaší firmou. Jednoduše přidávejte nové funkce podle potřeb vašeho byznysu.',
			metric: '∞',
		},
	];

	const testimonials = [
		{
			company: 'TechStart s.r.o.',
			quote: 'Digitalizace nám ušetřila 15 hodin týdně na administrativu.',
			author: 'Jan Novák, CEO',
		},
		{
			company: 'ProServis a.s.',
			quote: 'Kontrola financí je nyní otázkou několika kliků.',
			author: 'Marie Svobodová, CFO',
		},
	];

	return (
		<section
			className={`bg-white py-20 px-4 ${className}`}
			aria-label='Výhody digitalizace'
		>
			<div className='max-w-6xl mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-brand-secondary mb-6'>
						Proč digitalizovat vaši firmu?
					</h2>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						Digitalizace není jen trend, ale nutnost pro konkurenceschopnost v
						moderním světě. Podívejte se na konkrétní benefity, které přinese
						vaší firmě.
					</p>
				</div>

				{/* Benefits Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
					{benefits.map((benefit, index) => (
						<BenefitCard
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							metric={benefit.metric}
							delay={index * 100}
						/>
					))}
				</div>

				{/* Statistics Bar */}
				<div className='bg-gray-50 rounded-lg p-8 mb-16'>
					<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
						<div>
							<div className='text-3xl font-bold text-brand-primary mb-2'>
								500+
							</div>
							<div className='text-sm text-gray-600'>Spokojených klientů</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-brand-primary mb-2'>
								50TB+
							</div>
							<div className='text-sm text-gray-600'>Digitalizovaných dat</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-brand-primary mb-2'>
								99.9%
							</div>
							<div className='text-sm text-gray-600'>Uptime dostupnost</div>
						</div>
						<div>
							<div className='text-3xl font-bold text-brand-primary mb-2'>
								24/7
							</div>
							<div className='text-sm text-gray-600'>Technická podpora</div>
						</div>
					</div>
				</div>

				{/* Testimonials */}
				<div className='grid md:grid-cols-2 gap-8'>
					{testimonials.map((testimonial, index) => (
						<div
							key={testimonial.company}
							className='bg-gray-50 p-6 rounded-lg'
						>
							<blockquote className='text-gray-700 mb-4 italic'>
								&ldquo;{testimonial.quote}&rdquo;
							</blockquote>
							<div className='flex items-center'>
								<div className='w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center mr-3'>
									<span className='text-white font-semibold'>
										{testimonial.author.charAt(0)}
									</span>
								</div>
								<div>
									<div className='font-semibold text-brand-secondary'>
										{testimonial.author}
									</div>
									<div className='text-sm text-gray-500'>
										{testimonial.company}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Before/After Case Study */}
				<div className='bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 mb-16'>
					<div className='text-center mb-8'>
						<h3 className='text-2xl font-bold text-brand-secondary mb-4'>
							Příběh transformace: TechStart s.r.o.
						</h3>
						<p className='text-gray-600'>
							Jak digitalizace změnila chod firmy za 3 měsíce
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
						{/* Before */}
						<div className='bg-red-50 border border-red-200 rounded-lg p-6'>
							<div className='flex items-center mb-4'>
								<div className='w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3'>
									<span className='text-red-600 font-bold text-sm'>PŘED</span>
								</div>
								<h4 className='font-semibold text-red-800'>
									Problémy s dokumenty
								</h4>
							</div>
							<ul className='space-y-3 text-sm text-red-700'>
								<li className='flex items-start'>
									<span className='text-red-500 mr-2'>❌</span>
									<span>5 hodin týdně hledání dokumentů v archívech</span>
								</li>
								<li className='flex items-start'>
									<span className='text-red-500 mr-2'>❌</span>
									<span>Ztracené faktury a smlouvy</span>
								</li>
								<li className='flex items-start'>
									<span className='text-red-500 mr-2'>❌</span>
									<span>Ruční vyplňování stejných údajů</span>
								</li>
								<li className='flex items-start'>
									<span className='text-red-500 mr-2'>❌</span>
									<span>Chyby v přepisování a výpočtech</span>
								</li>
								<li className='flex items-start'>
									<span className='text-red-500 mr-2'>❌</span>
									<span>Nedostupnost informací mimo kancelář</span>
								</li>
							</ul>
						</div>

						{/* After */}
						<div className='bg-green-50 border border-green-200 rounded-lg p-6'>
							<div className='flex items-center mb-4'>
								<div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3'>
									<span className='text-green-600 font-bold text-sm'>PO</span>
								</div>
								<h4 className='font-semibold text-green-800'>
									Digitální efektivita
								</h4>
							</div>
							<ul className='space-y-3 text-sm text-green-700'>
								<li className='flex items-start'>
									<span className='text-green-500 mr-2'>✅</span>
									<span>Vyhledání dokumentu za 10 sekund</span>
								</li>
								<li className='flex items-start'>
									<span className='text-green-500 mr-2'>✅</span>
									<span>Automatické zálohování a archivace</span>
								</li>
								<li className='flex items-start'>
									<span className='text-green-500 mr-2'>✅</span>
									<span>Automatické vyplňování formulářů</span>
								</li>
								<li className='flex items-start'>
									<span className='text-green-500 mr-2'>✅</span>
									<span>100% přesnost výpočtů a dat</span>
								</li>
								<li className='flex items-start'>
									<span className='text-green-500 mr-2'>✅</span>
									<span>Přístup kdekoli, 24/7</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Results */}
					<div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
						<div className='bg-white p-4 rounded-lg shadow-sm'>
							<div className='text-2xl font-bold text-brand-primary mb-1'>
								75%
							</div>
							<div className='text-xs text-gray-600'>úspora času</div>
						</div>
						<div className='bg-white p-4 rounded-lg shadow-sm'>
							<div className='text-2xl font-bold text-brand-primary mb-1'>
								€5.2K
							</div>
							<div className='text-xs text-gray-600'>měsíční úspory</div>
						</div>
						<div className='bg-white p-4 rounded-lg shadow-sm'>
							<div className='text-2xl font-bold text-brand-primary mb-1'>
								0
							</div>
							<div className='text-xs text-gray-600'>ztracených dokumentů</div>
						</div>
						<div className='bg-white p-4 rounded-lg shadow-sm'>
							<div className='text-2xl font-bold text-brand-primary mb-1'>
								98%
							</div>
							<div className='text-xs text-gray-600'>spokojenost týmu</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className='text-center mt-16'>
					<p className='text-lg text-gray-600 mb-6'>
						Připraveni transformovat vaši firmu?
					</p>
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
						className='bg-brand-primary hover:bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-primary focus:ring-opacity-50 shadow-lg hover:shadow-xl'
					>
						Začněte digitalizaci
					</button>
				</div>
			</div>
		</section>
	);
}
