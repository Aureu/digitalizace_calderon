'use client';

import React from 'react';
import { BusinessIcons } from './icons/icons';

interface AboutProps {
	className?: string;
}

interface CredentialProps {
	icon: keyof typeof BusinessIcons;
	title: string;
	description: string;
}

const Credential: React.FC<CredentialProps> = ({
	icon,
	title,
	description,
}) => {
	const Icon = BusinessIcons[icon];

	return (
		<div className='flex items-start space-x-4'>
			<div className='w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-all duration-300'>
				<Icon className='w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300' />
			</div>
			<div>
				<h4 className='font-semibold text-brand-secondary mb-2'>{title}</h4>
				<p className='text-gray-600 text-sm'>{description}</p>
			</div>
		</div>
	);
};

export default function About({ className = '' }: AboutProps) {
	const credentials = [
		{
			icon: 'certified',
			title: 'Certifikované řešení',
			description:
				'Používáme pouze prověřené technologie s nejvyššími bezpečnostními standardy ISO 27001.',
		},
		{
			icon: 'compliance',
			title: 'GDPR Compliance',
			description:
				'Plná shoda s evropskými předpisy o ochraně osobních údajů. Vaše data jsou v bezpečí.',
		},
		{
			icon: 'fastImplementation',
			title: 'Rychlá implementace',
			description:
				'Průměrná doba nasazení je 2-4 týdny. Minimální výpadek provozu vaší firmy.',
		},
		{
			icon: 'partnership',
			title: 'Dlouhodobé partnerství',
			description:
				'Neposkytujeme jen jednorázové služby, ale budujeme dlouhodobé vztahy s našimi klienty.',
		},
	];

	const achievements = [
		{ number: '500+', label: 'Úspěšných projektů' },
		{ number: '19', label: 'Let na trhu' },
		{ number: '50+', label: 'Spokojených klientů' },
		{ number: '99.8%', label: 'Spokojenost klientů' },
	];

	return (
		<section
			className={`bg-gray-50 py-16 sm:py-20 px-4 ${className}`}
			aria-label='O společnosti Calderon'
		>
			<div className='max-w-6xl mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-12 sm:mb-16'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-brand-secondary mb-4 sm:mb-6'>
						Proč zvolit Calderon?
					</h2>
					<p className='text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed'>
						Jsme česká technologická společnost s dlouholetou tradicí v oblasti
						digitalizace. Pomáháme firmám transformovat jejich procesy již více
						než 19 let.
					</p>
				</div>

				{/* Company Story */}
				<div className='grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16'>
					<div>
						<h3 className='text-2xl font-bold text-brand-secondary mb-6'>
							Naše mise
						</h3>
						<p className='text-gray-600 mb-4 leading-relaxed'>
							Věříme, že každá firma, bez ohledu na velikost, si zaslouží
							efektivní a moderní procesy. Naším cílem je zpřístupnit pokročilé
							digitální řešení i středním a malým podnikům.
						</p>
						<p className='text-gray-600 mb-6 leading-relaxed'>
							Specializujeme se na praktická řešení, která přinášejí okamžité
							výsledky. Nejsme jen dodavatel technologií, ale váš partner pro
							digitální transformaci.
						</p>

						{/* Achievements */}
						<div className='grid grid-cols-2 gap-4'>
							{achievements.map((achievement, _index) => (
								<div
									key={achievement.label}
									className='text-center p-4 bg-white rounded-lg'
								>
									<div className='text-2xl font-bold text-brand-primary mb-1'>
										{achievement.number}
									</div>
									<div className='text-sm text-gray-600'>
										{achievement.label}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='space-y-6'>
						{credentials.map((credential, _index) => (
							<div key={credential.title} className='group'>
								<Credential
									icon={credential.icon as keyof typeof BusinessIcons}
									title={credential.title}
									description={credential.description}
								/>
							</div>
						))}
					</div>
				</div>

				{/* Founder's Quote */}
				<div className='bg-gradient-to-r from-brand-primary/5 to-green-500/5 rounded-xl p-8 mb-16 relative overflow-hidden'>
					{/* Background decoration */}
					<div className='absolute top-0 left-0 w-32 h-32 bg-brand-primary/10 rounded-full -translate-x-16 -translate-y-16'></div>
					<div className='absolute bottom-0 right-0 w-24 h-24 bg-green-500/10 rounded-full translate-x-12 translate-y-12'></div>

					<div className='relative z-10 max-w-4xl mx-auto text-center'>
						<div className='w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
							<span className='text-2xl font-bold text-white'>JU</span>
						</div>

						<blockquote className='text-xl md:text-2xl font-medium text-brand-secondary mb-6 italic leading-relaxed'>
							&ldquo;Digitalizace není jen o technologiích – je o lidech. Naším
							cílem je ukázat firmám, že moderní nástroje mohou skutečně
							zjednodušit život a práci, nikoliv je komplikovat.&rdquo;
						</blockquote>

						<footer className='text-brand-primary font-semibold'>
							<cite className='not-italic'>— Ing. Jan Ullrich</cite>
							<p className='text-sm text-gray-600 mt-1'>
								Zakladatel a CEO, Calderon
							</p>
						</footer>

						<div className='mt-6 flex justify-center items-center space-x-4 text-sm text-gray-500'>
							<div className='flex items-center space-x-1'>
								<BusinessIcons.experience className='w-4 h-4 text-brand-primary' />
								<span>19+ let zkušeností</span>
							</div>
							<div className='w-1 h-1 bg-gray-300 rounded-full'></div>
							<div className='flex items-center space-x-1'>
								<BusinessIcons.certified className='w-4 h-4 text-brand-primary' />
								<span>500+ úspěšných projektů</span>
							</div>
						</div>
					</div>
				</div>

				{/* Trust Indicators */}
				<div className='bg-white rounded-lg p-8 text-center'>
					<h3 className='text-xl font-bold text-brand-secondary mb-6'>
						Naši partneři
					</h3>
					<div className='flex flex-wrap justify-center items-center gap-8 opacity-80'>
						<div className='flex flex-col items-center group hover:opacity-100 transition-opacity duration-300'>
							<img 
								src='/images/partners/raynet.svg' 
								alt='Raynet' 
								className='h-12 mb-2 group-hover:scale-110 transition-transform duration-300'
							/>
							<span className='text-sm text-gray-600'>Raynet</span>
						</div>
						<div className='flex flex-col items-center group hover:opacity-100 transition-opacity duration-300'>
							<img 
								src='/images/partners/make.svg' 
								alt='Make' 
								className='h-12 mb-2 group-hover:scale-110 transition-transform duration-300'
							/>
							<span className='text-sm text-gray-600'>Make</span>
						</div>
						<div className='flex flex-col items-center group hover:opacity-100 transition-opacity duration-300'>
							<img 
								src='/images/partners/ai-association.svg' 
								alt='Česká asociace umělé inteligence' 
								className='h-12 mb-2 group-hover:scale-110 transition-transform duration-300'
							/>
							<span className='text-sm text-gray-600'>Česká asociace umělé inteligence</span>
						</div>
						<div className='flex flex-col items-center group hover:opacity-100 transition-opacity duration-300'>
							<img 
								src='/images/partners/digitoo.svg' 
								alt='Digitoo.ai' 
								className='h-12 mb-2 group-hover:scale-110 transition-transform duration-300'
							/>
							<span className='text-sm text-gray-600'>Digitoo.ai</span>
						</div>
					</div>

					<div className='mt-8 flex justify-center items-center space-x-6 text-sm text-gray-500'>
						<div className='flex items-center group'>
							<BusinessIcons.certified className='w-4 h-4 mr-2 text-brand-primary group-hover:scale-110 transition-transform duration-300' />
							ISO 27001 Certified
						</div>
						<div className='flex items-center group'>
							<BusinessIcons.compliance className='w-4 h-4 mr-2 text-brand-primary group-hover:scale-110 transition-transform duration-300' />
							GDPR Compliant
						</div>
						<div className='flex items-center group'>
							<BusinessIcons.rating className='w-4 h-4 mr-2 text-brand-primary group-hover:scale-110 transition-transform duration-300' />
							19 let zkušeností
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className='text-center mt-12'>
					<p className='text-lg text-gray-600 mb-6'>
						Chcete se dozvědět více o našem přístupu?
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
						className='btn-primary px-8 py-3 focus:outline-none focus:ring-4 focus:ring-brand-primary focus:ring-opacity-50'
					>
						Konzultace zdarma
					</button>
				</div>
			</div>
		</section>
	);
}
