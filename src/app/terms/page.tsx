'use client';

import React from 'react';
import Link from 'next/link';
import { BusinessIcons } from '../components/icons/icons';

export default function TermsAndConditions() {
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
						Obchodní podmínky
					</h1>
					<p className='text-gray-300 text-lg'>
						Calderon Czech Republic s.r.o. - Obchodní podmínky
					</p>
				</div>
			</div>

			{/* Content */}
			<div className='max-w-4xl mx-auto px-4 py-8'>
				<div className='bg-white rounded-lg shadow-lg p-8'>
					<div className='prose prose-lg max-w-none'>
						<h2 className='text-2xl font-bold text-brand-secondary mb-6'>
							Obchodní podmínky
						</h2>

						<div className='space-y-6'>
							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									1. Úvodní ustanovení
								</h3>
								<p className='text-gray-700 mb-3'>
									Tyto obchodní podmínky upravují vzájemná práva a povinnosti mezi
									společností <strong>Calderon Czech Republic s.r.o.</strong> (dále jen
									"poskytovatel") a zákazníkem při poskytování služeb digitalizace
									firemních procesů.
								</p>
								<div className='bg-gray-50 p-4 rounded-lg'>
									<p className='text-gray-700 mb-1'>
										<strong>Poskytovatel:</strong> Calderon Czech Republic s.r.o.
									</p>
									<p className='text-gray-700 mb-1'>
										<strong>Adresa:</strong> Dlouhá 3458/2a, 400 01 Ústí nad Labem
									</p>
									<p className='text-gray-700 mb-1'>
										<strong>IČO:</strong> 27582787
									</p>
									<p className='text-gray-700 mb-1'>
										<strong>Email:</strong> kancelar@vkurzu.cz
									</p>
									<p className='text-gray-700 mb-1'>
										<strong>Telefon:</strong> +420 474 777 200
									</p>
								</div>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									2. Předmět smlouvy
								</h3>
								<p className='text-gray-700 mb-3'>
									Předmětem smlouvy je poskytování služeb v oblasti:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Digitalizace firemních dokumentů a procesů</li>
									<li>Optimalizace a automatizace firemních procesů</li>
									<li>Implementace digitálního účetnictví</li>
									<li>Konzultační služby v oblasti digitalizace</li>
									<li>Technická podpora a školení</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									3. Uzavření smlouvy
								</h3>
								<p className='text-gray-700 mb-3'>
									Smlouva se uzavírá:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Písemnou formou (email, dopis)</li>
									<li>Ústně s následným písemným potvrzením</li>
									<li>Prostřednictvím objednávkového formuláře na webu</li>
								</ul>
								<p className='text-gray-700 mt-3'>
									Smlouva nabývá účinnosti dnem jejího uzavření, pokud není
									sjednáno jinak.
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									4. Ceny a platební podmínky
								</h3>
								<p className='text-gray-700 mb-3'>
									Ceny služeb jsou uvedeny v ceníku nebo jsou sjednány individuálně
									při uzavírání smlouvy. Ceny jsou uvedeny včetně DPH.
								</p>
								<p className='text-gray-700 mb-3'>
									Platební podmínky:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Zálohová faktura ve výši 50% ceny před zahájením práce</li>
									<li>Dokončovací faktura po předání výsledků</li>
									<li>Splatnost faktur: 14 dnů od data vystavení</li>
									<li>Platební metody: bankovní převod, hotovost</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									5. Práva a povinnosti poskytovatele
								</h3>
								<p className='text-gray-700 mb-3'>
									Poskytovatel se zavazuje:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Poskytovat služby s náležitou péčí a odborností</li>
									<li>Dodržovat sjednané termíny</li>
									<li>Zachovávat mlčenlivost o obchodních tajemstvích</li>
									<li>Poskytovat technickou podporu podle sjednaného rozsahu</li>
									<li>Zaručit funkčnost dodaných řešení</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									6. Práva a povinnosti zákazníka
								</h3>
								<p className='text-gray-700 mb-3'>
									Zákazník se zavazuje:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Poskytovat potřebné informace a dokumenty</li>
									<li>Spolupracovat při realizaci projektu</li>
									<li>Včas platit sjednané ceny</li>
									<li>Nepředávat třetím osobám přístupy k systémům</li>
									<li>Dodržovat licenční podmínky software</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									7. Ochrana osobních údajů
								</h3>
								<p className='text-gray-700 mb-3'>
									Zpracování osobních údajů se řídí samostatnou informací o
									zpracování osobních údajů, která je součástí těchto obchodních
									podmínek.
								</p>
								<p className='text-gray-700'>
									Podrobné informace najdete na stránce{' '}
									<Link
										href='/privacy'
										className='text-brand-primary hover:underline'
									>
										Ochrana osobních údajů
									</Link>
									.
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									8. Odpovědnost
								</h3>
								<p className='text-gray-700 mb-3'>
									Odpovědnost poskytovatele je omezena na:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Přímé škody způsobené zaviněním poskytovatele</li>
									<li>Maximální výši odpovídající ceně sjednaných služeb</li>
									<li>Škody vzniklé v důsledku porušení smlouvy</li>
								</ul>
								<p className='text-gray-700 mt-3'>
									Poskytovatel neodpovídá za nepřímé škody, ušlý zisk nebo
									ztrátu dat způsobenou chybou zákazníka.
								</p>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									9. Ukončení smlouvy
								</h3>
								<p className='text-gray-700 mb-3'>
									Smlouva může být ukončena:
								</p>
								<ul className='list-disc list-inside text-gray-700 space-y-1 ml-4'>
									<li>Dohodou obou stran</li>
									<li>Výpovědí s 30denní výpovědní lhůtou</li>
									<li>Okamžitě při podstatném porušení smlouvy</li>
									<li>Uplynutím doby, na kterou byla uzavřena</li>
								</ul>
							</section>

							<section>
								<h3 className='text-xl font-semibold text-brand-secondary mb-3'>
									10. Závěrečná ustanovení
								</h3>
								<p className='text-gray-700 mb-3'>
									Tyto obchodní podmínky jsou platné a účinné od 15. ledna 2025.
									Poskytovatel si vyhrazuje právo na jejich změnu s předchozím
									oznámením zákazníkovi.
								</p>
								<p className='text-gray-700 mb-3'>
									Všechny spory budou řešeny přednostně smírně. V případě
									neshody se strany zavazují k mediaci. Pokud se nedohodnou,
									spory řeší příslušný soud v České republice.
								</p>
								<p className='text-gray-700'>
									Tyto obchodní podmínky se řídí právním řádem České republiky.
								</p>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 