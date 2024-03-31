<script>
	import {
		StylesList,
		Hero,
		Faq,
		ArtistsSection,
		VerticalSlider,
		About,
		AntySystemsProject
	} from '$lib/widgets';
</script>

<svelte:head>
	<title>Graffity chronicles boardgame</title>
</svelte:head>

<Hero />

<About />

<StylesList />

<section class="min-h-screen w-full ">
	<h2 class="mt-20 mb-6 w-full text-center lg:text-6xl">Very useful app</h2>

	<VerticalSlider />
</section>

<ArtistsSection />

<AntySystemsProject />

<Faq />
