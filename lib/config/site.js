// Site configuration for Hostly.io
import { FaFacebook, FaTiktok, FaRedditAlien } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter, FaSquareThreads } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';

const baseSiteConfig = {
	name: 'Hostly.io – AI eCommerce & Smart Page Hosting',
	description:
		'Hostly.io provides intelligent hosting and domain renewal solutions for AI-driven eCommerce and Smart Pages. Focused on maintaining stability, uptime reliability, and continuous performance optimization for your online business.',
	url: 'https://hostly.io',
	ogImage: 'https://hostly.io/logo.png',
	metadataBase: '/',
	keywords: [
		'AI hosting',
		'eCommerce hosting',
		'smart page hosting',
		'domain renewal service',
		'AI website maintenance',
		'website optimization',
		'hosting for online stores',
		'managed hosting solutions',
	],
	authors: [
		{
			name: 'Hostly.io Team',
			url: 'https://hostly.io/about',
		},
	],
	creator: 'Hostly.io',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	},
};

export const SiteConfig = {
	en: {
		name: 'Hostly.io – AI eCommerce & Smart Page Hosting',
		description:
			'Hostly.io delivers reliable and intelligent hosting for AI-powered eCommerce platforms and Smart Pages. Our solutions ensure stability, consistent uptime, and long-term optimization for your digital presence.',
		url: baseSiteConfig.url,
		ogImage: baseSiteConfig.ogImage,
		metadataBase: baseSiteConfig.metadataBase,
		keywords: baseSiteConfig.keywords,
		authors: baseSiteConfig.authors,
		icons: baseSiteConfig.icons,
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: baseSiteConfig.url,
			title: 'Hostly.io – AI eCommerce & Smart Page Hosting',
			description:
				'Experience reliable hosting built for AI-powered eCommerce and Smart Pages. Hostly.io provides ongoing optimization, performance care, and stability for modern digital businesses.',
			siteName: 'Hostly.io',
			images: [`${baseSiteConfig.url}/og.png`],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Hostly.io – AI eCommerce & Smart Page Hosting',
			description:
				'Refined hosting and domain renewal services for AI-driven eCommerce and Smart Pages — focused on stability, maintenance, and optimization for consistent growth.',
			images: [`${baseSiteConfig.url}/og.png`],
			creator: baseSiteConfig.creator,
		},
	},
};
