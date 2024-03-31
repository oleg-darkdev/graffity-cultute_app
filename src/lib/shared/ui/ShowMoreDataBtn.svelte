<script>
	export let showFull, link, title;
</script>

<!-- <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button> -->

<a href={link} on:click={() => (showFull = !showFull)} role="button" class="w-[300px] text-center mb-10 mt-4 font-graffity text-2xl transition duration-500 ease-in-out transform focus:outline-none hover:bg-yellow-400 px-4 py-6 text-2xl uppercase border-2 border-yellow-400 text-yellow-400 hover:text-black">{showFull ? 'Hide' : 'SHOW'} {title}</a>

<style>
</style>
