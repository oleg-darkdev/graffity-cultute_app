<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<div class="video-container">
	<video playsinline autoplay muted loop>
		<source src="/videos/big.mp4" type="video/mp4" />
	</video>
</div>

<style lang="postcss">
	.video-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -2;
	}
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.video-container::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.9);
	}
</style>
