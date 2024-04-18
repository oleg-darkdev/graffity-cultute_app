import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'edge'
		}),
		alias: {
			$entities: 'src/lib/entities',
			$features: 'src/lib/features',
			$processes: 'src/lib/processes',
			$widgets: 'src/lib/widgets',
			$stores: 'src/lib/shared/stores',
			$shared: 'src/lib/shared'
		}
	},

	preprocess: preprocess({
		postcss: true
	})
};

export default config;
