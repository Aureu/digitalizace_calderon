'use client';

import React from 'react';
import Link from 'next/link';
import { BusinessIcons } from '../components/icons/icons';

export default function PrivacyPolicy() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Header */}
			<div className='bg-brand-secondary text-white py-8'>
				<div className='max-w-4xl mx-auto px-4'>
					<Link
						href='/'
						className='inline-flex items-center text-brand-primary hover:text-white transition-colors duration-200 mb-4'
					>
						<BusinessIcons.backToTop className='w-4 h-4 mr-2 rotate-90' />
						Zpět na hlavní stránku
					</Link>
					<h1 className='text-3xl md:text-4xl font-bold mb-4'>
						Ochrana osobních údajů
					</h1>
					<p className='text-gray-300 text-lg'>
						Calderon Czech Republic s.r.o. - Zpracování osobních údajů
					</p>
				</div>
			</div>

			{/* Content */}
			<div className='max-w-4xl mx-auto px-4 py-8'>
				<div className='bg-white rounded-lg shadow-lg p-8'>
					<div className='prose prose-lg max-w-none'>
						<h2 className='text-2xl font-bold text-brand-secondary mb-6'>
							Informace o zpracování osobních údajů
						</h2>

						<div className='space-y-6'>
							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									1. Správce údajů
								</h3>
								<p className='text-gray-700 mb-2'>
									<strong>Calderon Czech Republic s.r.o.</strong>
								</p>
								<p className='text-gray-700 mb-2'>
									<strong>Adresa:</strong> Dlouhá 3458/2a, 400 01 Ústí nad Labem
								</p>
								<p className='text-gray-700 mb-2'>
									<strong>IČO:</strong> 27582787
								</p>
								<p className='text-gray-700 mb-2'>
									<strong>Email:</strong> kancelar@vkurzu.cz
								</p>
								<p className='text-gray-700 mb-2'>
									<strong>Telefon:</strong> +420 474 777 200
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									2. Účel zpracování osobních údajů
								</h3>
								<p className='text-gray-700 mb-3'>
									Vaše osobní údaje zpracováváme pro následující účely:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Poskytování našich služeb digitalizace firemních procesů</li>
									<li>Komunikace s klienty a potenciálními klienty</li>
									<li>Plnění smluvních povinností</li>
									<li>Marketingové aktivity (pouze s vaším souhlasem)</li>
									<li>Plnění právních povinností</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									3. Kategorie zpracovávaných údajů
								</h3>
								<p className='text-gray-700 mb-3'>
									Zpracováváme následující kategorie osobních údajů:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Identifikační údaje (jméno, příjmení, IČO)</li>
									<li>Kontaktní údaje (email, telefon, adresa)</li>
									<li>Údaje o firmě a její činnosti</li>
									<li>Technické údaje (IP adresa, cookies)</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									4. Právní základ zpracování
								</h3>
								<p className='text-gray-700 mb-3'>
									Osobní údaje zpracováváme na základě:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Plnění smlouvy nebo před smlouvou</li>
									<li>Oprávněný zájem správce</li>
									<li>Váš souhlas (pro marketingové účely)</li>
									<li>Plnění právní povinnosti</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									5. Doba uchovávání údajů
								</h3>
								<p className='text-gray-700 mb-3'>
									Osobní údaje uchováváme:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Po dobu trvání smluvního vztahu</li>
									<li>Po dobu 3 let po ukončení spolupráce</li>
									<li>Po dobu 10 let pro účely účetnictví a daní</li>
									<li>Do odvolání souhlasu (pro marketingové účely)</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									6. Vaše práva
								</h3>
								<p className='text-gray-700 mb-3'>
									Máte právo:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Na přístup k osobním údajům</li>
									<li>Na opravu nepřesných údajů</li>
									<li>Na výmaz údajů (právo být zapomenut)</li>
									<li>Na omezení zpracování</li>
									<li>Na přenositelnost údajů</li>
									<li>Vznesení námitky proti zpracování</li>
									<li>Odvolání souhlasu</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									7. Bezpečnost údajů
								</h3>
								<p className='text-gray-700 mb-3'>
									Implementujeme vhodná technická a organizační opatření pro
									ochranu osobních údajů proti neoprávněnému nebo nezákonnému
									zpracování, náhodné ztrátě, zničení nebo poškození.
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									8. Kontakt
								</h3>
								<p className='text-gray-700 mb-3'>
									Pro uplatnění vašich práv nebo dotazy ohledně zpracování
									osobních údajů nás kontaktujte:
								</p>
								<div className='bg-gray-50 p-4 rounded-lg'>
									<p className='text-gray-700 mb-1'>
										<strong>Email:</strong> kancelar@vkurzu.cz
									</p>
									<p className='text-gray-700 mb-1'>
										<strong>Telefon:</strong> +420 474 777 200
									</p>
									<p className='text-gray-700 mb-1'>
										<strong>Adresa:</strong> Dlouhá 3458/2a, 400 01 Ústí nad Labem
									</p>
								</div>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									9. Úřad pro ochranu osobních údajů
								</h3>
								<p className='text-gray-700 mb-3'>
									Máte právo podat stížnost u Úřadu pro ochranu osobních údajů,
									Pokorného 4, 120 00 Praha 2, www.uoou.cz
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									10. Aktualizace
								</h3>
								<p className='text-gray-700 mb-3'>
									Tato informace o zpracování osobních údajů byla naposledy
									aktualizována dne 15. ledna 2025. Vyhrazujeme si právo na
									jejích úpravu v případě změn v našich procesech nebo právních
									předpisech.
								</p>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 