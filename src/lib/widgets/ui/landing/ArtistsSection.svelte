<script>
	import { ArtistCard } from '$lib/entities';
	import { extensions } from '$lib/shared';
</script>

<section class="flex min-h-screen w-full justify-center flex-col items-center pt-20">
	<a name="artists" />

	<h2 class="font-graffity title max-w-xl lg:text-6xl text-center">Artists by countries</h2>

	<div class="flex  w-8/12 flex-row flex-wrap justify-between  ">
		{#each extensions as extension}
			<ArtistCard {extension} />
		{/each}
	</div>
</section>
