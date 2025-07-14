<script>
	import { ArtistCard } from '$lib/entities';
	import { extensions, ShowMoreDataBtn } from '$lib/shared';

	let showFull = false;
</script>

<section class="my-20 flex min-h-screen w-full flex-col items-center justify-center pb-20 ">
	<h2 class="font-graffity mb-10 title max-w-xl text-center text-3xl lg:text-6xl">
		Artists by countries
	</h2>

	<a name="artists" />
	<a name="extensions" />

	<div class="flex  lg:w-10/12 xl:w-10/12 w-full  flex-row flex-wrap lg:justify-between xl:justify-between justify-center   ">
		{#each showFull ? extensions : extensions.slice(0, 6) as extension}
			<ArtistCard {extension} />
		{/each}
	</div>

	<ShowMoreDataBtn bind:showFull link={'#artists'} title={'Extensions'} />
</section>
