<script>
	import { CartCard } from '$entities';
</script>

<nav class="bg-black nav-menu z-[100]">
	<!-- <img src="images/ws_agegate.svg" loading="lazy" alt="" class="nav-menu-graffiti" /> -->

	<a href="/" aria-current="page" class="navbar__brand-link w-nav-brand w--current z-[100]">
		
			<img src="images/logo.png" loading="lazy" alt="" class="scale-150 z-[52] relative pt-2" />
			<!-- <div
			class="navbar__brand-graffiti--animation avoid-clicks"
		/> -->
			<img
				src="images/navbar_spray_mini.png"
				loading="eager"
				alt=""
				class="navbar__brand-graffiti--static"
			/>
	</a>
	<!-- <CartCard /> -->
	<div class="navbar-spray-border z-[100]" />
</nav>

<!-- <div id="w-node-_786464bb-95e7-6205-e852-053b9fa039e0-41eeda21">
		<div
			data-hover="false"
			data-delay="0"
			id="w-node-_6139c84d-9e12-751d-3df8-1c0281042fde-41eeda21"
			class="w-dropdown"
		>
			<div class="round-dropdown desktop-only w-dropdown-toggle">
				<div class="w-icon-dropdown-toggle" />
				<div>Order now</div>
			</div>
			<nav class="w-dropdown-list dropdown">
				<a href="/products/wee-smoky-batch-2" class="dropdown-link w-dropdown-link"
					>United Kingdom</a
				>
				<a
					href="https://shop.weesmoky.com/at/products/wee-smoky"
					target="_blank"
					class="dropdown-link w-dropdown-link">Austria</a
				>
				<a
					href="https://shop.weesmoky.com/nl/products/wee-smoky"
					target="_blank"
					class="dropdown-link w-dropdown-link">Netherlands</a
				>
				<a
					href="https://shop.weesmoky.com/fr/products/wee-smoky"
					target="_blank"
					class="dropdown-link w-dropdown-link">France</a
				>
				<a
					href="https://shop.weesmoky.com/dk/products/wee-smoky"
					target="_blank"
					class="dropdown-link w-dropdown-link">Denmark</a
				>
				<a
					href="https://shop.weesmoky.com/de/products/wee-smoky"
					target="_blank"
					class="dropdown-link w-dropdown-link">Germany</a
				>
				<a
					href="https://shop.weesmoky.com/se/products/wee-smoky"
					target="_blank"
					class="dropdown-link w-dropdown-link">Sweden</a
				>
			</nav>
		</div>
	</div> -->

<style>
	@media screen and (min-width: 1920px) {
		.nav-side-image {
			height: 700px;
			max-height: 100%;
		}
	}
	.navbar__brand-graffiti--static {
		z-index: 50;
		display: block;
		position: absolute;
		top: -5px;
		right: 0;
		transform: scale(3);
	}

	.navbar-spray-border {
		z-index: 50;
		width: 100%;
		height: 800px;
		/* height: 100px; */
		background-image: url(images/navbar_spray_2.png);
		/* background-image: url(/images/ws_navbar_spray.png); */
		background-position: 0 0;
		background-repeat: repeat-x;
		background-size: auto;
		position: absolute;
		top: -50px;
	}
	.div-block-3 {
		grid-column-gap: 16px;
		grid-row-gap: 0px;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		grid-auto-columns: 1fr;
		display: grid;
	}

	.nav-side-image-container {
		width: 100%;
		height: 100%;
		padding: 50px 130px 100px;
		display: block;
	}
	.nav-side-image {
		width: 100%;
		height: 80%;
		max-height: 80%;
		object-fit: cover;
	}

	.navbar {
		/*  */
		position: fixed;
		top: 0%;
		bottom: auto;
		left: 0%;
		right: 0%;
	}

	.nav-menu__nav-link {
		color: var(--deep-pink);
		padding-left: 10px;
		padding-right: 10px;
		font-size: 30px;
		font-weight: 700;
	}
	.nav-menu__nav-link.w--current {
		color: #fff;
		text-decoration: underline;
	}
	.nav-menu__nav-link.current {
		color: var(--deep-pink);
		padding-top: 15px;
		padding-bottom: 15px;
	}
	.nav-menu__nav-link.current:hover {
		color: var(--midnight-blue);
		text-decoration: underline;
	}
	.nav-menu__nav-link.current.hidden {
		display: none;
	}
	.nav-menu {
		z-index: 50;
		width: 100%;
		/*  */
		padding-top: 10px;
		padding-bottom: 0;
		top: 0%;
		bottom: 0%;
		left: 0%;
		right: 0%;
	}
	.nav-menu__grid {
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		grid-auto-columns: 1fr;
		grid-auto-flow: column;
		align-content: start;
		justify-content: space-between;
		align-items: start;
		justify-items: stretch;
	}

	.navbar__brand-link {
		z-index: 51;
		width: 180px;
		height: 500px;
		margin-left: auto;
		margin-right: auto;
		position: absolute;
		left: 0;
		right: 0;
	}
	.nav-menu__text-links {
		height: 100%;
		grid-column-gap: 0px;
		grid-row-gap: 25px;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		grid-auto-flow: row;
		align-content: stretch;
		align-items: center;
		/* padding-top: 50px; */
		padding-bottom: 230px;
	}
	.navbar__brand-logo {
		/* width: 400px; */
		z-index: 52;
		/* padding-top: 13px; */
		/* position: relative; */
	}
	.navbar__brand-graffiti--animation {
		width: 100%;
		height: 180px;
		max-width: none;
		display: block;
		position: absolute;
		top: 109%;
		bottom: 0%;
		left: 4px;
		right: 0;
		transform: scale(2.2);
	}
	.navbar__brand-graffiti--animation.avoid-clicks {
		z-index: 51;
	}
	/* .nav-menu-graffiti {
		display: none;
	} */

	@media screen and (max-width: 991px) {
		.navbar-spray-border {
			z-index: 55;
			top: 52px;
		}

		.nav-menu {
			z-index: 100;
			background-color: #fff;
			top: 0;
			bottom: auto;
		}
		.nav-menu.w--open {
			background-color: #0000;
		}
		.nav-side-image-container {
			display: none;
		}
		.nav-menu__grid {
			z-index: 52;
			grid-auto-flow: row;
			justify-content: center;
			justify-items: center;
			padding-top: 100px;
			position: relative;
		}
		.nav-menu__text-links {
			z-index: 52;
			grid-auto-flow: row;
			position: relative;
		}
		.nav-menu-graffiti {
			z-index: 51;
			width: 1170px;
			max-width: none;
			display: block;
			position: absolute;
			top: -250px;
			left: -206px;
			right: 0;
		}
	}
	@media screen and (max-width: 767px) {
		.navbar-spray-border {
			top: 49px;
		}
	}
	@media screen and (max-width: 479px) {
		.nav-menu-graffiti {
			top: -280px;
		}
		.nav-menu__nav-link.current {
			padding-top: 10px;
			padding-bottom: 10px;
			font-size: 20px;
		}
		.navbar-spray-border {
			top: 36px;
		}
		.nav-menu__grid {
			padding-top: 75px;
		}
	}
</style>
