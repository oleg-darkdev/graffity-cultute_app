<script>
	import { faqData } from '$lib/shared';
</script>

<div class="p-8">
	<div class="mt-12 rounded-lg bg-white p-4 py-8 shadow-xl">

		<h4 class="text-center lg:text-6xl font-bold uppercase tracking-widest text-black">FAQ</h4>
		<p class="mt-2 text-center text-sm text-gray-600">
			Here are some of the frequently asked questions
		</p>
		<div class="mt-12 space-y-12 px-2 xl:px-16">
      <a name="#faq"></a>
			{#each faqData as faq}
				<div class="mt-4 flex">
					<div>
						<div class="flex h-16 items-center border-l-4 border-black">
							<span class="px-4 text-4xl text-black font-graffity">Q.</span>
						</div>
						<div class="flex h-16 items-center border-l-4 border-gray-400">
							<span class="px-4 text-4xl text-gray-400 font-graffity">A.</span>
						</div>
					</div>
					<div>
						<div class="flex h-16 items-center">
							<span class="text-lg font-bold text-black ">{faq.question}?</span>
						</div>
						<div class="flex items-center py-2">
							{#each faq.answer as answer}
								<p class="mb-1 text-gray-500">
									{answer}
								</p>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
