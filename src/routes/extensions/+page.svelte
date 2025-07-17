<script>
	import {} from '$widgetsLanding';

	import { extensions } from '$sharedData';
</script>

<svelte:head>
	<title>Graffity Chronicles</title>
</svelte:head>

<section class=" lg:-pt-10 mx-auto w-full px-5 lg:py-12 lg:pb-32 xl:py-12">
	<!-- <div class="mx-auto flex max-w-5xl flex-col-reverse lg:flex-row"> -->

	<!-- <section class=" prose-xl prose group mb-6 flex w-full justify-center"> -->
	<div
		class=" mx-auto flex max-w-2xl flex-col justify-center border-2 border-yellow-400  bg-black p-4"
	>
		<div class="mx-auto">
			<img class="scale-150" src={extensions[0].img} alt="{extensions[0].title} banner" />
		</div>

		<div class="group prose prose-xl">
			<div class="px-5 sm:px-0 sm:px-5 md:px-0">
				<div class="mb-6">
					<h1 class="font-graffity text-4xl">
						{extensions[0].title} (<span class="mr-6 text-xl font-bold">Relise</span>
						<span class="text-2xl text-yellow-400">{extensions[0].relise}</span>)
					</h1>
				</div>
				<p class="mb-2 text-zinc-700 ">
					This extension includes cards with the art of graffiti artists from the country of <a
						href="/"
						target="_blank"
						class="font-bold text-yellow-600 underline "
						>{extensions[0].country}</a
					>.
				</p>

				<h3 class="mb-3 text-xl text-yellow-400"><span>Cards</span> {extensions[0].cards}</h3>

				<div class="border-light my-6 border-t"></div>

				<div
					class="productSpecifications h-full group-hover:bg-yellow-400 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out"
				>
					{#each extensions[0].features as data}
						<div class="mb-3 text-xl">
							<span>{data.title}</span>

							<h3 class="group-hover:text-yellow-400">{extensions[0].subTitle}</h3>
						</div>
					{/each}

					<div class="p primary-font">
						<div class=" mt-6">
							<p><strong>{extensions[0].shortDesc}</strong></p>
						</div>
						<!-- <ul role="list" class="mt-12">
						<li class="p-small">Alcohol: 40.0% vol.</li>

						<li class="p-small">Allergens: None</li>
					</ul> -->
					</div>
					<p class="mb-10 text-zinc-700 group-hover:text-black">
						List of graffiti artists in this extension: <br />
						{#each extensions[0].artists as artist}
							<span class="mr-1"
								><a
									class="font-bold text-yellow-600 underline group-hover:text-black"
									target="_blank"
									href={artist.link}
									>{artist.nickName},
								</a></span
							>
						{/each}
					</p>

					<div class="flex flex-row justify-between">
						<h3 class="font-dollar text-6xl text-yellow-400 group-hover:text-black">
							$ <span class="font-graffity text-yellow-400 group-hover:text-black"
								>{extensions[0].price}</span
							>
						</h3>

						<button
							class="font-graffity mb-6 bg-yellow-400 px-3 py-5 text-2xl text-black group-hover:bg-black group-hover:text-yellow-400"
							>Buy Now</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
