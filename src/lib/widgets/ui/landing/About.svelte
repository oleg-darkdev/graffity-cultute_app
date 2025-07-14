<script>
	import { ProfileCard, ReliseCard } from '$lib/entities';

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

		{
			title: 'Youtube',
			link: 'https://www.youtube.com/',
			img: 'youtube.png'
		}
	];
</script>

<section class=" mx-auto w-full px-5 lg:px-32 lg:py-12 xl:py-12">
	<div class="mx-auto flex max-w-5xl flex-col-reverse lg:flex-row">
		<div class=" m-auto mt-12 w-full max-w-sm">
			<div class="flex w-full flex-col">
				<ReliseCard />

				<ProfileCard />
			</div>
		</div>

		<!-- 	class="   py-4 px-8   "
 -->
		<div
			class="hover:delay-550 prose-md group prose mt-12 w-full w-full border-2 border-neutral-900 p-4 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:bg-black hover:transition hover:duration-1000 hover:ease-in-out"
		>
			<div class="mb-5 border-b border-gray-200">
				<div class="-mt-2 flex flex-wrap items-baseline">
					<!-- <h5>12-03-2021</h5> -->
					<p class="ml-2 mt-1">
						About the co-op boardgame <span class="font-bold text-yellow-600"
							>Graffity chronicles</span
						>
					</p>
				</div>
			</div>
			<a name="#about" />
			<h1>Discover the world of street-art through a boardgame! </h1>
			<p>
				Graffiti Chronicles is a cooperative board game enhanced by an interactive <a
					class="font-bold text-yellow-600 underline "
					target="_blank"
					href="/app"
				>
					web app
				</a> that immerses you in the rich and diverse culture of graffiti from around the globe.
			</p>
			<p>
				The core box serves as a universal foundation for the game — but there's more: Each
				expansion focuses on a specific country or region, introducing you to the unique
				characteristics of local graffiti scenes.
			</p>

			<p>
				Among the available <a
					class="font-bold text-yellow-600 underline "
					href="#extensions"
				>
					extensions
				</a>are countries like the USA, Russia, various European nations, Ukraine, and Albania.
			</p>
			<h3>You’ll experience:</h3>
			<ul class="list-disc pl-5">
				<li class="font-bold marker:text-yellow-600 text-yellow-600">Learning various graffiti styles</li>
				<li class="font-bold marker:text-yellow-600 text-yellow-600">Discovering the tools used by graffiti artists</li>
				<li class="font-bold marker:text-yellow-600 text-yellow-600">Immersing yourself in street slang</li>
				<li class="font-bold marker:text-yellow-600 text-yellow-600">Exploring artworks by street artists from around the world</li>
				<li class="font-bold marker:text-yellow-600 text-yellow-600">Using a web app that expands and enhances the board game experience</li>
			</ul>

			<h2 class="text-cyan-600">it's an interactive educational experience that enhances visual thinking and fosters creativity.</h2>
			<div class="mb-8 mt-4">
				<span class="">More content on our social media:</span>

				<div class="-mt-8 flex flex-row flex-wrap">
					{#each socialLinks as social}
						<a
							class="h-32 w-32 hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-1000 hover:ease-in-out"
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
</section>

<style>
</style>
