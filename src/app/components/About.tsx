'use client';

import React from 'react';
import { BusinessIcons } from './icons/icons';

interface AboutProps {
	className?: string;
}

interface TeamMemberProps {
	name: string;
	role: string;
	experience: string;
	avatar: string;
}

interface CredentialProps {
	icon: keyof typeof BusinessIcons;
	title: string;
	description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
	name,
	role,
	experience,
	avatar,
}) => {
	return (
		<div className='text-center'>
			<div className='w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white'>
				{avatar}
			</div>
			<h4 className='font-semibold text-brand-secondary mb-1'>{name}</h4>
			<p className='text-brand-primary text-sm mb-2'>{role}</p>
			<p className='text-gray-600 text-sm'>{experience}</p>
		</div>
	);
};

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
	const teamMembers = [
		{
			name: 'Ing. Pavel Calderon',
			role: 'CEO & Founder',
			experience: '15+ let v IT',
			avatar: 'PC',
		},
		{
			name: 'Mgr. Anna Nováková',
			role: 'CTO',
			experience: '12+ let vývoje',
			avatar: 'AN',
		},
		{
			name: 'Bc. Tomáš Svoboda',
			role: 'Lead Developer',
			experience: '8+ let zkušeností',
			avatar: 'TS',
		},
	];

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
		{ number: '15', label: 'Let na trhu' },
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
						než 15 let.
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

				{/* Team Section */}
				<div className='text-center mb-16'>
					<h3 className='text-2xl font-bold text-brand-secondary mb-8'>
						Náš tým expertů
					</h3>
					<div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
						{teamMembers.map((member, _index) => (
							<TeamMember
								key={member.name}
								name={member.name}
								role={member.role}
								experience={member.experience}
								avatar={member.avatar}
							/>
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
							<span className='text-2xl font-bold text-white'>PC</span>
						</div>

						<blockquote className='text-xl md:text-2xl font-medium text-brand-secondary mb-6 italic leading-relaxed'>
							&ldquo;Digitalizace není jen o technologiích – je o lidech. Naším
							cílem je ukázat firmám, že moderní nástroje mohou skutečně
							zjednodušit život a práci, nikoliv je komplikovat.&rdquo;
						</blockquote>

						<footer className='text-brand-primary font-semibold'>
							<cite className='not-italic'>— Ing. Pavel Calderon</cite>
							<p className='text-sm text-gray-600 mt-1'>
								Zakladatel a CEO, Calderon
							</p>
						</footer>

						<div className='mt-6 flex justify-center items-center space-x-4 text-sm text-gray-500'>
							<div className='flex items-center space-x-1'>
								<BusinessIcons.experience className='w-4 h-4 text-brand-primary' />
								<span>15+ let zkušeností</span>
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
						Důvěřují nám
					</h3>
					<div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
						<div className='text-lg font-semibold text-gray-500'>
							TechStart s.r.o.
						</div>
						<div className='text-lg font-semibold text-gray-500'>
							ProServis a.s.
						</div>
						<div className='text-lg font-semibold text-gray-500'>
							Digital Solutions
						</div>
						<div className='text-lg font-semibold text-gray-500'>
							ModernFirm spol. s r.o.
						</div>
						<div className='text-lg font-semibold text-gray-500'>
							InnovateTech Ltd.
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
							15 let zkušeností
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
						className='bg-brand-primary hover:bg-green-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-primary focus:ring-opacity-50'
					>
						Pojďme si promluvit
					</button>
				</div>
			</div>
		</section>
	);
}
