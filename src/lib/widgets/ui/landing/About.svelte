<script>
	import { ProfileCard, ReliseCard } from '$lib/entities';

	const socialLinks = [
		{
			title: 'Instagram',
			link: '',
			img: 'instagram.png'
		},
		{
			title: 'Facebook',
			link: '',
			img: 'facebook.png'
		},

		{
			title: 'Youtube',
			link: '',
			img: 'youtube.png'
		}
	];
</script>

<div class=" mx-auto w-full px-5 lg:pb-24 xl:pb-24 lg:px-32">
	<div class="mx-auto flex max-w-5xl flex-col-reverse lg:flex-row">
		<div class=" m-auto mt-12 w-full max-w-sm ">
			<div class="flex w-full flex-col">
				<ReliseCard />

				<ProfileCard />
			</div>
		</div>

		<!-- 	class="   py-4 px-8   "
 -->
		<div
			class="hover:delay-550 prose-md group prose  mt-12 w-full w-full border-2  border-neutral-900 p-4  hover:-translate-y-1 hover:scale-105 hover:border-yellow-400 hover:bg-black hover:transition hover:duration-1000 hover:ease-in-out"
		>
			<div class="mb-5 border-b border-gray-200">
				<div class="-mt-2 flex flex-wrap items-baseline">
					<!-- <h5>12-03-2021</h5> -->
					<p class="mt-1 ml-2">About the boardgame: <span class='text-yellow-600 font-bold'>Graffity chronicles</span></p>
				</div>
			</div>
			<a name="#about" />
			<h1>Lorem ipsum is placeholder text.</h1>
			<p>Through the lens of a set of certitudes based on deductions founded on false premise.</p>
			<p>
				Turd polishing put a record on and see who dances, dog and pony show, nor one-sheet. Ensure
				to follow requirements when developing solutions three-martini lunch, that jerk from finance
				really threw me under the bus. Bob called an all-hands this afternoon.
			</p>
			<p>
				We've got kpis for that this is a no-brainer viral engagement pixel pushing. Run it up the
				flagpole please use "solutionise" instead of solution ideas! :) dunder mifflin form without
				content style without meaning target rich environment. Three-martini lunch. Get buy-in
				prioritize these line items, or deliverables yet back to the drawing-board let's put a pin
				in that, close the loop. Manage expectations product market fit win-win-win. The horse is
				out of the barn poop, but can you put it on my calendar? but drink from the firehose, but
				quick-win.
			</p>
			<h1>"Focus on the customer journey"</h1>
			<p>
				If you could do that, that would be great this is a no-brainer, or Q1 regroup. Groom the
				backlog what do you feel you would bring to the table if you were hired for this position.
				Back of the net. Scope creep can you slack it to me? shotgun approach build on a culture of
				contribution and inclusion please advise soonest.
			</p>
			<h3>Is a no-brainer, or Q1 regroup.</h3>
			<p>
				Gain traction make it more corporate please we need to harvest synergy effects not enough
				bandwidth, and we want to empower the team with the right tools and guidance to uplevel our
				craft and build better nor low-hanging fruit the right info at the right time to the right
				people.
			</p>


			<div class="mt-4 mb-8">
				<span class="">More content on our social media:</span>

				<div class="-mt-8  flex flex-row flex-wrap">
					{#each socialLinks as social}
						<a
							class="h-32 w-32 hover:-translate-y-1 hover:scale-110  hover:transition hover:duration-1000 hover:ease-in-out"
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
</style>
