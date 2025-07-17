<script>
	import { ShowMoreDataBtn } from '$sharedUi';

	import { graffityStyles } from '$sharedData';


	let showFull = false;
</script>





<!-- https://graffstorm.com/graffiti-styles -->
<section class="mb-20 md:py-20 lg:py-20 xl:py-20">
	<div class="graffity-list">
		<h2 class="title max-w-xl text-3xl lg:text-6xl">Types of Graffiti That Define the Art</h2>
		<ul>
			<li>
				<div class="index">
					<span />
				</div>
				<div class="graffity-style max-w-sm">
					<span class=" text-2xl">Title</span>
				</div>
				<div class="short-desc">
					<span class=" text-2xl">Short description</span>
				</div>

				<div class="description max-w-md">
					<span class=" text-2xl">Description</span>
				</div>
				<div class="redirect-link" />
				<div class="hover-img" />
			</li>

			<a name="styles" />
			{#each showFull ? graffityStyles : graffityStyles.slice(0, 3) as style, i}
				<li
					class="hover:delay-550 group transform border-b-2 border-neutral-700 hover:-translate-y-4 hover:border-yellow-400 hover:transition hover:duration-1000 hover:ease-in-out hover:ease-in-out"
				>
					<div class="index group-hover:text-yellow-400">
						<span class="font-dollar text-6xl">{i + 1}</span>
					</div>
					<div class="graffity-style group-hover:text-yellow-400">
						<h2 class="text-xl md:text-4xl lg:text-4xl xl:text-4xl" data-value={style.title}>
							{style.title}
						</h2>
					</div>
					<div class="short-desc">
						{#each style.shortDesc as desc}
							<p>
								{desc}
							</p>
						{/each}
					</div>

					<div class="description lg:max-w-3xl">
						{#each style.desc as desc}
							<p class="mb-1.5">
								{desc}
							</p>
						{/each}
					</div>
					<div class="redirect-link">
						<a href={style.articleLink} target="_blank">
							<svg
								width="1.25rem"
								height="1.25rem"
								viewBox="0 0 16 16"
								fill="none"
								name="iconArrow"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
									fill="currentColor"
								/>
								<path
									d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
									fill="currentColor"
								/>
								<path
									d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
									fill="currentColor"
								/>
							</svg>
						</a>
					</div>
					<div class="hover-img">
						<img
							src="/images/styles/{style.example}"
							alt="Example of a {style.title} style graffiti"
							class="img-fluid"
						/>
					</div>
				</li>
			{/each}
		</ul>
	</div>

	<div class="flex items-center justify-center">
		<ShowMoreDataBtn bind:showFull link={'#styles'} title={'Styles'} />
	</div>
</section>

<style>
	.img-fluid {
		max-width: 100%;
		height: auto;
	}

	.graffity-list a {
		transition: all 0.5s;
		text-decoration: none;
	}
	/*
	h2 {
		font-size: 22px;
		line-height: 30px;
		text-transform: capitalize;
		font-family: 'Roboto', sans-serif;
	} */
	

	.graffity-list {
		margin: 60px 0px 0px;
		padding: 0px 30px;
	}
	.graffity-list .title {
		text-transform: uppercase;
		margin: 0px auto 20px;
		/* width: fit-content; */
		/* max-width: 1170px; */
		text-align: center;
	}
	.graffity-list ul li {
		cursor: pointer;
		position: relative;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		padding: 26px 0px;
		margin: 0px -12px;
		opacity: 0.4;
	}
	/* .graffity-list ul li::before,
	.graffity-list ul li::after {
		content: '';
		transition: all 1s;
		-webkit-transition: all 1s;
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 1px;
		background: rgba(255, 255, 255, 0.5);
		opacity: 0.5;
	} */
	.graffity-list ul li::after {
		opacity: 1;
		width: 0%;
	}
	.graffity-list ul li:hover {
		opacity: 1;
	}
	.graffity-list ul li:hover::after {
		width: 100%;
	}
	.graffity-list ul li > div:not(.hover-img) {
		padding: 0px 12px;
	}
	.graffity-list .index {
		width: calc((100% / 12) / 1.2);
	}
	.graffity-list .short-desc {
		width: calc((100% / 12) * 2.7);
	}
	.graffity-list .graffity-style {
		width: calc((100% / 12) * 1.8);
	}
	.graffity-list .description {
		/* width: calc((100% / 12) *10); */
		/* width: 100%; */
		width: 100%;
	}
	.graffity-list .redirect-link {
		/* width: auto; */
	}
	.graffity-list .redirect-link a {
		width: 30px;
		height: 30px;
		margin: 0px auto;
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		-webkit-justify-content: center;
		align-items: center;
		-webkit-align-items: center;
		border-radius: 50%;
		background: #fff;
	}
	.graffity-list .redirect-link svg {
		color: #000;
	}
	.graffity-list .hover-img {
		pointer-events: none;
		position: absolute;
		z-index: -1;
		/* top: 50%; */
		top: 50%;
		left: 0%;
		width: 50vw;
		/** 34vw; */
		height: 20vw;
	}
	.graffity-list .hover-img img {
		transition: all 0.7s;
		-webkit-transition: all 0.7s;
		opacity: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 16px;
	}
	.graffity-list li:hover .hover-img img {
		opacity: 0.4;
	}



	@media (min-width: 1200px) and (max-width: 1499px) {
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		h2 {
			font-size: 70px;
			line-height: 90px;
		}
		.graffity-list .hover-img {
			width: 38vw;
			height: 38vw;
		}
		.graffity-list .hover-img img {
			border-radius: 12px;
		}
	}
	@media (min-width: 768px) and (max-width: 991px) {
		h2 {
			font-size: 18px;
			line-height: 26px;
		}

		.graffity-list .title {
			margin: 0px auto 40px;
		}
		.graffity-list .hover-img {
			width: 38vw;
			height: 38vw;
		}
		.graffity-list .hover-img img {
			border-radius: 12px;
		}
	}

	@media (max-width: 767px) {
		.graffity-list {
			padding: 0px 15px;
		}
		.graffity-list .title {
			margin: 0px auto 40px;
		}
		.graffity-list ul li > div:not(.hover-img) {
			padding: 0px 8px;
		}
		.graffity-list .index,
		.graffity-list .description {
			display: none;
		}
		@media (max-width: 560px) {
			.graffity-list .graffity-style {
				width: calc((100% / 12) * 4);
			}
			.graffity-list .redirect-link {
				width: calc((100% / 12) * 2);
			}
		}

		.graffity-list .graffity-style {
			width: calc((100% / 12) * 8);
		}
		.graffity-list .redirect-link {
			width: calc((100% / 12) * 2);
		}
		.graffity-list .hover-img {
			width: 40vw;
			height: 40vw;
		}
		.graffity-list .hover-img img {
			border-radius: 8px;
		}
	}
</style>
