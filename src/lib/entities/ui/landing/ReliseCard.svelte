<script>
	const reliseData = [
		{
			title: 'release',
			subTitle: 'Fall 2025'
		},

		{
			title: 'complect',
			subTitle: 'BOX + APP'
		},
		{
			title: '',
			subTitle: ''
		}
	];
</script>

<div
	class="hover:delay-550 group mb-10 border-2 border-neutral-900 py-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400  hover:transition hover:duration-1000  hover:ease-in-out"
>
	<div class="wrapper mx-auto">
		<div class="overviewInfo ">
			<div class="relative mb-14 flex flex-col justify-between ">
				{#each reliseData as data}
					<!-- max-w-[100px] border-b border-gray-200  -->
					<div class="mb-3 text-xl">
						<span>{data.title}</span>

						<h3 class='group-hover:text-yellow-400'>{data.subTitle}</h3>
					</div>
				{/each}
				<div class="-mt-2 mb-4 text-xl">
					<span>PRICE</span>

					<h3 class="font-dollar -mt-2 text-3xl group-hover:text-yellow-400 ">
						$ <span class="font-graffity">50</span>
					</h3>
				</div>

				<div class="productImage">
					<img src="/images/character.png" alt="product: boardgame graffiti chronicles image" />
				</div>
			</div>
		</div>
		<!-- overview info -->

		<div
			class="productSpecifications group-hover:bg-yellow-400  group-hover:transition  group-hover:duration-1000   group-hover:ease-in-out"
		>
			<h1 class="mt-10 text-2xl group-hover:text-black">Lorem ipsum dolor</h1>
			<p class="group-hover:text-black">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam.
			</p>

			<div
				class="checkoutButton bg-yellow-400 px-3 py-4 text-black group-hover:bg-black  group-hover:text-yellow-400"
			>
				<button class="flex flex-row items-center justify-center">
					<p class="font-dollar mr-4 text-4xl group-hover:text-yellow-400">
						$ <span class="font-graffity group-hover:text-yellow-400">50</span>
					</p>

					<span class="font-graffity text-3xl">Pre-order now</span>
				</button>
			</div>
		</div>
		<!-- product specificaiton -->
	</div>
</div>

<style>
	.wrapper {
		width: 350px;
		overflow: hidden;
	}

	.overviewInfo,
	.productSpecifications {
		padding: 24px;
	}

	.productImage {
		position: absolute;
		min-width: 400px;
		width: auto;
		height: 230px;
		transform: rotate(-90deg) translate(-56px, 66px);
		transition: ease 2s all;
	}
	.productImage img {
		width: 100%;
		height: auto;
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
