<template>
	<section class="viewer">
		<i class="fas fa-times" @click="$emit('offViewer', '')"></i>

		<img class="viewer__image" :src="require(`@/assets/images/projects/design/${this.projectID}.jpg`)" alt="">
	</section>
</template>

<script>
import {preventScroll, allowScroll} from "@/mixins/mixins";

export default {
	mixins: [preventScroll, allowScroll],
	props: {
		item: Object,
		projectID: String,
	},
	data () {
		return {
			project: null,
		}
	},
	mounted() {
		this.preventScroll(document.body)
		this.project = this.item.children
	},
	beforeUnmount() {
		this.allowScroll(document.body)
	},
	methods: {}
}
</script>

<style lang="sass">
@import './src/assets/sass/variables'
@import 'styles/style'
</style>