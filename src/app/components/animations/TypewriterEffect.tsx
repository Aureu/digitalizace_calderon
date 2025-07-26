'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
	words: string[];
	baseText?: string;
	typingSpeed?: number;
	deletingSpeed?: number;
	pauseTime?: number;
	className?: string;
}

export default function TypewriterEffect({
	words,
	baseText = '',
	typingSpeed = 100,
	deletingSpeed = 50,
	pauseTime = 2000,
	className = '',
}: TypewriterEffectProps) {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		const currentWord = words[currentWordIndex];

		const timeout = setTimeout(
			() => {
				if (isDeleting) {
					// Deleting characters
					setCurrentText(currentWord.substring(0, currentText.length - 1));

					if (currentText === '') {
						setIsDeleting(false);
						setCurrentWordIndex((prev) => (prev + 1) % words.length);
					}
				} else {
					// Typing characters
					setCurrentText(currentWord.substring(0, currentText.length + 1));

					if (currentText === currentWord) {
						// Word completed, pause then start deleting
						setTimeout(() => setIsDeleting(true), pauseTime);
					}
				}
			},
			isDeleting ? deletingSpeed : typingSpeed
		);

		return () => clearTimeout(timeout);
	}, [
		currentText,
		isDeleting,
		currentWordIndex,
		words,
		typingSpeed,
		deletingSpeed,
		pauseTime,
	]);

	return (
		<span className={className}>
			{baseText}
			<span className='relative'>
				{currentText}
				<span className='animate-pulse text-brand-primary ml-1'>|</span>
			</span>
		</span>
	);
}
