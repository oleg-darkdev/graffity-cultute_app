<script>
	let { showFull = $bindable(), link, title } = $props();
</script>

<!-- <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button> -->

<a
	href={link}
	on:click={() => (showFull = !showFull)}
	role="button"
	class="font-graffity mb-10 mt-4 w-[300px] transform border-2 border-yellow-400 px-4 py-6 text-center text-2xl text-2xl uppercase text-yellow-400 transition duration-500 ease-in-out hover:bg-yellow-400 hover:text-black focus:outline-none"
	>{showFull ? 'Hide' : 'SHOW'} {title}</a
>

<style>
</style>
