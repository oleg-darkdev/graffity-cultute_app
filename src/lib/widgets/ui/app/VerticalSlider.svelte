<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const upBtn = document.querySelector('.up-button');
		const downBtn = document.querySelector('.down-button');
		const sidebar = document.querySelector('.sidebar');
		const container = document.querySelector('.container');
		const mainSlide = document.querySelector('.main-slide');
		const slidesCount = mainSlide.querySelectorAll('div').length;

		let activeSlideIndex = 0;

		sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

		upBtn.addEventListener('click', () => {
			changeSlide('up');
		});

		downBtn.addEventListener('click', () => {
			changeSlide('down');
		});

		function changeSlide(direction) {
			if (direction === 'up') {
				activeSlideIndex++;
				if (activeSlideIndex === slidesCount) {
					activeSlideIndex = 0;
				}
			} else if (direction === 'down') {
				activeSlideIndex--;
				if (activeSlideIndex < 0) {
					activeSlideIndex = slidesCount - 1;
				}
			}

			const height = container.clientHeight;

			mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
			sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
		}
	});

	const slides = [
		{
			title: 'Lorem ',
			subTitle: 'Lorem ipsum is',
			desc: [
				'Lorem ipsum is placeholder text commonly used in the graphic.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				''
			],
			img: 'https://images.unsplash.com/photo-1580052305579-798aba758a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
		},
		{
			title: 'Lorem ',
			subTitle: 'Lorem ipsum is',
			desc: [
				'Lorem ipsum is placeholder text commonly used in the graphic.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				''
			],
			img: 'https://images.unsplash.com/photo-1607165697276-326e7955b6e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
		},
		{
			title: 'Lorem ',
			subTitle: 'Lorem ipsum is',
			desc: [
				'Lorem ipsum is placeholder text commonly used in the graphic.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				''
			],
			img: 'https://images.unsplash.com/photo-1604716053460-3f66248bf8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
		},
		{
			title: 'Lorem ',
			subTitle: 'Lorem ipsum is',
			desc: [
				'Lorem ipsum is placeholder text commonly used in the graphic.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				''
			],
			img: 'https://images.unsplash.com/photo-1536639335969-19c9bfc0a4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
		},

		{
			title: 'Lorem ',
			subTitle: 'Lorem ipsum is',
			desc: [
				'Lorem ipsum is placeholder text commonly used in the graphic.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
				'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
				''
			],
			img: 'https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
		}
	];
</script>


<div class="container mb-20 flex h-full w-full flex-col">
	<a name="#app" />
	<div class="h-screen">
		<div class="sidebar   h-full w-full">
			{#each slides as slide}
				<div class="prose h-full px-6 pt-8 text-left">
					<h3 class="text-left text-4xl">{slide.title}</h3>
					<div class="mb-2 w-full border-b border-gray-200">
						<div class="-mt-2 flex flex-wrap items-baseline">
							<span class="text-left ">{slide.subTitle}</span>
							<p class="mt-0 -mb-2 ml-2">Transitions</p>
						</div>
					</div>
					{#each slide.desc as desc}
						<p class="-mb-4">{desc}</p>
					{/each}
				</div>
			{/each}
		</div>
		<div class="main-slide h-full w-full">
			{#each slides as slide}
				<div
					class="hover:delay-550 w-full hover:-translate-y-1 hover:scale-105  hover:transition hover:duration-1000  hover:ease-in-out "
					style="
            background-image: url({slide.img});
          "
				/>
			{/each}
		</div>
		<div class="controls">
			<button class="down-button bg-white">
				<i class="fas fa-arrow-down" />
			</button>
			<button class="up-button bg-white">
				<i class="fas fa-arrow-up" />
			</button>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		overflow: hidden;
	}

	.sidebar {
		width: 35%;
		position: absolute;
		top: 0;
		left: 0;
		transition: transform 0.5s ease-in-out;
	}

	.sidebar > div {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
	}

	.main-slide {
		position: absolute;
		top: 0;
		left: 35%;
		transition: transform 0.5s ease-in-out;
	}

	.main-slide > div {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		height: 100%;
		width: 100%;
	}

	button {
		border: none;
		color: #aaa;
		cursor: pointer;
		font-size: 16px;
		padding: 15px;
	}

	button:hover {
		color: #222;
	}

	button:focus {
		outline: none;
	}

	.container .controls button {
		position: absolute;
		left: 35%;
		top: 50%;
		z-index: 100;
	}

	.container .controls .down-button {
		transform: translateX(-100%);
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.container .controls .up-button {
		transform: translateY(-100%);
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
</style>
