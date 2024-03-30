<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<main class="scrollbar-x-hide overflow-auto">
	<slot />
</main>

<style>
	:global(h1, h2, h3, h4, h5, h6, .font-graffity) {
		font-family: 'graffity';
		line-height: 1.2;
	}

  :global(.font-dollar) {
		font-family: 'dollar';
		line-height: 1.2;
	}

	:global(html) {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-transform: uppercase;
		text-rendering: optimizelegibility;
	}

	@font-face {
		font-family: 'graffity';
		font-style: normal;
		font-weight: 500;

		src: local(''), /* Super Modern Browsers */ url('/fonts/graffity.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/graffity.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/graffity.svg') format('svg'); /* Legacy iOS */
	}

	@font-face {
		font-family: 'dollar';
		font-style: normal;
		font-weight: 500;

		src:
			/* Modern Browsers */ url('/fonts/dollar.ttf') format('truetype'); /* Legacy iOS */
	}
</style>
