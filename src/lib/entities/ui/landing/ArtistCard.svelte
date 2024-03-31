<script>
	export let extension;
</script>

<div
	class="hover:delay-550 group mb-10 border-2 border-neutral-900 pt-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400  hover:transition hover:duration-1000  hover:ease-in-out"
>
	<div class="wrapper mx-auto h-full">
		<div class="overviewInfo ">
			<div class="relative mb-14 flex h-[250px] flex-col justify-between ">
				<div class="mb-3 text-xl">
					<span>Artists</span>

					<h3 class="group-hover:text-yellow-400">{extension.artists.length}</h3>
				</div>
				<div class="mb-3 text-xl">
					<span>Relise</span>

					<h3 class="group-hover:text-yellow-400">{extension.relise}</h3>
				</div>
				<div class="mb-3 text-xl">
					<span>Cards</span>

					<h3 class="group-hover:text-yellow-400">{extension.cards}</h3>
				</div>

				{#each extension.features as data}
					<div class="mb-3 text-xl">
						<span>{data.title}</span>

						<h3 class="group-hover:text-yellow-400">{extension.subTitle}</h3>
					</div>
				{/each}
				<div class="text-xl ">
					<span>Country</span>

					<h3 class="group-hover:text-yellow-400">{extension.country}</h3>
				</div>
				<!-- <div class="-mt-2 mb-4 text-xl">
					<span>PRICE</span>

					<h3 class="font-dollar -mt-2 text-3xl group-hover:text-yellow-400 ">
						$ <span class="font-graffity">50</span>
					</h3>
				</div> -->

				<div class="productImage">
					<img
						src="/images/extensions/{extension.img}"
						alt="product: boardgame graffiti chronicles image"
					/>
				</div>
			</div>
		</div>
		<!-- overview info -->

		<div
			class="productSpecifications h-full group-hover:bg-yellow-400  group-hover:transition  group-hover:duration-1000   group-hover:ease-in-out"
		>
			<h1 class="mt-6 mb-2 text-2xl group-hover:text-black">{extension.title}</h1>
			<p class="mb-2 text-zinc-700 group-hover:text-black">
				This extension includes cards with the art of graffiti artists from the country of <a
					href="/"
					target="_blank"
					class="font-bold text-yellow-600 underline group-hover:text-black">{extension.country}</a
				>.
			</p>

			<p class="mb-10 text-zinc-700 group-hover:text-black">
				List of graffiti artists in this extension: <br />
				{#each extension.artists as artist}
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

			<div class="flex flex-row justify-between ">
				<h3 class="font-dollar text-6xl text-yellow-400 group-hover:text-black">
					$ <span class="font-graffity text-yellow-400 group-hover:text-black"
						>{extension.price}</span
					>
				</h3>

				<button
					class="font-graffity mb-6 bg-yellow-400   px-3 py-5 text-2xl text-black group-hover:bg-black  group-hover:text-yellow-400"
					>Buy Now</button
				>
			</div>
		</div>
		<!-- product specificaiton -->
	</div>
</div>

<style>
	.wrapper {
		width: 450px;
		overflow: hidden;
	}

	.overviewInfo,
	.productSpecifications {
		padding: 24px;
	}

	.productImage {
		position: absolute;
		max-width: 400px;
		width: auto;
		height: 280px;
		transform: rotate(-90deg) translate(-56px, 66px);
		transition: ease 2s all;
	}
	.productImage img {
		width: 100%;
		height: 400px;
	}

	.checkoutButton {
		display: flex;
		width: 100%;

		overflow: hidden;
		box-shadow: -2px -2px 2px 0px rgba(80, 80, 80, 0.1), 2px 2px 3px 0px rgba(12, 12, 12, 0.3),
			inset 0px 0px 0px 2px rgba(80, 80, 80, 0.2);
		margin-top: 30px;
		justify-content: space-between;
		align-items: center;
	}
</style>
