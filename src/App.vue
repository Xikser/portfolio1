<template>
	<router-view v-slot="{ Component }">
		<main>
			<Navbar></Navbar>
			<transition
					name="view"
					mode="out-in"
					@before-leave=""
			>
				<component :is="Component"/>
			</transition>
		</main>
	</router-view>

</template>
<script>

export default {
	name: 'App',
	data() {
		return {
			Component: 'Main',
		}
	},
	mounted() {}
}
</script>
<style lang="sass">
@import './assets/sass/variables'

html
	font-size: 10px
	scroll-behavior: smooth

*, *::before, *::after
	margin: 0
	box-sizing: border-box

body
	overflow-x: hidden
	background: white
	width: 100%
	color: $color--dark
	font-family: $font--default

main
	position: relative
	width: 100%
	margin: auto

.main
	width: 144em

i
	color: $color--dark

@media screen and (min-width: 360px) and (max-width: 980px)
	.main
		width: 100vw

	.top
		display: none

a
	text-decoration: none
	color: $color--dark

ol, ul, li
	list-style: none

</style>
