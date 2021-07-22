<template functional>
	<footer class="footer" id="contact" data-anim='draw-left'>
		<div class="footer__placeholder1" data-anim='draw-bottom'></div>

		<div class="footer__content" data-anim='draw-right'>

			<div class="footer__box">
				<h2>Masz
					<span>
						pytanie?
					</span>
				</h2>

				<p>
					Skontaktuj się ze mną!
				</p>
			</div>


			<div class="footer__tile-container">

				<div class="footer__tile">
					<a href="https://github.com/Xikser" target="_blank">
						<i class="fab fa-github"></i>
					</a>

					<span class="footer__tile-span">
						github.com/Xikser
					</span>
				</div>

				<div class="footer__tile phone" @click="copy">
					<a>
						<i class="fas fa-phone"></i>
					</a>

					<span class="footer__tile-span phone-span">
						{{ phone }}
					</span>

					<span class="copy__text">{{ tooltipText }}</span>
				</div>

				<div class="footer__tile">
					<a href="mailto:daniel.wyskup@gmail.com" target="_blank">
						<i class="fas fa-envelope"></i>
					</a>

					<span class="footer__tile-span">
						daniel.wyskup@gmail.com
					</span>
				</div>

			</div>

			<div class="footer__brief">
				<a>Lub wypełnij brief ONLINE!</a>

				<div class="tooltip">
					<span>Chwilowo niedostępne!</span>
				</div>
			</div>
		</div>

		<h3>Wszelkie prawa zastrzeżone &copy | 2021</h3>
	</footer>
</template>

<script src="./component.js"></script>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>
