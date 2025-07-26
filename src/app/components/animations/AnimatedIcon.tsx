'use client';

import React, { useState } from 'react';

interface AnimatedIconProps {
	children: React.ReactNode;
	variant?: 'bounce' | 'pulse' | 'rotate' | 'scale' | 'shake' | 'float';
	duration?: 'short' | 'medium' | 'long';
	delay?: number;
	triggerOnHover?: boolean;
	triggerOnView?: boolean;
	className?: string;
}

export default function AnimatedIcon({
	children,
	variant = 'scale',
	duration = 'medium',
	delay = 0,
	triggerOnHover = true,
	triggerOnView = false,
	className = '',
}: AnimatedIconProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isInView, setIsInView] = useState(!triggerOnView);

	const durationClasses = {
		short: 'duration-200',
		medium: 'duration-300',
		long: 'duration-500',
	};

	const getAnimationClasses = () => {
		const baseClasses = `transition-all ${durationClasses[duration]} ease-out`;

		const shouldAnimate =
			(triggerOnHover && isHovered) || (triggerOnView && isInView);

		switch (variant) {
			case 'bounce':
				return `${baseClasses} ${shouldAnimate ? 'animate-bounce' : ''}`;
			case 'pulse':
				return `${baseClasses} ${shouldAnimate ? 'animate-pulse' : ''}`;
			case 'rotate':
				return `${baseClasses} ${shouldAnimate ? 'rotate-12' : 'rotate-0'}`;
			case 'scale':
				return `${baseClasses} ${shouldAnimate ? 'scale-110' : 'scale-100'}`;
			case 'shake':
				return `${baseClasses} ${shouldAnimate ? 'animate-pulse' : ''}`;
			case 'float':
				return `${baseClasses} ${
					shouldAnimate ? 'translate-y-1' : 'translate-y-0'
				}`;
			default:
				return baseClasses;
		}
	};

	const glowEffect = triggerOnHover && isHovered ? 'drop-shadow-lg filter' : '';

	return (
		<div
			className={`${getAnimationClasses()} ${glowEffect} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{children}
		</div>
	);
}
