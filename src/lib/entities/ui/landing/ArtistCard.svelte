<script>
	export let extension;

	import { onMount } from 'svelte';

	// onMount(() => {
	// 	let graphElem = document.querySelector('.imgBx');

	// 	graphElem.setAttribute('data-before', extension.country);
	// });
</script>

<div
	class=" group my-6 h-auto border-2  border-neutral-900 hover:delay-550 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:transition hover:duration-1000  hover:ease-in-out"
>
	<div class="container  max-w-md ">
		<div
			class=" imgBx w-full bg-neutral-900 text-neutral-700 group-hover:bg-yellow-600 group-hover:text-black "
		>
			<img
				class=""
				style="max-width: 600px;"
				src="/images/extensions/{extension.img}"
				alt="{extension.title} extension"
			/>
		</div>
		<div class="details">
			<div class="content prose   pt-4">
				<!-- <p>Quantity of cards: <span>{extension.cardsInclude}</span></p> -->

				<p class="mb-2 text-zinc-700 group-hover:text-neutral-400">
					This extension includes cards with the art of graffiti artists from the country of <span
						class="text-neutral-300 group-hover:text-yellow-600">{extension.country}</span
					>.
				</p>

				<p class="mb-10 text-zinc-700 group-hover:text-neutral-400">
					List of graffiti artists in this extension: <br />
					{#each extension.artists as artist}
						<span class="mr-1"
							><a class="group-hover:text-yellow-600 " href={artist.link}
								>{artist.nickName},
							</a></span
						>
					{/each}
				</p>

				<h3 class="font-dollar group-hover:text-yellow-400">
					$ <span class="group-hover:text-yellow-400">{extension.price}</span>
				</h3>
				<button
					class="mb-6 bg-black  text-white hover:bg-yellow-200 group-hover:bg-yellow-400 group-hover:text-black"
					>Buy Now</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		height: 400px;
		margin: 20px;
	}

	.container .imgBx {
		position: relative;
		height: 100%;
		transition: 0.3s linear;
	}

	.container .imgBx:before {
		content: 'Extension';
		/* content: attr(data-before); */
		font-family: 'graffity';
		position: absolute;
		top: 0px;
		left: 40px;
		/* opacity: 0.2; */
		font-size: 5em;
	}

	.container .imgBx img {
		position: relative;
		transform: rotate(-5deg);
		left: -70px;
		bottom: -20px;
		transition: 0.9s linear;
	}

	/* .container .details h2 {
		padding: 0;
		font-size: 2.4em;
		line-height: 1em;
	} */

	.container .details h2 span {
		font-size: 0.4em;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.container .details p {
		max-width: 85%;
		/* font-size: 15px; */
	}

	.container .details h3 {
		margin: 0;
		padding: 0;
		font-size: 2.5em;
		float: left;
	}
	.container .details button {
		border: none;
		outline: none;
		padding: 15px 20px;
		margin-top: 5px;
		font-size: 16px;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-weight: 600;
		border-radius: 40px;
		float: right;
	}

	/* responsive */
	@media (max-width: 900px) {
		.container {
			height: auto;
		}
		.container .imgBx {
			padding: 40px;
			box-sizing: border-box;
			width: 100% !important;
			height: auto;
			text-align: center;
			overflow: hidden;
		}
		.container .imgBx img {
			left: initial;
			/* max-width: 100%; */
			transform: rotate(0deg);
		}
		.details {
			width: 100% !important;
			height: auto;
			padding: 20px;
		}
		.container .details p {
			margin-left: 0;
			max-width: 100%;
		}
	}
</style>
