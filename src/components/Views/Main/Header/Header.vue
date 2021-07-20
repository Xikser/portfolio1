<template functional>
	<header class="header" id="header">
		<div class="header__content">
			<div class="header__motto">
				<h1>Daniel Wyskup</h1>
				<h2>Web Developer</h2>
				<h2>Potrzebujesz strony internetowej lub bloga?
					<Button
						buttonStyle="default"
						buttonSize="normal"
						buttonText="Skontaktuj się ze mną!"
					>
					</Button>
				</h2>

				<Button
					buttonStyle="primary"
					buttonSize="normal"
					buttonText="Start"
					style="margin-top: 70px"
					:additionalElement="true"
					@click="scrollTo"
				></Button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	methods: {
		scrollTo() {
			window.scrollTo(0, 715)
		}
	}
}
</script>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>

