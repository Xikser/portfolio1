<template functional>
	<section id="main-about" class="main-about">

		<div class="main-about__content">

			<div class="main-about__heading">
				<h2>Krótko
					<span>
					o mnie
				</span>
				</h2>

				<p>Jestem
					<span>
						początkującym programistą frontendowym z Bolesławca. Dlaczego frontend? W technikum byłem liderem technicznym ligi e-sportowej, dla której napisałem swoją pierwszą stronę internetową. I tak to się zaczęło...
					</span>
				</p>

				<Button
						buttonStyle='primary'
						buttonSize="normal"
						buttonText="Więcej"
						:additionalElement="true"
				>
				</Button>

				<div
						class="main-about__heading--placeholder"
						data-aos="draw-about-placeholder2"
				></div>
				<div
						class="main-about__heading--placeholder3"
						data-aos="draw-about-placeholder3"
				></div>
			</div>

			<div class="placeholder-1" data-aos="draw-about-placeholder1"></div>
		</div>

	</section>
</template>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>