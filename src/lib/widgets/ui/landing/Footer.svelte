<script>
	import { links, socialLinks } from '$shared';
</script>

<footer class="section section--pink">
	<div class="w-container container">
		<div class="layout-grid footer-section">
			<div class="layout-grid footer-section__info">
				<div class="footer-section__heading-padding">
					<h1 class="footer-section__heading font-graffity text-white">
						Discover graffiti culture through a boardgame!
					</h1>
				</div>
				<!-- <div class="w-form">
					<form
						method="post"
						action="/contact#contact_form"
						id="contact_form"
						accept-charset="UTF-8"
						class="footer-section__form"
					>
						<input type="hidden" name="form_type" value="customer" /><input
							type="hidden"
							name="utf8"
							value="✓"
						/><input type="hidden" name="contact[tags]" value="newsletter" />
						<div class="footer-section__text-field-grid">
							<input
								type="text"
								class="footer-section__text-field w-input"
								maxlength="256"
								name="contact[note][first_name_]"
								data-name="First Name 2"
								placeholder="First Name"
								id="First-Name-2"
								required=""
							/><input
								type="text"
								class="footer-section__text-field w-input"
								maxlength="256"
								name="contact[note][last_name_]"
								data-name="Last Name 2"
								placeholder="Last Name"
								id="Last-Name-2"
								required=""
							/>
						</div>
						<input
							type="email"
							class="footer-section__text-field w-input"
							maxlength="256"
							name="contact[email]"
							data-name="Email 2"
							placeholder="Business Email"
							id="email-2"
							required=""
						/><label checkbox="accepts_marketing" class="w-checkbox"
							><input
								type="checkbox"
								id="checkbox"
								name="contact[note][checkbox]"
								data-name="Checkbox"
								class="w-checkbox-input"
							/><span
								class="capitalise text-md text-size-14px text-colour-white w-form-label"
								for="checkbox">Get exclusive offers, news, and added flair into your inbox!</span
							></label
						><input
							type="submit"
							value="Join the community"
							data-wait="Please wait..."
							class="round-button w-button"
						/><script>
							(function () {
								window.Webflow = window.Webflow || [];
								var success = 'false' == 'true';

								var errors = '' == 'ErrorsDrop';

								var form = document.currentScript.closest('.w-form');

								if (success) {
									form.classList.add('form-posted-successfully');
								}

								if (errors) {
									form.classList.add('form-failed');
								}
								if (success || errors) {
									if (form.closest('[data-w-tab]')) {
										window.Webflow.push(function () {
											var tabId = form.closest('[data-w-tab]').id;
											var tabLink = document.querySelector('a[href="#' + tabId + '"]');
											if (tabLink) {
												tabLink.click();
											}
										});
									}
									window.Webflow.push(function () {
										var count = form.offsetTop - window.pageYOffset - 30; // xx = any extra distance from top ex. 60
										window.scrollBy({ top: count, left: 0, behavior: 'smooth' });
									});
									setTimeout(function () {
										var count = form.offsetTop - window.pageYOffset - 30; // xx = any extra distance from top ex. 60
										window.scrollBy({ top: count, left: 0, behavior: 'smooth' });
									}, 300);
								}
							})();
						</script>
					</form>
					<div class="w-form-done">
						<div>Thank you! Your submission has been received!</div>
					</div>
					<div class="w-form-fail">
						<div />
					</div>
				</div> -->
			</div>
			<div id="w-node-_254794bc-da3b-3759-b40e-ad44158c5c42-7f558c4a" class="layout-grid sitemap">
				<div class="div-block-5">
					<div class="capitalise text-md font-bold text-white">Get Social</div>
				</div>
				{#each socialLinks as { title, link }}
					<a
						href={link}
						target="_blank"
						class="capitalise mt-2 text-md font-bold text-white hover:text-black">{title}</a
					>
				{/each}
			</div>
			<div class="layout-grid sitemap">
				<div class="div-block-5">
					<div class="capitalise text-md font-bold text-white">Get About</div>
				</div>
				{#each links as { link, title }}
					<a href={link} class="mt-2 capitalise text-md font-bold text-white hover:text-black">{title}</a
					>
				{/each}
				<a href="/app" class="capitalise text-md mt-2 font-bold text-white hover:text-black">APP</a
				>
			</div>

			<div id="footer_policies" class="layout-grid policies w-full">
				<a href="#" class="capitalise text-md font-bold text-white hover:text-black"
					>Terms of Service</a
				>
				<a href="#" class="capitalise text-md font-bold text-white hover:text-black"
					>Privacy Policy</a
				>
				<a href="#" class="capitalise text-md font-bold text-white hover:text-black"
					>Shipping Policy</a
				>
				<a href="#" class="capitalise text-md font-bold text-white hover:text-black"
					>REfund Policy</a
				>

				<!-- <a
					href="https://oleg-darkdev.vercel.app/"
					target="_blank"
					class="capitalise ml-60 text-md font-bold text-white hover:text-black"
					>Development by oleg_DarkDev</a
				> -->
			</div>
		</div>
		<img
			src="images/logo_footer.svg"
			loading="lazy"
			sizes="(max-width: 479px) 281.976806640625px, (max-width: 767px) 59vw, (max-width: 1919px) 58vw, 576.7708740234375px"
			alt=""
			class="footer-logo scale-150 pt-20"
		/>
	</div>
</footer>

<style>
	#footer_oleg-darkdev {
		grid-area: 2 / 3 / 3 / 4;
	}

	#footer_policies {
		grid-area: 2 / 1 / 3 / 2;
	}
	.font-bold {
		transition: color 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
	.footer-logo {
		z-index: 0;
		width: 750px;
		max-width: none;
		position: absolute;
		top: 10px;
		right: -51px;
		transform: rotate(-20deg);
	}

	.policies {
		grid-template-rows: auto;
		grid-template-columns: auto;
		grid-auto-columns: auto;
		grid-auto-flow: column;
	}

	@media screen and (max-width: 991px) {
		.footer-logo {
			width: 300px;
			top: -26px;
		}
		#footer_oleg-darkdev {
			grid-area: span 1 / span 1 / span 1 / span 1;
		}

		#footer_policies {
			grid-area: 3 / 1 / 4 / 3;
		}
	}
	@media screen and (max-width: 767px) {
		.footer-logo {
			width: 220px;
		}
		#footer_oleg-darkdev {
			grid-area: span 1 / span 1 / span 1 / span 1;
		}
		.policies {
			grid-template-rows: auto auto;
			grid-template-columns: auto 1fr;
		}
		#footer_policies {
			grid-area: span 1 / span 1 / span 1 / span 1;
		}
	}

	@media screen and (max-width: 479px) {
		.footer-logo {
			display: block;
			top: 606px;
		}
	}
</style>
