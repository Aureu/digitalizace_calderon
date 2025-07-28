'use client';

import React from 'react';
import Link from 'next/link';
import { BusinessIcons } from '../components/icons/icons';

export default function CookiesPolicy() {
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
						Používání cookies
					</h1>
					<p className='text-gray-300 text-lg'>
						Calderon Czech Republic s.r.o. - Informace o cookies
					</p>
				</div>
			</div>

			{/* Content */}
			<div className='max-w-4xl mx-auto px-4 py-8'>
				<div className='bg-white rounded-lg shadow-lg p-8'>
					<div className='prose prose-lg max-w-none'>
						<h2 className='text-2xl font-bold text-brand-secondary mb-6'>
							Informace o používání cookies
						</h2>

						<div className='space-y-6'>
							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									1. Co jsou cookies
								</h3>
								<p className='text-gray-700 mb-3'>
									Cookies jsou malé textové soubory, které se ukládají do vašeho
									zařízení (počítač, tablet, smartphone) při návštěvě webových
									stránek. Tyto soubory umožňují webu zapamatovat si vaše
									preference a poskytovat vám lepší uživatelskou zkušenost.
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									2. Jaké cookies používáme
								</h3>
								<div className='space-y-4'>
									<div>
										<h4 className='font-semibold text-brand-secondary mb-2'>
											Technické cookies (nezbytné)
										</h4>
										<p className='text-gray-700 mb-2'>
											Tyto cookies jsou nezbytné pro správné fungování webu:
										</p>
										<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
											<li>Session cookies - pro udržení přihlášení</li>
											<li>Bezpečnostní cookies - pro ochranu proti útokům</li>
											<li>Funkční cookies - pro základní funkce webu</li>
										</ul>
									</div>

									<div>
										<h4 className='font-semibold text-brand-secondary mb-2'>
											Analytické cookies
										</h4>
										<p className='text-gray-700 mb-2'>
											Pomáhají nám pochopit, jak návštěvníci používají náš web:
										</p>
										<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
											<li>Google Analytics - sledování návštěvnosti</li>
											<li>Statistiky stránek - které stránky jsou nejpopulárnější</li>
											<li>Chování uživatelů - jak dlouho zůstávají na stránce</li>
										</ul>
									</div>

									<div>
										<h4 className='font-semibold text-brand-secondary mb-2'>
											Marketingové cookies
										</h4>
										<p className='text-gray-700 mb-2'>
											Používáme je pro zobrazování relevantních reklam:
										</p>
										<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
											<li>Google Ads - remarketing</li>
											<li>Facebook Pixel - sledování konverzí</li>
											<li>Personalizace obsahu</li>
										</ul>
									</div>
								</div>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									3. Doba uchovávání cookies
								</h3>
								<div className='space-y-3'>
									<div>
										<h4 className='font-semibold text-brand-secondary mb-1'>
											Session cookies
										</h4>
										<p className='text-gray-700'>
											Mazány při zavření prohlížeče
										</p>
									</div>
									<div>
										<h4 className='font-semibold text-brand-secondary mb-1'>
											Persistentní cookies
										</h4>
										<p className='text-gray-700'>
											Uchovávány až 2 roky (podle typu)
										</p>
									</div>
									<div>
										<h4 className='font-semibold text-brand-secondary mb-1'>
											Analytické cookies
										</h4>
										<p className='text-gray-700'>
											Uchovávány až 26 měsíců
										</p>
									</div>
								</div>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									4. Správa cookies
								</h3>
								<p className='text-gray-700 mb-3'>
									Můžete cookies spravovat několika způsoby:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Nastavení prohlížeče - blokování nebo mazání cookies</li>
									<li>Náš cookie banner - výběr typů cookies</li>
									<li>Nástroje třetích stran - pro správu reklamních cookies</li>
								</ul>
								<p className='text-gray-700 mt-3'>
									<strong>Poznámka:</strong> Vypnutím cookies se může zhoršit
									funkčnost webu.
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									5. Cookies třetích stran
								</h3>
								<p className='text-gray-700 mb-3'>
									Používáme služby třetích stran, které mohou ukládat cookies:
								</p>
								<div className='space-y-3'>
									<div className='bg-gray-50 p-4 rounded-lg'>
										<h4 className='font-semibold text-brand-secondary mb-1'>
											Google Analytics
										</h4>
										<p className='text-gray-700 text-sm'>
											Sledování návštěvnosti a chování uživatelů
										</p>
									</div>
									<div className='bg-gray-50 p-4 rounded-lg'>
										<h4 className='font-semibold text-brand-secondary mb-1'>
											Google Ads
										</h4>
										<p className='text-gray-700 text-sm'>
											Remarketing a sledování konverzí
										</p>
									</div>
									<div className='bg-gray-50 p-4 rounded-lg'>
										<h4 className='font-semibold text-brand-secondary mb-1'>
											Facebook Pixel
										</h4>
										<p className='text-gray-700 text-sm'>
											Sledování interakcí pro reklamní účely
										</p>
									</div>
								</div>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									6. Vaše práva
								</h3>
								<p className='text-gray-700 mb-3'>
									Máte právo:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Odmítnout cookies (kromě nezbytných)</li>
									<li>Smazat již uložené cookies</li>
									<li>Získat informace o používání cookies</li>
									<li>Stáhnout svá data v strukturovaném formátu</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									7. Kontakt
								</h3>
								<p className='text-gray-700 mb-3'>
									Pro dotazy ohledně cookies nás kontaktujte:
								</p>
								<div className='bg-gray-50 p-4 rounded-lg'>
									<p className='text-gray-700 mb-1'>
										<strong>Email:</strong> kancelar@calderon.cz
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
									8. Aktualizace
								</h3>
								<p className='text-gray-700 mb-3'>
									Tato informace o cookies byla naposledy aktualizována dne 15.
									ledna 2025. Vyhrazujeme si právo na její úpravu v případě
									změn v našich službách nebo právních předpisech.
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									9. Související dokumenty
								</h3>
								<p className='text-gray-700 mb-3'>
									Pro více informací o zpracování vašich údajů si přečtěte:
								</p>
								<div className='space-y-2'>
									<Link
										href='/privacy'
										className='block text-brand-primary hover:underline'
									>
										• Ochrana osobních údajů
									</Link>
									<Link
										href='/terms'
										className='block text-brand-primary hover:underline'
									>
										• Obchodní podmínky
									</Link>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 