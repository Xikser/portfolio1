import items from './ServicesItem'

export default {
	data() {
		return {
			items: items,
		}
	},
	methods: {
		scrollTo() {
			window.scrollTo(0, 3450)
		}
	}
}
