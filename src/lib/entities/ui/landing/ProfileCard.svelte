<!-- border-b border-gray-200 -->
<div
	class="hover:delay-550 group  border-2 border-neutral-900 py-4 px-8 hover:-translate-y-1 hover:scale-105 hover:border-yellow-400  hover:transition hover:duration-1000  hover:ease-in-out"
>
	<div class="mb-2 ">
		<span class=" text-xs font-bold uppercase tracking-widest text-yellow-600">Author</span>

		<h2 class="mb-0 mt-2 text-4xl text-yellow-400">Oleg <br />Medvedev</h2>
		<span>@oleg_darkdev</span>
	</div>

	<div class="mb-1">
		<div class="card0 card">
			<div class="inside ">
				<div class="icons">
					<i class="fa fa-instagram h-20 w-20" aria-hidden="false" />
					<i class="fa fa-twitter h-20 w-20" aria-hidden="true" />
					<i class="fa fa-facebook" aria-hidden="true" />
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
	.card0:hover {
		background: url('/images/social/oleg_medvedev.png') left center no-repeat;
		background-size: 600px;
	}

	.card0:hover .fa {
		opacity: 1;
	}

	.fa {
		opacity: 0;
		transition: opacity 1s;
	}
	.icons {
		position: absolute;
		fill: #fff;
		color: #fff;
		height: 130px;
		top: 226px;
		width: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
</style>
