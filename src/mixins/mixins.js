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
				hash: route.hash,
			})
		})
	},
	computed: {
		navItems() {
			return this.globalRouterLinks.slice(0, 5)
		},
	},
	data() {
		return {
			globalRouterLinks: [],
		}
	},
}

export const handleWidth = {
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
			return this.mobile
		}
	}
}
