<template>
	<Navbar></Navbar>
	<Main></Main>
	<Footer></Footer>
</template>
<script>
import Main from "./components/Views/Main/Main";
import {animation} from './animations/main'
import {handleWidth} from "@/mixins/mixins";

export default {
	name: 'App',
	components: {Main},
	mounted() {
		AOS.init()
		animation.init()
		window.addEventListener('resize', () => {
			let w = window.innerWidth
			if (w < 980) {
				this.handleWidth()
			}
		}, false)
	},
	mixins: [handleWidth],
	data() {
		return {
			Component: 'Main',
		}
	},
}
</script>
<style lang="sass">
@import './assets/sass/variables'
@import './assets/sass/animations'

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
@media (min-width: 1200px) and (max-width: 1399.98px)
	.main
		width: 100%
		padding: 0 30px

@media (min-width: 981px) and (max-width: 1199.98px)

	.main
		width: 100%
		padding: 0 30px

@media screen and (min-width: 320px) and (max-width: 980px)
	body
		overflow: scroll

	.main
		width: 100%
		padding: 0 10px

	.top
		display: none

a
	text-decoration: none
	color: $color--dark

ol, ul, li
	list-style: none

</style>
