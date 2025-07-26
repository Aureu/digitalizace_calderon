import SkipLinks from './components/SkipLinks';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
	return (
		<>
			<SkipLinks />

			{/* Navigation */}
			<Navigation />

			<main id='main-content' className='min-h-screen pt-16'>
				{/* Hero Section */}
				<section id='hero'>
					<Hero />
				</section>

				{/* Services Section */}
				<section id='services'>
					<Services />
				</section>

				{/* Benefits Section */}
				<section id='benefits'>
					<Benefits />
				</section>

				{/* About Section */}
				<section id='about'>
					<About />
				</section>

				{/* Contact Section */}
				<section id='contact'>
					<Contact />
				</section>

				{/* Footer */}
				<Footer />
			</main>
		</>
	);
}
