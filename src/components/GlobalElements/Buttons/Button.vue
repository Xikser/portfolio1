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

<script src="./component.js"></script>

<style lang="sass">
@import '../../../assets/sass/variables'
@import './style'
</style>

<style lang="sass" scoped>
@media screen and (min-width: 360px) and (max-width: 980px)

</style>
