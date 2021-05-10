<template functional>
	<header class="header">
		<div class="header__content">
			<div class="header__motto">
				<h1>Daniel Wyskup</h1>
				<h2>Freelance Web Developer</h2>
				<h2>Potrzebujesz strony? Skontaktuj się ze mną!</h2>

				<Button
					buttonStyle="primary"
					buttonSize="normal"
					buttonText="Start"
				></Button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>

