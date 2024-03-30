<script>
	import { ArtistCard } from '$lib/entities';
	import { extensions } from '$lib/shared';
</script>

<section class="min-h-screen w-full flex justify-center">
	<a name="artists" />

	<div class="w-8/12  flex flex-wrap flex-row justify-between  ">
    {#each extensions as extension}
		<ArtistCard {extension} />
	{/each}
  </div>
</section>
