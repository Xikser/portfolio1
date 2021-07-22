export default {
	name: 'Button',
	props: {
		listName: {
			type: String,
		},
		icon: {
			type: Boolean,
		},
		buttonText: {
			type: String,
			required: true,
		},
		buttonSize: {
			type: String,
			required: true,
		},
		buttonStyle: {
			type: String,
			required: true,
		},
		buttonType: {
			type: String,
		},
		additionalElement: {
			type: Boolean,
		},
	},
	data() {
		return {
			isActive: false,
		}
	},
}
