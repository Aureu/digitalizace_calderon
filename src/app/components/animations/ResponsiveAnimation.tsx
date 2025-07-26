'use client';

import React, { useState, useEffect } from 'react';

interface ResponsiveAnimationProps {
	children: React.ReactNode;
	className?: string;
	hoverAnimation?: string;
	touchAnimation?: string;
	disabled?: boolean;
}

export default function ResponsiveAnimation({
	children,
	className = '',
	hoverAnimation = 'hover:scale-105 hover:shadow-lg',
	touchAnimation = 'active:scale-95',
	disabled = false,
}: ResponsiveAnimationProps) {
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		// Detect if the device supports touch
		const checkTouchSupport = () => {
			setIsTouchDevice(
				'ontouchstart' in window ||
					navigator.maxTouchPoints > 0 ||
					window.matchMedia('(pointer: coarse)').matches
			);
		};

		checkTouchSupport();

		// Listen for media query changes
		const mediaQuery = window.matchMedia('(pointer: coarse)');
		const handleChange = () => checkTouchSupport();

		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleChange);
			return () => mediaQuery.removeEventListener('change', handleChange);
		}
	}, []);

	if (disabled) {
		return <div className={className}>{children}</div>;
	}

	// For touch devices, use simpler animations and rely on active states
	const animationClasses = isTouchDevice
		? `transition-all duration-200 ${touchAnimation}`
		: `transition-all duration-300 ${hoverAnimation} ${touchAnimation}`;

	return <div className={`${animationClasses} ${className}`}>{children}</div>;
}
