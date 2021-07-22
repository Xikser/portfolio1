export default {
	name: 'Footer',
	data() {
		return {
			tooltipText: 'Kopiuj',
			phone: '666 616 882',
		}
	},
	methods: {
		copy() {
			try {
				navigator.clipboard.writeText(this.phone)
				this.tooltipText = 'Skopiowano!'

				setTimeout(() => {
					this.tooltipText = 'Kopiuj'
				}, 1500)
			} catch(err) {
				this.tooltipText = 'Błąd kopiowania!'
				throw err
			}
		}
	}
}
