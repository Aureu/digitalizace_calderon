'use client';

import React, { useState } from 'react';
import { BusinessIcons } from '../icons/icons';

interface WizardStep {
	id: number;
	title: string;
	description: string;
	icon: keyof typeof BusinessIcons;
	details: string[];
	timeframe: string;
}

interface DigitalizationWizardProps {
	className?: string;
}

export default function DigitalizationWizard({
	className = '',
}: DigitalizationWizardProps) {
	const [activeStep, setActiveStep] = useState(1);

	const steps: WizardStep[] = [
		{
			id: 1,
			title: 'Analýza a plánování',
			description: 'Provedeme důkladnou analýzu vašich současných procesů',
			icon: 'documents',
			details: [
				'Audit stávajících dokumentů a procesů',
				'Identifikace úzkých míst a problémů',
				'Návrh optimálního řešení',
				'Stanovení priorit a harmonogramu',
			],
			timeframe: '1-2 týdny',
		},
		{
			id: 2,
			title: 'Digitalizace dokumentů',
			description: 'Převedeme vaše dokumenty do digitální podoby',
			icon: 'processes',
			details: [
				'Skenování a OCR rozpoznávání',
				'Kategorizace a organizace',
				'Nastavení vyhledávacích tagů',
				'Kontrola kvality a přesnosti',
			],
			timeframe: '2-3 týdny',
		},
		{
			id: 3,
			title: 'Automatizace procesů',
			description: 'Nastavíme automatické workflow a procesy',
			icon: 'automation',
			details: [
				'Konfigurace automatických workflow',
				'Integrace s účetním systémem',
				'Nastavení notifikací a upozornění',
				'Testování a ladění procesů',
			],
			timeframe: '1-2 týdny',
		},
		{
			id: 4,
			title: 'Školení a spuštění',
			description: 'Proškolíme váš tým a spustíme systém',
			icon: 'support',
			details: [
				'Komplexní školení zaměstnanců',
				'Přenos dat ze starého systému',
				'Ostrý provoz s naší podporou',
				'Dokumentace a návody',
			],
			timeframe: '1 týden',
		},
	];

	const progressPercentage = (activeStep / steps.length) * 100;

	return (
		<div className={`bg-white py-16 px-4 ${className}`}>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-brand-secondary mb-4'>
						Jak probíhá digitalizace?
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Projděte si interaktivní průvodce a objevte, jak jednoduše můžeme
						transformovat vaši firmu za 5-8 týdnů.
					</p>
				</div>

				{/* Progress Bar */}
				<div className='mb-8'>
					<div className='relative'>
						<div className='h-2 bg-gray-200 rounded-full'>
							<div
								className='h-2 bg-gradient-to-r from-brand-primary to-green-500 rounded-full transition-all duration-500 ease-out'
								style={{ width: `${progressPercentage}%` }}
							></div>
						</div>
						<div className='absolute -top-1 right-0 w-4 h-4 bg-brand-primary rounded-full shadow-lg animate-pulse'></div>
					</div>
					<div className='text-center mt-2 text-sm text-gray-600'>
						Krok {activeStep} z {steps.length} -{' '}
						{steps[activeStep - 1]?.timeframe}
					</div>
				</div>

				{/* Step Navigation */}
				<div className='flex justify-center mb-8 flex-wrap gap-2'>
					{steps.map((step) => (
						<button
							key={step.id}
							onClick={() => setActiveStep(step.id)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
								activeStep === step.id
									? 'bg-brand-primary text-white shadow-lg transform scale-105'
									: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
							}`}
						>
							{step.id}. {step.title}
						</button>
					))}
				</div>

				{/* Active Step Content */}
				<div className='bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg'>
					{steps.map((step) => (
						<div
							key={step.id}
							className={`transition-all duration-500 ${
								activeStep === step.id
									? 'opacity-100 transform translate-y-0'
									: 'opacity-0 transform translate-y-4 absolute'
							}`}
							style={{ display: activeStep === step.id ? 'block' : 'none' }}
						>
							<div className='grid lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center'>
								{/* Icon and Title */}
								<div className='text-center lg:text-left order-1 lg:order-1'>
									<div className='w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-primary to-green-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 sm:mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300'>
										{React.createElement(BusinessIcons[step.icon], {
											className: 'w-10 h-10 sm:w-12 sm:h-12 text-white',
										})}
									</div>
									<h3 className='text-xl sm:text-2xl font-bold text-brand-secondary mb-3 sm:mb-4 px-4 sm:px-0'>
										{step.title}
									</h3>
									<p className='text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0'>
										{step.description}
									</p>
									<div className='inline-flex items-center px-3 py-2 sm:px-4 bg-brand-primary/10 rounded-full'>
										<BusinessIcons.hours className='w-4 h-4 text-brand-primary mr-2' />
										<span className='text-brand-primary font-medium text-sm'>
											{step.timeframe}
										</span>
									</div>
								</div>

								{/* Details */}
								<div className='order-2 lg:order-2 px-4 sm:px-0'>
									<h4 className='font-semibold text-brand-secondary mb-4 text-base sm:text-lg'>
										Co v tomto kroku děláme:
									</h4>
									<ul className='space-y-3 sm:space-y-4'>
										{step.details.map((detail, index) => (
											<li key={index} className='flex items-start'>
												<div className='w-6 h-6 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3'>
													<BusinessIcons.success className='w-3 h-3 text-brand-primary' />
												</div>
												<span className='text-gray-700 text-sm sm:text-base leading-relaxed'>
													{detail}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Buttons */}
				<div className='mt-6 sm:mt-8'>
					{/* Time indicator - centered on mobile, inline on desktop */}
					<div className='text-center mb-6 sm:hidden'>
						<div className='text-sm text-gray-500 mb-1'>Celková doba</div>
						<div className='text-lg font-bold text-brand-primary'>
							5-8 týdnů
						</div>
					</div>

					<div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
						<button
							onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
							disabled={activeStep === 1}
							className={`flex items-center justify-center px-4 py-3 sm:px-6 rounded-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
								activeStep === 1
									? 'bg-gray-100 text-gray-400 cursor-not-allowed'
									: 'bg-gray-200 hover:bg-gray-300 text-gray-700'
							}`}
						>
							<BusinessIcons.arrow className='w-4 h-4 mr-2 transform rotate-180' />
							Předchozí krok
						</button>

						{/* Time indicator - hidden on mobile, visible on desktop */}
						<div className='text-center hidden sm:block'>
							<div className='text-sm text-gray-500 mb-1'>Celková doba</div>
							<div className='text-lg font-bold text-brand-primary'>
								5-8 týdnů
							</div>
						</div>

						<button
							onClick={() =>
								setActiveStep(Math.min(steps.length, activeStep + 1))
							}
							disabled={activeStep === steps.length}
							className={`flex items-center justify-center px-4 py-3 sm:px-6 rounded-lg transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
								activeStep === steps.length
									? 'bg-brand-primary text-white'
									: 'bg-brand-primary hover:bg-green-500 text-white'
							}`}
						>
							{activeStep === steps.length
								? 'Začít digitalizaci'
								: 'Další krok'}
							<BusinessIcons.arrow className='w-4 h-4 ml-2' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
