<script>
	const panels = [
		{ title: 'Styles', img: 'styles.jpg', icon: '', link: 'styles' },
		{ title: 'Artists', img: 'artist.jpg', icon: '', link: 'artists' },
		{ title: 'Pieces', img: 'pieces.jpg', icon: '', link: 'pieces' },
		{ title: 'Slang', img: 'slang.jpg', icon: '', link: 'slang' }
	];

	const links = [
		{
			title: 'ABOUT',
			link: '/about'
			// about
		},
		{
			title: 'Extensions',
			link: '#extensions'
		},
		// {
		// 	title: 'SHOP',
		// 	link: '/'
		// },
		{
			title: 'F.A.Q.',
			link: '#faq'
			// faq
		},

		{
			title: 'CONTACT',
			link: '#contact'
			//
		}

		// {
		// 	title: 'APP',
		// 	link: '/app'
		// },
	];
</script>

<!-- lg:min-h-screen xl:min-h-screen md:min-h-screen -->
<section class="min-h-screen">
	<nav class="w-full">
		<ul>
			<li>
				<a href="/" class="link">
					<img src="./images/logo.svg" class="" alt="Logo of boardgame: Graffiti Chronicles" />
				</a>
			</li>
		</ul>

		<ul>
			{#each links as link}
				<li>
					<a href={link.link} class="font-graffity text-md hidden-sm md:text-3xl lg:text-4xl">
						{link.title}
					</a>
				</li>
			{/each}

			<li class="bg-yellow-500 p-4 text-black">
				<a href="/" target="_blank" class="font-graffity text-md md:text-3xl lg:text-4xl"> App </a>
			</li>
		</ul>
	</nav>
	<!-- <div class=""> -->
	<article>
		<ul class="panels">
			{#each panels as panel}
				<li class="panel max-w-md lg:w-full">
					<!-- #{panel.link} -->
					<a href="/">
						<span class="font-graffity">
							{panel.title}

							<!-- {panel.icon} -->
						</span>
					</a>
					<img src="/images/hero/{panel.img}" class="h-full w-full" alt={panel.title} />
				</li>
			{/each}
		</ul>

		<h2 class="big-text">
			<span class="gradient-text letter">E</span>
			<span class="gradient-text letter">X</span>
			<span class="gradient-text letter">P</span>
			<span class="gradient-text letter">L</span>
			<span class="gradient-text letter">O</span>
			<span class="gradient-text letter">R</span>
			<span class="gradient-text letter">E</span>
		</h2>

		<span class="geo-square">
			<img src="/images/gifs/your_welcome.gif" alt="image of graffity, graphic purpose only" />
		</span>
	</article>
	<!-- </div> -->
</section>

<!-- All icons from freepik-->

<!--
    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  -->
<style>
	:root {
		--black: rgb(0 0 0);
		--white: rgb(255 255 255);
		--yellow: rgb(255 213 28);
		--light-yellow: rgb(255 209 98 / 60%);
		--gray: rgb(167 167 167 / 30%);
		--logo-dimensions: 18rem;
		--icon-dimensions: 3rem;
		--full-w: 100%;
		--full-h: 100%;
		--h2-clamp: clamp(10.5rem, 15vw, 30rem);
		--default-font-size: 1.8rem;
		--default-heading-size: 4.5rem;
		--duration: 0.2s;
		--short-duration: 350ms;
		--gap: 0.4rem;
		--default-padding: 1.2rem;
		--z-20: 20;
		--z-30: 30;
		--letter-animation: 5s;
		--step-letter-animation: 0.35s;
	}

	::-moz-selection {
		-webkit-background-clip: text;
		-webkit-text-fill-color: var(--yellow);
		background-color: var(--gray);
		color: var(--yellow);
	}

	::selection {
		-webkit-background-clip: text;
		-webkit-text-fill-color: var(--yellow);
		background-color: var(--gray);
		color: var(--yellow);
	}

	/* body {
		display: grid;
		grid-template-rows: 5rem calc(100vh - 5rem);
		min-height: 100vh;
		min-height: -webkit-fill-available;
	} */

	/* .panel:hover .fill {
		fill: var(--yellow);
	}
	.panel:hover img {
		filter: brightness(1);
	}
	.panel svg {
		width: calc(var(--logo-dimensions) / 6);
	} */

	.gradient-text {
		-webkit-background-clip: text;
		-webkit-text-fill-color: rgba(0, 0, 0, 0);
		background-image: linear-gradient(to bottom, var(--yellow), var(--light-yellow));
	}

	h2 {
		align-self: flex-end;
		display: inline-flex;
		flex-flow: row;
		font-size: var(--h2-clamp);
		line-height: 0.75;
		margin: 0 auto 6rem auto;
		position: relative;
		text-align: center;
		z-index: var(--z-30);
	}

	img {
		display: block;
		max-width: var(--full-w);
		-o-object-fit: cover;
		object-fit: cover;
		width: var(--full-w);
	}

	a {
		color: var(--white);
		cursor: pointer;
		/* font-size: var(--default-font-size); */
		text-decoration: none;
		touch-action: manipulation;
	}

	nav {
		background-color: var(--black);
		box-shadow: 0 0.8rem 2.4rem var(--shadow-color), 0 1.6rem 5.6rem var(--shadow-color),
			0 2.4rem 8rem var(--shadow-color);
		display: flex;
		flex-flow: row nowrap;
		grid-row: 1;
		padding: var(--default-padding);
	}
	nav ul {
		display: flex;
		flex-flow: row nowrap;
	}
	nav ul:nth-of-type(2) {
		align-items: center;
		gap: var(--default-padding);
		justify-content: center;
		width: var(--full-w);
	}
	nav ul:nth-of-type(2) li {
		align-items: center;
	}
	nav ul:nth-of-type(2) li:nth-child(-n + 3) {
		display: none;
		border-bottom: 0.4rem solid transparent;
		height: var(--full-h);
		padding: 0 var(--default-padding);
		transition: border var(--short-duration) ease-in;
	}
	nav ul:nth-of-type(2) li:first-of-type,
	nav ul:nth-of-type(2) li:last-of-type {
		margin-left: auto;
	}
	nav ul:nth-of-type(2) li:hover {
		border-color: var(--light-yellow);
	}
	nav ul:nth-of-type(2) li:hover a {
		color: var(--yellow);
	}
	nav img {
		width: calc(var(--logo-dimensions) / 2);
	}
	nav a {
		transition: color var(--short-duration) ease-in;
	}

	.cta {
		border: 0.2rem solid transparent;
		color: var(--light-yellow);
		overflow: hidden;
		padding: var(--default-padding);
		position: relative;
	}
	.cta:hover,
	.cta:focus {
		border-color: var(--yellow);
		color: var(--black);
		box-shadow: 0 0.5rem 0.5rem -0.4rem var(--yellow);
		transform: translateY(-0.25rem);
	}

	section {
		display: flex;
		flex-flow: column wrap;
		grid-row: 2;
		overflow: hidden;
	}

	article {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: var(--full-h);
		position: relative;
		width: var(--full-w);
	}
	article > * {
		grid-column: 1;
		grid-row: 1;
	}

	.panels {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18.5rem, 1fr));
		z-index: var(--z-20);
	}

	@media (max-width: 560px) {
		.panels {
			display: flex;
			flex-direction: column;
		}
		.panel {
			height: 120px;
		}

		.big-text {
			/* display: none; */
			font-size: 4rem;
			/* line-height: 0.75; */
			margin: 0 auto -4rem auto;
		}
		.geo-square img {
			-webkit-animation: scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94)
					forwards,
				slit-out-vertical 1s ease-in forwards;
			animation: scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
				slit-out-vertical 1s ease-in forwards;
			-webkit-animation-delay: 2s, 4.5s;
			animation-delay: 2s, 4.5s;
			opacity: 0;
			/* height: 200px; */
			width: 350px;
			transform: scale(1.75);
		}
		.geo-square {
			align-self: center;
			-webkit-animation: scale-in-hor-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94)
					forwards,
				scale-out-hor-left var(--duration) cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
			animation: scale-in-hor-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
				scale-out-hor-left var(--duration) cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
			-webkit-animation-delay: 1.5s, 5.5s;
			animation-delay: 1.5s, 5.5s;
			box-shadow: 0 0 0 var(--default-padding) var(--yellow);
			display: grid;
			height: calc(var(--default-padding) * 12);
			margin: 0 auto calc(var(--default-padding) * 4);
			opacity: 0;
			position: relative;
			transition: color var(--duration);
			width: 350px;
			z-index: var(--z-30);
		}
	}

	.panel {
		-webkit-animation: scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94)
			forwards;
		animation: scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
		opacity: 0;
		position: relative;
	}
	.panel a {
		font-size: var(--default-heading-size);
		left: 0;
		margin: 0 auto;
		position: absolute;
		right: 0;
		top: 0;
	}
	.panel img {
		filter: brightness(0.33);
		/* height: var(--full-h); */
	}
	.panel span {
		align-items: center;
		display: flex;
		flex-flow: row wrap;
		height: -webkit-fit-content;
		height: -moz-fit-content;
		height: fit-content;
		justify-content: space-evenly;
		opacity: 0;
		padding: var(--default-padding) var(--gap);
		position: relative;
		width: var(--full-w);
		z-index: var(--z-30);
	}
	.panel span::before {
		background-color: var(--gray);
		bottom: 0;
		content: '';
		display: block;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		transform: scaleY(0);
		transform-origin: bottom left;
		transition: transform var(--short-duration) ease-in-out;
		z-index: -1;
	}
	.panel:nth-of-type(1) span {
		-webkit-animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}
	.panel:nth-of-type(2) span {
		-webkit-animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}
	.panel:nth-of-type(3) span {
		-webkit-animation: slide-in-left var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		animation: slide-in-left var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}
	.panel:nth-of-type(4) span {
		-webkit-animation: slide-in-right var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		animation: slide-in-right var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}
	.panel:hover {
		box-shadow: rgba(255, 209, 98, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	}
	.panel:hover span {
		color: var(--yellow);
	}
	.panel:hover span::before {
		transform: scaleX(1);
		transform-origin: bottom center;
	}

	.panel:nth-of-type(1) {
		-webkit-animation-delay: 6.35s;
		animation-delay: 6.35s;
	}
	.panel:nth-of-type(1) span {
		-webkit-animation-delay: 6.85s;
		animation-delay: 6.85s;
	}

	.panel:nth-of-type(2) {
		-webkit-animation-delay: 6.7s;
		animation-delay: 6.7s;
	}
	.panel:nth-of-type(2) span {
		-webkit-animation-delay: 7.2s;
		animation-delay: 7.2s;
	}

	.panel:nth-of-type(3) {
		-webkit-animation-delay: 7.05s;
		animation-delay: 7.05s;
	}
	.panel:nth-of-type(3) span {
		-webkit-animation-delay: 7.55s;
		animation-delay: 7.55s;
	}

	.panel:nth-of-type(4) {
		-webkit-animation-delay: 7.4s;
		animation-delay: 7.4s;
	}
	.panel:nth-of-type(4) span {
		-webkit-animation-delay: 7.9s;
		animation-delay: 7.9s;
	}

	.letter {
		-webkit-animation: bounce-in-fwd var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		animation: bounce-in-fwd var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		color: var(--yellow);
		display: inline;
		opacity: 0;
	}

	.letter:nth-child(1) {
		/* 2.6s */
		-webkit-animation-delay: 4.95s;
		animation-delay: 4.95s;
	}

	.letter:nth-child(2) {
		/* 2.95s */
		-webkit-animation-delay: 5.3s;
		animation-delay: 5.3s;
	}

	.letter:nth-child(3) {
		/* 3.3s */
		-webkit-animation-delay: 5.65s;
		animation-delay: 5.65s;
	}

	.letter:nth-child(4) {
		/* 3.65s */
		-webkit-animation-delay: 6s;
		animation-delay: 6s;
	}

	.letter:nth-child(5) {
		/* 4s */
		-webkit-animation-delay: 6.35s;
		animation-delay: 6.35s;
	}

	.letter:nth-child(6) {
		/* 4.35s */
		-webkit-animation-delay: 6.7s;
		animation-delay: 6.7s;
	}

	.letter:nth-child(7) {
		/* 4.7s */
		-webkit-animation-delay: 7.05s;
		animation-delay: 7.05s;
	}

	@media (min-width: 560px) {
		.geo-square {
			align-self: center;
			-webkit-animation: scale-in-hor-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94)
					forwards,
				scale-out-hor-left var(--duration) cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
			animation: scale-in-hor-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
				scale-out-hor-left var(--duration) cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
			-webkit-animation-delay: 1.5s, 5.5s;
			animation-delay: 1.5s, 5.5s;
			box-shadow: 0 0 0 var(--default-padding) var(--yellow);
			display: grid;
			height: calc(var(--default-padding) * 16);
			margin: 0 auto calc(var(--default-padding) * 4);
			opacity: 0;
			position: relative;
			transition: color var(--duration);
			width: calc(var(--default-padding) * 30);
			z-index: var(--z-30);
		}

		.geo-square img {
			-webkit-animation: scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94)
					forwards,
				slit-out-vertical 1s ease-in forwards;
			animation: scale-in-ver-center var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
				slit-out-vertical 1s ease-in forwards;
			-webkit-animation-delay: 2s, 4.5s;
			animation-delay: 2s, 4.5s;
			opacity: 0;
			height: var(--full-h);
			transform: scale(1.75);
		}
	}

	@media only screen and (min-width: 760px) {
		/* body {
			grid-template-rows: 8rem calc(100vh - 8rem);
		} */

		nav ul:nth-of-type(2) li:nth-child(-n + 3) {
			display: flex;
		}
		nav img {
			width: var(--logo-dimensions);
		}

		article {
			flex: 1;
		}

		h2 {
			margin: 0 auto;
		}

		.panel:nth-of-type(1) span {
			-webkit-animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
			animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		}
		.panel:nth-of-type(2) span {
			-webkit-animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
			animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		}
		.panel:nth-of-type(3) span {
			-webkit-animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
			animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		}
		.panel:nth-of-type(4) span {
			-webkit-animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
			animation: slide-in-top var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
		}

		.panel:nth-of-type(1) {
			-webkit-animation-delay: 6.35s;
			animation-delay: 6.35s;
		}
		.panel:nth-of-type(1) span {
			-webkit-animation-delay: 6.7s;
			animation-delay: 6.7s;
		}

		.panel:nth-of-type(2) {
			-webkit-animation-delay: 6.7s;
			animation-delay: 6.7s;
		}
		.panel:nth-of-type(2) span {
			-webkit-animation-delay: 7.05s;
			animation-delay: 7.05s;
		}

		.panel:nth-of-type(3) {
			-webkit-animation-delay: 7.05s;
			animation-delay: 7.05s;
		}
		.panel:nth-of-type(3) span {
			-webkit-animation-delay: 7.4s;
			animation-delay: 7.4s;
		}

		.panel:nth-of-type(4) {
			-webkit-animation-delay: 7.4s;
			animation-delay: 7.4s;
		}
		.panel:nth-of-type(4) span {
			-webkit-animation-delay: 7.75s;
			animation-delay: 7.75s;
		}
	}
	/* ----------------------------------------------
  Animation start
* ---------------------------------------------- */
	/* ----------------------------------------------
 * Generated by Animista on 2021-9-13 17:41:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
	@-webkit-keyframes scale-in-ver-center {
		0% {
			transform: scaleY(0);
			opacity: 1;
		}
		100% {
			transform: scaleY(1);
			opacity: 1;
		}
	}
	@keyframes scale-in-ver-center {
		0% {
			transform: scaleY(0);
			opacity: 1;
		}
		100% {
			transform: scaleY(1);
			opacity: 1;
		}
	}
	@-webkit-keyframes scale-in-hor-center {
		0% {
			transform: scaleX(0);
			opacity: 1;
		}
		100% {
			transform: scaleX(1);
			opacity: 1;
		}
	}
	@keyframes scale-in-hor-center {
		0% {
			transform: scaleX(0);
			opacity: 1;
		}
		100% {
			transform: scaleX(1);
			opacity: 1;
		}
	}
	@-webkit-keyframes slit-out-vertical {
		0% {
			transform: translateZ(0) rotateY(0);
			opacity: 1;
		}
		54% {
			transform: translateZ(-160px) rotateY(87deg);
			opacity: 1;
		}
		100% {
			transform: translateZ(-800px) rotateY(90deg);
			opacity: 0;
		}
	}
	@keyframes slit-out-vertical {
		0% {
			transform: translateZ(0) rotateY(0);
			opacity: 1;
		}
		54% {
			transform: translateZ(-160px) rotateY(87deg);
			opacity: 1;
		}
		100% {
			transform: translateZ(-800px) rotateY(90deg);
			opacity: 0;
		}
	}
	@-webkit-keyframes bounce-in-fwd {
		0% {
			transform: scale(0);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 0;
		}
		38% {
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
			opacity: 1;
		}
		55% {
			transform: scale(0.7);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		72% {
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		81% {
			transform: scale(0.84);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		89% {
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		95% {
			transform: scale(0.95);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		100% {
			opacity: 1;
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
	}
	@keyframes bounce-in-fwd {
		0% {
			transform: scale(0);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 0;
		}
		38% {
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
			opacity: 1;
		}
		55% {
			transform: scale(0.7);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		72% {
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		81% {
			transform: scale(0.84);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		89% {
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		95% {
			transform: scale(0.95);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		100% {
			opacity: 1;
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
	}
	@-webkit-keyframes slide-in-top {
		0% {
			transform: translateY(-100rem);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-in-top {
		0% {
			transform: translateY(-100rem);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@-webkit-keyframes scale-out-hor-left {
		0% {
			transform: scaleX(1);
			transform-origin: 0 0;
			opacity: 1;
		}
		100% {
			transform: scaleX(0);
			transform-origin: 0 0;
			opacity: 1;
		}
	}
	@keyframes scale-out-hor-left {
		0% {
			transform: scaleX(1);
			transform-origin: 0 0;
			opacity: 1;
		}
		100% {
			transform: scaleX(0);
			transform-origin: 0 0;
			opacity: 1;
		}
	}
	@-webkit-keyframes slide-in-left {
		0% {
			transform: translateX(-1000px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes slide-in-left {
		0% {
			transform: translateX(-1000px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@-webkit-keyframes slide-in-right {
		0% {
			transform: translateX(1000px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes slide-in-right {
		0% {
			transform: translateX(1000px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	/* ----------------------------------------------
  Disable Animation if that is user settings
* ---------------------------------------------- */
	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none;
			-webkit-animation: none;
			animation: none;
		}
	}
</style>
