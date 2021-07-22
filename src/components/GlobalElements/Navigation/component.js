import {handleWidth, prepareRouterLinks} from '@/mixins/mixins'

export default {
	name: 'Navbar',
	mixins: [prepareRouterLinks, handleWidth],
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
			const currentWidth = window.innerWidth
			const navbar = document.querySelector('.navbar')

			if (currentHeight > 100)
				if (currentWidth >= 1850) navbar.classList.add('scrolled')
					else navbar.classList.remove('scrolled')
			else {
				navbar.classList.remove('transformed')
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
		},

		emitEvent() {
			this.$emit('clicked')
		},

	}
}
