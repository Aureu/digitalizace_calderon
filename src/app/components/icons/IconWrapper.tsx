import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
	icon: LucideIcon;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'default' | 'primary' | 'secondary' | 'accent';
	className?: string;
	animate?: boolean;
	onClick?: () => void;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
	icon: Icon,
	size = 'md',
	variant = 'default',
	className = '',
	animate = false,
	onClick,
}) => {
	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-6 h-6',
		lg: 'w-8 h-8',
		xl: 'w-12 h-12',
	};

	const variantClasses = {
		default: 'text-gray-600',
		primary: 'text-brand-primary',
		secondary: 'text-brand-secondary',
		accent: 'text-white',
	};

	const animationClasses = animate
		? 'transition-all duration-300 hover:scale-110 hover:rotate-6'
		: '';
	const clickableClasses = onClick ? 'cursor-pointer hover:opacity-80' : '';

	return (
		<Icon
			className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${animationClasses}
        ${clickableClasses}
        ${className}
      `}
			onClick={onClick}
		/>
	);
};

export default IconWrapper;
