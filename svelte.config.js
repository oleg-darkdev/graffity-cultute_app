import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	vitePlugin: {
		// inspector: { toggleKeyCombo: 'control' }
	},
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			runtime: 'edge'
		}),
		csrf: {
			checkOrigin: false
		},
		files: {
			appTemplate: 'src/app/app.html',
			errorTemplate: 'src/app/error.html'
		},
		alias: {
			$i18n: 'src/i18n',
			$entitiesLanding: 'src/lib/entities/landing',
			$entitiesApp: 'src/lib/entities/app',
			$widgetsLanding: 'src/lib/widgets/landing',
			$widgetsApp: 'src/lib/widgets/app',
			$sharedUi: 'src/lib/shared/ui',
			$sharedData: 'src/lib/shared/data',
			$sharedStores: 'src/lib/shared/stores',
			$sharedUtils: 'src/lib/shared/utils',
			$sharedTypes: 'src/lib/shared/types'
		}
	},
	compilerOptions: {
		runes: true
	}
};

export default config;
