<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		const items = document.querySelectorAll('.graffity-list li');

		items.forEach((el) => {
			gsap.set(el.querySelector('.hover-img'), { xPercent: -50, yPercent: -50 });
			const image = el.querySelector('.hover-img');
			const innerImage = el.querySelector('.hover-img img');
			const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
			const mouse = { x: pos.x };
			const speed = 0.1;
			const xSet = gsap.quickSetter(image, 'x', 'px');
			window.addEventListener('mousemove', (e) => {
				mouse.x = e.x;
			});

			gsap.ticker.add(() => {
				const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
				pos.x += (mouse.x - pos.x) * dt;
				xSet(pos.x);
			});

			let direction = '',
				oldx = 0,
				lastCursorX = null,
				cursorThreshold = 150;

			function mousemoveHandler(e) {
				if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
					direction = 'left';
					lastCursorX = e.clientX;
					innerImage.style.transform = 'rotate(-5deg)';
				} else if (e.pageX > oldx && e.clientX >= lastCursorX + cursorThreshold) {
					direction = 'right';
					lastCursorX = e.clientX;
					innerImage.style.transform = 'rotate(15deg)';
				}
				oldx = e.pageX;
			}

			function mousemoveendHandler() {
				innerImage.style.transform = 'translateX(0%) rotate(0deg)';
			}

			document.addEventListener('mousemove', mousemoveHandler);
			document.addEventListener('mousemoveend', mousemoveendHandler);
		});

		// Mouse Cursor Animation
		gsap.set('.spray', { xPercent: -50, yPercent: -50 });
		const spray = document.querySelector('.spray');
		const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
		const mouse = { x: pos.x, y: pos.y };
		const speed = 0.08;

		const xSet = gsap.quickSetter(spray, 'x', 'px');
		const ySet = gsap.quickSetter(spray, 'y', 'px');

		window.addEventListener('mousemove', (e) => {
			mouse.x = e.x;
			mouse.y = e.y;
		});

		gsap.ticker.add(() => {
			const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
			pos.x += (mouse.x - pos.x) * dt;
			pos.y += (mouse.y - pos.y) * dt;
			xSet(pos.x);
			ySet(pos.y);
		});

		// Hacky Code
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let interval = null;
		const list = document.querySelectorAll('.graffity-list li');

		list.forEach((el) => {
			el.addEventListener('mouseenter', function (event) {
				const target_element = event.target.querySelector('h2');
				let iteration = 0;
				const interval = setInterval(() => {
					target_element.innerText = target_element.dataset.value
						.split('')
						.map((letter, index) => {
							if (index < iteration) {
								return target_element.dataset.value[index];
							}

							return letters[Math.floor(Math.random() * 26)];
						})
						.join('');

					if (iteration >= target_element.dataset.value.length) {
						clearInterval(interval);
					}
					iteration += 1 / 3;
				}, 20);
			});
		});
		// });
	});
</script>

<div class="spray" />

<style lang="postcss">
	.spray {
		width: 85px;
		height: 85px;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 99999;
		background-image: url(/images/spray.svg);
	}
</style>
