<template>
	<button
			:buttonStyle="buttonStyle"
			:size="buttonSize"
			:type="buttonType"
	>
		<span v-if="additionalElement" :data-text=" buttonText "></span>
		<span v-else> {{ buttonText }}</span>
	</button>
</template>

<script>
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
</script>

<style lang="sass">
@import '../../../assets/sass/variables'
@import './style'

</style>

<style lang="sass" scoped>
@media screen and (min-width: 360px) and (max-width: 980px)

</style>