'use client';

import React, { useState, useEffect } from 'react';
import {
	FileText,
	ArrowRight,
	Database,
	BarChart3,
	CheckCircle,
} from 'lucide-react';

interface DigitalTransformProps {
	className?: string;
}

export default function DigitalTransform({
	className = '',
}: DigitalTransformProps) {
	const [activeStep, setActiveStep] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const steps = [
		{
			id: 'input',
			label: 'Dokumenty',
			icon: FileText,
			color: 'text-gray-500',
			bgColor: 'bg-gray-100',
		},
		{
			id: 'process',
			label: 'Digitalizace',
			icon: ArrowRight,
			color: 'text-brand-primary',
			bgColor: 'bg-brand-primary/10',
		},
		{
			id: 'storage',
			label: 'Úložiště',
			icon: Database,
			color: 'text-blue-500',
			bgColor: 'bg-blue-100',
		},
		{
			id: 'analytics',
			label: 'Analýzy',
			icon: BarChart3,
			color: 'text-purple-500',
			bgColor: 'bg-purple-100',
		},
		{
			id: 'success',
			label: 'Úspěch',
			icon: CheckCircle,
			color: 'text-green-500',
			bgColor: 'bg-green-100',
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating(true);
			setActiveStep((prev) => (prev + 1) % steps.length);
			setTimeout(() => setIsAnimating(false), 600);
		}, 2500);

		return () => clearInterval(interval);
	}, [steps.length]);

	return (
		<div
			className={`relative py-12 px-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl ${className}`}
		>
			{/* Title */}
			<div className='text-center mb-8'>
				<h3 className='text-xl font-semibold text-brand-secondary mb-2'>
					Proces digitalizace
				</h3>
				<p className='text-gray-600 text-sm'>
					Sledujte, jak vaše dokumenty projdou digitální transformací
				</p>
			</div>

			{/* Animation Steps */}
			<div className='flex items-center justify-between relative'>
				{/* Connection Lines */}
				<div className='absolute top-6 left-8 right-8 h-0.5 bg-gray-200'>
					<div
						className='h-full bg-gradient-to-r from-brand-primary to-green-500 transition-all duration-1000 ease-in-out'
						style={{
							width: `${(activeStep / (steps.length - 1)) * 100}%`,
						}}
					/>
				</div>

				{steps.map((step, index) => {
					const Icon = step.icon;
					const isActive = index <= activeStep;
					const isCurrent = index === activeStep;

					return (
						<div
							key={step.id}
							className='relative z-10 flex flex-col items-center'
						>
							{/* Icon Container */}
							<div
								className={`
                  w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 ease-out transform
                  ${isActive ? step.bgColor : 'bg-gray-100'}
                  ${
										isCurrent
											? 'scale-110 shadow-lg'
											: isActive
											? 'scale-105 shadow-md'
											: 'scale-100'
									}
                  ${
										isAnimating && isCurrent
											? 'ring-2 ring-brand-primary ring-opacity-50'
											: ''
									}
                `}
							>
								<Icon
									className={`
                    w-6 h-6 transition-all duration-700 ease-out
                    ${isActive ? step.color : 'text-gray-400'}
                    ${isCurrent && isAnimating ? 'scale-110' : 'scale-100'}
                  `}
								/>
							</div>

							{/* Label */}
							<span
								className={`
                  mt-2 text-xs font-medium transition-all duration-700 ease-out
                  ${
										isActive
											? 'text-brand-secondary font-semibold'
											: 'text-gray-400'
									}
                  ${isCurrent ? 'scale-105' : 'scale-100'}
                `}
							>
								{step.label}
							</span>

							{/* Progress Indicator */}
							{isCurrent && (
								<div className='absolute -bottom-2 w-2 h-2 bg-brand-primary rounded-full opacity-75 animate-pulse' />
							)}
						</div>
					);
				})}
			</div>

			{/* Benefits Showcase */}
			<div className='mt-8 grid grid-cols-3 gap-4 text-center'>
				<div className='p-3 bg-white rounded-lg shadow-sm'>
					<div className='text-brand-primary font-semibold text-lg'>70%</div>
					<div className='text-xs text-gray-600'>Rychlejší</div>
				</div>
				<div className='p-3 bg-white rounded-lg shadow-sm'>
					<div className='text-brand-primary font-semibold text-lg'>99%</div>
					<div className='text-xs text-gray-600'>Přesnější</div>
				</div>
				<div className='p-3 bg-white rounded-lg shadow-sm'>
					<div className='text-brand-primary font-semibold text-lg'>24/7</div>
					<div className='text-xs text-gray-600'>Dostupné</div>
				</div>
			</div>
		</div>
	);
}
