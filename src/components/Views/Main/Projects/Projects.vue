<template functional>
	<section class="projects" id="projects">

		<h2 class="short">Projekty</h2>

		<nav class="projects__nav">
			<ul class="projects__list">
				<li class="projects__list-item">
					<Button
							buttonStyle="secondary"
							buttonSize="normal"
							buttonText="Wszystko"
					></Button>
				</li>
				<li class="projects__list-item">
					<Button
							buttonStyle="secondary"
							buttonSize="normal"
							buttonText="Komercyjne"
					></Button>
				</li>
				<li class="projects__list-item">
					<Button
							buttonStyle="secondary"
							buttonSize="normal"
							buttonText="Moje"
					></Button>
				</li>
			</ul>
		</nav>

		<div class="projects__content">

			<div class="projects__tile">
				<img src="../../../../assets/images/projects/kancelaria.png" alt="">
				<a href="" target="_blank">Sprawdź online</a>

				<div class="projects__desc">
					<h3>
						Kancelaria Zawacka-Rdzen
					</h3>
				</div>
			</div>

			<div class="projects__tile">
				<img src="../../../../assets/images/projects/drewno.png" alt="">
				<a href="" target="_blank">Sprawdź online</a>

				<div class="projects__desc">
					<h3>
						Stolarstwo PiekneDrewno - Daniel Kuczynski
					</h3>
				</div>
			</div>

			<div class="projects__tile">
				<img src="../../../../assets/images/projects/fotopn.png" alt="">
				<a href="" target="_blank">Sprawdź online</a>

				<div class="projects__desc">
					<h3>
						Fotografia Patrycja Nizioł
					</h3>
				</div>
			</div>

			<div class="projects__tile">
				<img src="../../../../assets/images/projects/gallery.png" alt="">
				<a href="" target="_blank">Sprawdź online</a>

				<div class="projects__desc">
					<h3>
						Galeria zdjęć
					</h3>
				</div>
			</div>

			<div class="projects__tile">
				<img src="../../../../assets/images/projects/extemo.png" alt="">
				<a href="" target="_blank">Sprawdź online</a>

				<div class="projects__desc">
					<h3>
						Przykładowy template strony
					</h3>
				</div>
			</div>

			<div class="projects__tile">
				<img src="../../../../assets/images/projects/login1.png" alt="">
				<a href="" target="_blank">Sprawdź online</a>

				<div class="projects__desc">
					<h3>
						Panel logowania/rejestracji
					</h3>
				</div>
			</div>

			<div class="projects__tile">
				<img src="../../../../assets/images/projects/login2.png" alt="">
				<a href="" target="_blank">Sprawdź online</a>

				<div class="projects__desc">
					<h3>
						Panel logowania/rejestracji
					</h3>
				</div>
			</div>
		</div>

		<div class="projects__placeholder1"></div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		}
	},
	methods: {}
}
</script>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>