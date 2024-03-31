<section class="wrap-text my-40">
	<!-- text-yellow-400 -->
	<div
		class="relative  my-20 hover:border-yellow-400  hover:transition hover:duration-1000  hover:ease-in-out"
	>
		<h2 class="absolute -inset-y-60 z-0 text-center ">Antisystem boardgames</h2>

		<div class="border-1 nft relative z-10  max-w-2xl border-neutral-900 hover:border-yellow-400 ">
			<div class="main">
				<!-- <img
                class="tokenImage"
                src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="NFT"
            /> -->
				<h3 class="text-4xl mb-2">It's more than just a boardgame</h3>
				<p class="description mb-1">
					This educational board game is part of a series of board games dedicated to the various
					anti-systemic movements and cultures that have resulted from state systems.
				</p>
				<span class='mb-6'>
					<ins>Creation of</ins> <a class="text-yellow-400 underline" href="">44Games</a>, by
					<a class="text-yellow-400 underline" href="#creator">Oleg Medvedev</a>
				</span>
				<a
					href="#"
					class="text-tellow-500  inline-flex items-center font-semibold hover:text-yellow-400 md:mb-2 lg:mb-0"
					title="read more"
				>
					Learn More about antisystems boardgames
					<svg
						class="ml-2 h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="20"
						height="20"
						fill="currentColor"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
						/>
					</svg>
				</a>


			</div>
		</div>
	</div>
</section>

<style>
	.wrap-text h2 {
		font-size: 16rem;
		filter: opacity(0.5);
		line-height: 1.3;
	}

	.nft {
		user-select: none;
		margin: 5rem auto;
		box-shadow: 0 7px 20px 5px #00000088;
		border-radius: 0.7rem;
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);
		overflow: hidden;
		transition: 0.5s all;
		/* height: 250px; */
	}

	.nft ins {
		text-decoration: none;
	}
	.nft .main {
		display: flex;
		flex-direction: column;
		width: 90%;
		padding: 1rem;
	}
	/* .nft .main .tokenImage {
		border-radius: 0.5rem;
		max-width: 100%;
		height: 250px;
		object-fit: cover;
	} */
	.nft .main .description {
		color: #a89ec9;
	}
	/* .nft .main .tokenInfo {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nft .main .tokenInfo .price {
		display: flex;
		align-items: center;
		color: #ee83e5;
		font-weight: 700;
	} */
	.nft .main .tokenInfo .price ins {
		margin-left: -0.3rem;
		margin-right: 0.5rem;
	}
	/* .nft .main .tokenInfo .duration {
		display: flex;
		align-items: center;
		color: #a89ec9;
		margin-right: 0.2rem;
	} */
	.nft .main .tokenInfo .duration ins {
		margin: 0.5rem;
		margin-bottom: 0.4rem;
	}
	.nft .main .creator {
		display: flex;
		align-items: center;
		margin-top: 0.2rem;
		margin-bottom: -0.3rem;
	}
	.nft .main .creator ins {
		color: #a89ec9;
		text-decoration: none;
	}
	/* .nft .main .creator .wrapper {
		display: flex;
		align-items: center;
		padding: 0.3rem;
		margin: 0;
		margin-right: 0.5rem;
		border-radius: 100%;
		box-shadow: inset 0 0 0 4px #000000aa;
	}
	.nft .main .creator .wrapper img {
		border-radius: 100%;
		object-fit: cover;
		margin: 0;
	} */

	.nft:hover {
		box-shadow: 0 7px 50px 10px #000000aa;
		transform: scale(1.015);
		filter: brightness(1.3);
	}
	.nft:hover ::before {
		filter: brightness(0.5);
		top: -100%;
		left: 200%;
	}
</style>
