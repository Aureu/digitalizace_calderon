'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
	children: React.ReactNode;
	animation?:
		| 'fade-up'
		| 'fade-in'
		| 'slide-left'
		| 'slide-right'
		| 'scale-up'
		| 'bounce-in';
	delay?: number;
	className?: string;
	threshold?: number;
}

export default function ScrollAnimation({
	children,
	animation = 'fade-up',
	delay = 0,
	className = '',
	threshold = 0.1,
}: ScrollAnimationProps) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						setIsVisible(true);
					}, delay);
					observer.disconnect();
				}
			},
			{
				threshold,
				rootMargin: '50px',
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [delay, threshold]);

	const getAnimationClasses = () => {
		const baseClasses = 'transition-all duration-700 ease-out';

		if (!isVisible) {
			switch (animation) {
				case 'fade-up':
					return `${baseClasses} opacity-0 translate-y-8`;
				case 'fade-in':
					return `${baseClasses} opacity-0`;
				case 'slide-left':
					return `${baseClasses} opacity-0 -translate-x-8`;
				case 'slide-right':
					return `${baseClasses} opacity-0 translate-x-8`;
				case 'scale-up':
					return `${baseClasses} opacity-0 scale-95`;
				case 'bounce-in':
					return `${baseClasses} opacity-0 scale-75`;
				default:
					return `${baseClasses} opacity-0 translate-y-8`;
			}
		}

		switch (animation) {
			case 'fade-up':
				return `${baseClasses} opacity-100 translate-y-0`;
			case 'fade-in':
				return `${baseClasses} opacity-100`;
			case 'slide-left':
				return `${baseClasses} opacity-100 translate-x-0`;
			case 'slide-right':
				return `${baseClasses} opacity-100 translate-x-0`;
			case 'scale-up':
				return `${baseClasses} opacity-100 scale-100`;
			case 'bounce-in':
				return `${baseClasses} opacity-100 scale-100`;
			default:
				return `${baseClasses} opacity-100 translate-y-0`;
		}
	};

	return (
		<div ref={ref} className={`${getAnimationClasses()} ${className}`}>
			{children}
		</div>
	);
}
