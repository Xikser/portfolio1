export const addListener = {
	methods: {
		addEvent(element, listenerType, functionName) {
			element.addEventListener(listenerType, functionName)
		}
	}
}

export const removeListener = {
	methods: {
		removeEvent(element, listenerType, functionName) {
			element.removeEventListener(listenerType, functionName)
		}
	}
}

export const preventScroll = {
	methods: {
		preventScroll(element) {
			element.style.overflowY = 'hidden'
		}
	}
}

export const allowScroll = {
	methods: {
		allowScroll(element) {
			element.style.overflowY = 'auto'
			element.style.overflowX = 'hidden'
		}
	}
}

export const navVisibility = {
	data() {
		return {
			navIsVisible: false
		}
	},
	methods: {
		toggleNavVisibility() {
			this.navIsVisible = !this.navIsVisible
		}
	},
}

export const prepareRouterLinks = {
	created() {
		this.$router.options.routes.forEach(route => {
			this.globalRouterLinks.push({
				name: route.name,
				path: route.path,
			})
		})
	},
	data() {
		return {
			globalRouterLinks: [],
		}
	},
}

export const handleWith = {
	mounted() {
		this.handleWidth()
		window.scrollTo(0, 1)
	},
	data() {
		return {
			mobile: false,
		}
	},
	methods: {
		handleWidth() {
			let width = window.innerWidth
			this.mobile = width <= 980;
		}
	}
}

export const footerVisibility = {
	mixins: [preventScroll, allowScroll],
	mounted() {
		this.hideFooter()
		this.preventScroll(document.body)

		this.$nextTick(() => {
			setTimeout(() => {
				this.allowScroll(document.body)
				window.scrollTo(0, 1)
			}, 200)
		}).then(() => {
			window.addEventListener('scroll', this.handleScroll)
		} )
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			const scroll = window.pageYOffset

			if (scroll >= 50) {
				this.showFooterComp()
			} else
				this.hideFooter()
		},

		hideFooter() {
			const footer = document.querySelector('footer')
			footer.style.display = 'none'
		},

		showFooterComp() {
			const footer = document.querySelector('footer')
			footer.style.display = 'flex'
		},
	}
}