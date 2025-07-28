'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BusinessIcons } from './icons/icons';

interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	message: string;
	honeypot?: string; // Hidden field for bots
}

interface ContactProps {
	className?: string;
}

export default function Contact({ className = '' }: ContactProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>();

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.message || 'Chyba při odesílání formuláře');
			}

			setSubmitSuccess(true);
			reset();

			// Reset success message after 5 seconds
			setTimeout(() => setSubmitSuccess(false), 5000);
		} catch (error) {
			console.error('Form submission error:', error);
			// You could add error state here for better UX
			alert('Chyba při odesílání formuláře. Zkuste to prosím později.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id='contact'
			className={`bg-white py-16 sm:py-20 px-4 ${className}`}
			aria-label='Kontaktní formulář'
		>
			<div className='max-w-6xl mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-8 sm:mb-12'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-brand-secondary mb-4 sm:mb-6'>
						Kontaktujte nás
					</h2>
					<p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0'>
						Vyplňte formulář a my se vám ozveme do 24 hodin s nezávaznou
						konzultací
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-8 sm:gap-12'>
					{/* Contact Information */}
					<div className='lg:order-1'>
						<h3 className='text-xl font-semibold text-brand-secondary mb-6'>
							Kontaktní informace
						</h3>
						<div className='space-y-6'>
							<div className='flex items-start space-x-4'>
								<div className='w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-6 h-6 text-brand-primary'
									>
										<path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'></path>
										<circle cx='12' cy='10' r='3'></circle>
									</svg>
								</div>
								<div>
									<h4 className='font-semibold text-brand-secondary mb-1'>
										Adresa
									</h4>
									<p className='text-gray-600'>
										Dlouhá 3458/2a
										<br />
										400 01 Ústí nad Labem
										<br />
										Česká republika
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-6 h-6 text-brand-primary'
									>
										<path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7'></path>
										<rect x='2' y='4' width='20' height='16' rx='2'></rect>
									</svg>
								</div>
								<div>
									<h4 className='font-semibold text-brand-secondary mb-1'>
										Email
									</h4>
									<a
										href='mailto:kancelar@calderon.cz'
										className='text-brand-primary hover:text-brand-secondary transition-colors duration-200'
									>
										kancelar@calderon.cz
									</a>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-6 h-6 text-brand-primary'
									>
										<path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384'></path>
									</svg>
								</div>
								<div>
									<h4 className='font-semibold text-brand-secondary mb-1'>
										Telefon
									</h4>
									<a
										href='tel:+420474777200'
										className='text-brand-primary hover:text-brand-secondary transition-colors duration-200'
									>
										+420 474 777 200
									</a>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-6 h-6 text-brand-primary'
									>
										<path d='M12 6v6l4 2'></path>
										<circle cx='12' cy='12' r='10'></circle>
									</svg>
								</div>
								<div>
									<h4 className='font-semibold text-brand-secondary mb-1'>
										Pracovní doba
									</h4>
									<p className='text-gray-600'>
										Pondělí - Pátek: 9:00 - 17:00
										<br />
										Sobota - Neděle: Zavřeno
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className='lg:order-2'>
						{/* Success Message */}
						{submitSuccess && (
							<div className='mb-8 p-4 bg-green-50 border border-green-200 rounded-lg'>
								<div className='flex items-center'>
									<BusinessIcons.success className='w-6 h-6 text-green-500 mr-3' />
									<p className='text-green-800 font-medium'>
										Děkujeme! Vaše zpráva byla úspěšně odeslána. Brzy se vám
										ozveme.
									</p>
								</div>
							</div>
						)}

						{/* Contact Form */}
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='space-y-4 sm:space-y-6'
							noValidate
						>
							{/* Name Field */}
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Jméno a příjmení <span className='text-red-500'>*</span>
								</label>
								<input
									type='text'
									id='name'
									{...register('name', {
										required: 'Jméno je povinné',
										minLength: {
											value: 2,
											message: 'Jméno musí mít alespoň 2 znaky',
										},
									})}
									className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
										errors.name
											? 'border-red-500 bg-red-50'
											: 'border-gray-300 hover:border-gray-400'
									}`}
									placeholder='Vaše jméno'
									aria-invalid={errors.name ? 'true' : 'false'}
									aria-describedby={errors.name ? 'name-error' : undefined}
								/>
								{errors.name && (
									<p
										id='name-error'
										className='mt-2 text-sm text-red-600 flex items-center'
									>
										<span className='mr-1'>⚠</span>
										{errors.name.message}
									</p>
								)}
							</div>

							{/* Email Field */}
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Email <span className='text-red-500'>*</span>
								</label>
								<input
									type='email'
									id='email'
									{...register('email', {
										required: 'Email je povinný',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Neplatný formát emailu',
										},
									})}
									className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
										errors.email
											? 'border-red-500 bg-red-50'
											: 'border-gray-300 hover:border-gray-400'
									}`}
									placeholder='vas@email.cz'
									aria-invalid={errors.email ? 'true' : 'false'}
									aria-describedby={errors.email ? 'email-error' : undefined}
								/>
								{errors.email && (
									<p
										id='email-error'
										className='mt-2 text-sm text-red-600 flex items-center'
									>
										<span className='mr-1'>⚠</span>
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Phone Field */}
							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Telefon
								</label>
								<input
									type='tel'
									id='phone'
									{...register('phone', {
										pattern: {
											value: /^(\+420)?[0-9\s]{9,}$/,
											message:
												'Neplatný formát telefonu (použijte formát: +420 123 456 789)',
										},
									})}
									className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
										errors.phone
											? 'border-red-500 bg-red-50'
											: 'border-gray-300 hover:border-gray-400'
									}`}
									placeholder='+420 123 456 789'
									aria-invalid={errors.phone ? 'true' : 'false'}
									aria-describedby={errors.phone ? 'phone-error' : undefined}
								/>
								{errors.phone && (
									<p
										id='phone-error'
										className='mt-2 text-sm text-red-600 flex items-center'
									>
										<span className='mr-1'>⚠</span>
										{errors.phone.message}
									</p>
								)}
							</div>

							{/* Message Field */}
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Zpráva <span className='text-red-500'>*</span>
								</label>
								<textarea
									id='message'
									rows={5}
									{...register('message', {
										required: 'Zpráva je povinná',
										minLength: {
											value: 10,
											message: 'Zpráva musí mít alespoň 10 znaků',
										},
									})}
									className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-vertical ${
										errors.message
											? 'border-red-500 bg-red-50'
											: 'border-gray-300 hover:border-gray-400'
									}`}
									placeholder='Popište vaše potřeby a my vám připravíme řešení na míru...'
									aria-invalid={errors.message ? 'true' : 'false'}
									aria-describedby={
										errors.message ? 'message-error' : undefined
									}
								/>
								{errors.message && (
									<p
										id='message-error'
										className='mt-2 text-sm text-red-600 flex items-center'
									>
										<span className='mr-1'>⚠</span>
										{errors.message.message}
									</p>
								)}
							</div>

							{/* Honeypot field - hidden from users but visible to bots */}
							<div className='absolute left-[-9999px] top-[-9999px]'>
								<input
									type='text'
									id='website'
									{...register('honeypot')}
									tabIndex={-1}
									autoComplete='off'
								/>
							</div>

							{/* Submit Button */}
							<button
								type='submit'
								disabled={isSubmitting}
								className={`w-full px-8 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-brand-primary focus:ring-opacity-50 ${
									isSubmitting
										? 'bg-gray-400 cursor-not-allowed rounded-lg font-semibold transition-all duration-300'
										: 'btn-primary'
								}`}
								aria-label={
									isSubmitting ? 'Odesílání zprávy...' : 'Odeslat zprávu'
								}
							>
								{isSubmitting ? (
									<span className='flex items-center justify-center'>
										<svg
											className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
										>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'
											></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
											></path>
										</svg>
										Odesílám...
									</span>
								) : (
									'Odeslat zprávu'
								)}
							</button>
						</form>

						{/* Additional Info */}
						<div className='mt-8 text-center'>
							<p className='text-sm text-gray-500'>
								<span className='text-red-500'>*</span> Povinná pole
							</p>
							<p className='text-xs text-gray-400 mt-2'>
								Vaše údaje používáme pouze pro účely komunikace a nejsou
								předávány třetím stranám.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
