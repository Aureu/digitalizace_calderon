'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
	className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('hero');

	const navItems = [
		{ id: 'hero', label: 'Úvod', href: '#hero' },
		{ id: 'services', label: 'Služby', href: '#services' },
		{ id: 'benefits', label: 'Výhody', href: '#benefits' },
		{ id: 'about', label: 'O nás', href: '#about' },
		{ id: 'contact', label: 'Kontakt', href: '#contact' },
	];

	// Smooth scroll to section
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
		setIsMenuOpen(false);
	};

	// Track active section on scroll
	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map((item) => item.id);
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (currentSection) {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [navItems]);

	return (
		<nav
			id='navigation'
			className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 ${className}`}
		>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<div className='flex items-center'>
						<button
							onClick={() => scrollToSection('hero')}
							className='flex items-center hover:opacity-80 transition-opacity duration-200'
						>
							<Image
								src='/images/logo_calderon.png'
								alt='Calderon - Digitalizace firemních procesů'
								width={120}
								height={40}
								className='h-8 w-auto'
								priority
							/>
						</button>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
									activeSection === item.id
										? 'text-brand-primary bg-brand-primary/10'
										: 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
								}`}
							>
								{item.label}
							</button>
						))}

						{/* CTA Button */}
						<button
							onClick={() => scrollToSection('contact')}
							className='bg-brand-primary hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105'
						>
							Začít nyní
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='text-brand-secondary hover:text-brand-primary p-2'
							aria-label='Toggle menu'
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden py-4 border-t border-gray-200 bg-white'>
						<div className='space-y-2'>
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
										activeSection === item.id
											? 'text-brand-primary bg-brand-primary/10'
											: 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
									}`}
								>
									{item.label}
								</button>
							))}

							{/* Mobile CTA */}
							<button
								onClick={() => scrollToSection('contact')}
								className='w-full mt-4 bg-brand-primary hover:bg-green-500 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200'
							>
								Začít nyní
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
