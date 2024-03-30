<script>
	export let extension;

	import { onMount } from 'svelte';

	// onMount(() => {
	// 	let graphElem = document.querySelector('.imgBx');

	// 	graphElem.setAttribute('data-before', extension.country);
	// });
</script>

<div class="group my-6 h-auto">
	<div class="container  max-w-md ">
		<div class=" imgBx w-full bg-neutral-900">
			<img
				class=""
				style="max-width: 600px;"
				src="/images/extensions/svg/{extension.img}"
				alt="{extension.title} extension"
			/>
		</div>
		<div class="details">
			<div class="content">
				<h2 class="my-2 text-zinc-600 group-hover:text-neutral-100">
					{extension.title} <br />
					<!-- <span>Running Collection</span> -->
				</h2>
				<!-- <p>Quantity of cards: <span>{extension.cardsInclude}</span></p> -->

				<p class="text-zinc-700 group-hover:text-neutral-300">
					Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan
					Proto-Lyte is made for all-day, bouncy comfort. Lightweight Breathability: Lightweight
					woven fabric with real or synthetic leather provides breathable support.
				</p>

				<h3 class="font-dollar group-hover:">$ <span class=''>{extension.price}</span></h3>
				<button>Buy Now</button>
			</div>
		</div>
	</div>
</div>
<style>
	@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,800&display=swap');

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
		position: absolute;
		top: 0px;
		left: 24px;
		color: #000;
		opacity: 0.2;
		font-size: 5em;
		font-weight: 800;
	}

	.container .imgBx img {
		position: relative;
		transform: rotate(-5deg);
		left: -70px;
		bottom: -20px;

		transition: 0.9s linear;
	}

	.container .details h2 {
		padding: 0;
		font-size: 2.4em;
		line-height: 1em;
	}

	.container .details h2 span {
		font-size: 0.4em;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: #999;
	}

	.container .details p {
		max-width: 85%;
		font-size: 15px;
		margin-bottom: 36px;
	}

	.container .details h3 {
		margin: 0;
		padding: 0;
		font-size: 2.5em;
		color: #a2a2a2;
		float: left;
	}
	.container .details button {
		background: #000;
		color: #fff;
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
