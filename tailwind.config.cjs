/** @type {import('tailwindcss').Config}*/
const plugin = require('tailwindcss/plugin');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#ffb800',
				secondary: '#fffedb',
				dark: '#111111',
				gray: {
					100: '#1e293b',
					200: '#334155',
					300: '#2b2b2b',
					400: '#4b5563'
				},
				light: {
					100: '#f0f5fa',
					200: '#d1d5db'
				}
			},
			keyframes: {
				reverseSpin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-360deg)' }
				}
			},
			animation: {
				'reverse-spin': 'reverseSpin 2s linear infinite'
			}
		}
	},
	plugins: [
		// plugin(function ({ addBase }) {
		// 	addBase({
		// 		html: { fontSize: '10px' }
		// 	});
		// })
		require('@tailwindcss/typography'),
		require('daisyui')
	]
};

module.exports = config;
