export default {
	data() {
		return {
			type: 'website',
		}
	},
	methods: {
		handleClick(type) {
			this.$emit('clicked', type)
			this.type = type
		}
	}
}
