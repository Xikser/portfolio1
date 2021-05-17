<template>
	<nav class="navbar">

		<div class="mobile__nav-icons">
			<i
					class="fas fa-bars fw"
					:class="{hiddenIcon: isVisible}"
					@click="showNavbar"
			>
			</i>
			<i
					class="fas fa-times fw"
					:class="{visibleIcon: isVisible}"
					@click="showNavbar"
			>
			</i>
		</div>

		<div class="desktop__icons">
			<div class="bar__icon" @click="transformNavbar"></div>
			<div class="times__icon" @click="transformNavbar"></div>
		</div>

		<ul class="navbar__list">
			<li
					class="navbar__item"
					v-for="link in navItems"
					:key="link.id"
			>
				<router-link
						class="navbar__link"
						:text="link.name"
						:after-text="link.name"
						:to="link.hash"
						@click.capture="hideNavbar"
				>
					{{ link.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import {prepareRouterLinks} from '@/mixins/mixins'

export default {
	name: 'Navbar',
	mixins: [prepareRouterLinks],
	data() {
		return {
			isVisible: false,
			transformed: false,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		transformNavbar() {
			const navbar = document.querySelector('.navbar')
			this.transformed = !this.transformed

			if(this.transformed)
				navbar.classList.add('transformed')
			else
				navbar.classList.remove('transformed')
		},

		handleScroll() {
			const currentHeight = window.pageYOffset
			const navbar = document.querySelector('.navbar')

			if (currentHeight > 700)
				navbar.classList.add('scrolled')
			else {
				navbar.classList.remove('transformed')
				this.transformed = false
				navbar.classList.remove('scrolled')
			}
		},

		hideNavbar() {
			const navbar = document.querySelector('.navbar')
			if (navbar.classList.contains('mobile-visible')) {
				navbar.classList.remove('mobile-visible')
				this.isVisible = !this.isVisible
			}
		},

		showNavbar() {
			const navbar = document.querySelector('.navbar')
			this.isVisible = !this.isVisible

			if (this.isVisible === true)
				navbar.classList.add('mobile-visible')
			else
				navbar.classList.remove('mobile-visible')
		},

		emitEvent() {
			this.$emit('clicked')
		},

	}
}
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'
@import './style'
</style>