'use client';

import React from 'react';
import Image from 'next/image';
import { BusinessIcons } from './icons/icons';

interface FooterProps {
	className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className={`bg-brand-secondary text-white py-8 sm:py-12 px-4 ${className}`}
			aria-label='Zápatí stránky'
		>
			<div className='max-w-6xl mx-auto'>
				{/* Main Footer Content */}
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8'>
					{/* Company Info */}
					<div>
						<div className='mb-4'>
							<Image
								src='/images/logo_calderon_white.png'
								alt='Calderon - Digitalizace firemních procesů'
								width={120}
								height={40}
								className='h-8 w-auto'
							/>
						</div>
						<p className='text-gray-300 leading-relaxed mb-4'>
							Specializujeme se na digitalizaci firemních procesů. Pomáháme
							firmám modernizovat jejich dokumenty, procesy a účetnictví.
						</p>
						<div className='flex space-x-4'>
							<a
								href='mailto:kancelar@calderon.cz'
								className='text-brand-primary hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10 transition-all duration-300'
								aria-label='Email'
							>
								<BusinessIcons.email className='w-5 h-5' />
							</a>
							<a
								href='tel:+420474777200'
								className='text-brand-primary hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10 transition-all duration-300'
								aria-label='Telefon'
							>
								<BusinessIcons.phone className='w-5 h-5' />
							</a>
							<a
								href='https://www.linkedin.com/company/calderon-czech-republic-s-r-o/posts/?feedView=all'
								target='_blank'
								rel='noopener noreferrer'
								className='text-brand-primary hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10 transition-all duration-300'
								aria-label='LinkedIn profil'
							>
								<BusinessIcons.business className='w-5 h-5' />
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className='text-xl font-semibold mb-4'>Naše služby</h3>
						<ul className='space-y-2 text-gray-300'>
							<li>
								<a
									href='#services'
									className='hover:text-brand-primary transition-colors duration-200 flex items-center group'
								>
									<BusinessIcons.documents className='w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300' />
									Digitalizace dokumentů
								</a>
							</li>
							<li>
								<a
									href='#services'
									className='hover:text-brand-primary transition-colors duration-200 flex items-center group'
								>
									<BusinessIcons.processes className='w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300' />
									Optimalizace procesů
								</a>
							</li>
							<li>
								<a
									href='#services'
									className='hover:text-brand-primary transition-colors duration-200 flex items-center group'
								>
									<BusinessIcons.accounting className='w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300' />
									Digitální účetnictví
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='hover:text-brand-primary transition-colors duration-200 flex items-center group'
								>
									<BusinessIcons.consultation className='w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300' />
									Konzultace zdarma
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className='text-xl font-semibold mb-4'>Kontakt</h3>
						<div className='space-y-3 text-gray-300'>
							<div className='flex items-center group'>
								<BusinessIcons.email className='w-4 h-4 mr-3 text-brand-primary group-hover:scale-110 transition-transform duration-300' />
								<a
									href='mailto:kancelar@calderon.cz'
									className='hover:text-brand-primary transition-colors duration-200'
								>
									kancelar@calderon.cz
								</a>
							</div>
							<div className='flex items-center group'>
								<BusinessIcons.phone className='w-4 h-4 mr-3 text-brand-primary group-hover:scale-110 transition-transform duration-300' />
								<a
									href='tel:+420474777200'
									className='hover:text-brand-primary transition-colors duration-200'
								>
									+420 474 777 200
								</a>
							</div>
							<div className='flex items-start group'>
								<BusinessIcons.location className='w-4 h-4 mr-3 mt-1 text-brand-primary group-hover:scale-110 transition-transform duration-300' />
								<span>
									Dlouhá 3458/2a
									<br />
									400 01 Ústí nad Labem
									<br />
									Česká republika
								</span>
							</div>
							<div className='flex items-center group'>
								<BusinessIcons.business className='w-4 h-4 mr-3 text-brand-primary group-hover:scale-110 transition-transform duration-300' />
								<span>IČO: 27582787</span>
							</div>
							<div className='flex items-center group'>
								<BusinessIcons.hours className='w-4 h-4 mr-3 text-brand-primary group-hover:scale-110 transition-transform duration-300' />
								<span>Po-Pá: 9:00 - 17:00</span>
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className='border-t border-gray-600 my-8'></div>

				{/* Emotional Czech Pride Section */}
				<div className='text-center py-6 bg-gradient-to-r from-brand-primary/10 to-green-500/10 rounded-lg mb-6'>
					<div className='flex items-center justify-center gap-2 mb-3'>
						<span className='text-2xl'>🇨🇿</span>
						<h3 className='text-lg font-semibold text-brand-primary'>
							Česká firma s místními kořeny
						</h3>
						<span className='text-2xl'>🇨🇿</span>
					</div>
					<p className='text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed'>
						Jsme hrdí na český původ a pomáháme česk ým firmám už více než 19
						let. Naše řešení vznikají s láskou k detailu a porozuměním místnímu
						trhu.
					</p>
					<div className='mt-4'>
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
							className='btn-secondary px-6 py-2 rounded-full text-sm'
						>
							Začněte digitalizaci dnes 🚀
						</button>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
					<div className='mb-4 md:mb-0'>
						<p>&copy; {currentYear} Calderon. Všechna práva vyhrazena.</p>
					</div>

					<div className='flex flex-wrap justify-center md:justify-end gap-6'>
						<a
							href='/privacy'
							className='hover:text-brand-primary transition-colors duration-200'
						>
							Ochrana osobních údajů
						</a>
						<a
							href='/terms'
							className='hover:text-brand-primary transition-colors duration-200'
						>
							Obchodní podmínky
						</a>
						<a
							href='/cookies'
							className='hover:text-brand-primary transition-colors duration-200'
						>
							Cookies
						</a>
					</div>
				</div>

				{/* Back to Top */}
				<div className='text-center mt-8'>
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className='text-brand-primary hover:text-white transition-colors duration-200 text-sm flex items-center justify-center mx-auto group'
						aria-label='Zpět nahoru'
					>
						<BusinessIcons.backToTop className='w-4 h-4 mr-2 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300' />
						Zpět nahoru
					</button>
				</div>
			</div>
		</footer>
	);
}
