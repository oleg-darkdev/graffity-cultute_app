export const config = {
	baseUrl: import.meta.env.VITE_BASE_URL
};

export const siteSeoBase = {
	title: '',
	description: '',
	keywords: '44games, ',
	canonical: import.meta.env ? import.meta.env.VITE_SITE_URL : '' // https://www.example.com
};
