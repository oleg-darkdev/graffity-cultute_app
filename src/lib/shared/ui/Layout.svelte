<script lang="ts">
	import { Faq, AntySystemsProject, BackgroundVideo, Header, Footer } from '$widgetsLanding';

	import { SprayPointer } from '$sharedUi';
	// import { navigation, categories, boardgamesList } from '$sharedData';
	import '../../../app/app.css';

	let { children } = $props();
</script>

<div class="overflow-hidden w-full">
	<!-- <Header {navigation} {boardgamesList}/> -->

	<Header />

	{@render children()}
	<!-- <Footer {navigation} {categories}/> -->

	<AntySystemsProject />

	<Faq />

	<Footer />

	<SprayPointer />

	<BackgroundVideo />
</div>

<style lang="postcss">
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

		src:
			local(''),
			/* Super Modern Browsers */ url('/fonts/graffity.woff') format('woff'),
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
