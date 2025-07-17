<script>
	const socialLinks = [
		{
			title: 'Instagram',
			link: 'https://www.instagram.com/',
			img: 'instagram.png'
		},
		{
			title: 'Facebook',
			link: 'https://www.facebook.com/l.pl/',
			img: 'facebook.png'
		},

	];
</script>

<!-- border-b border-gray-200 -->
<div
	class="wrap hover:delay-550 group  border-2 border-neutral-900 py-4 px-8 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400  hover:transition hover:duration-1000  hover:ease-in-out"
>
	<div class="mb-2 ">
		<span class=" text-xs font-bold uppercase tracking-widest text-yellow-600">Author</span>
		<a name="creator" />
		<h2 class="mb-0 mt-2 text-4xl text-yellow-400">Oleg <br />Medvedev</h2>
		<a href="https://www.linkedin.com/in/oleg-darkdev" class="underline" target="_blank"
			>@oleg_darkdev</a
		>
	</div>

	<a name="contact"></a>
	<div class="mb-1">
		<div class="card0 card">
			<div class="inside ">
				<div class="icons">
					{#each socialLinks as social}
						<a
							class="fa h-24 w-24 hover:-translate-y-1 hover:scale-110  hover:transition hover:duration-1000 hover:ease-in-out"
							href={social.link}
							target="_blank"
						>
							<img
								src="/images/social/{social.img}"
								class="h-full w-full"
								alt="Llogotype of {social.title}"
							/>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.inside {
		height: 440px;
		width: 310px;
		background: transparent;
		transition: border 1s;
		position: relative;
	}

	.card {
		height: 450px;
		width: 320px;
		background: #808080;
		transition: background 0.8s;
		overflow: hidden;
		background: #000;
		box-shadow: 0 70px 63px -60px #000;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.card0 {
		background: url('/images/social/oleg_medvedev.png') center center no-repeat;
		background-size: 350px;
	}
	.wrap:hover .card0 {
		background: url('/images/social/oleg_medvedev.png') left center no-repeat;
		background-size: 600px;
	}

	.wrap:hover .fa {
		opacity: 1;
	}

	.fa {
		opacity: 0;
		transition: opacity 1s;
	}
	.icons {
		position: absolute;
		/* fill: #fff;
		color: #fff; */
		left: 7%;
		height: 130px;
		top: 226px;
		width: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
</style>
