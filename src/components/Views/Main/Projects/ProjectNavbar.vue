<template>
	<nav class="project__nav">
		<ul class="project__list">
			<li class="project__list-item">
				<Button
						buttonStyle="secondary"
						buttonSize="normal"
						buttonText="Strony internetowe"
						:class="{isActive : type === 'website'}"
						@click="handleClick('website')"
				></Button>
			</li>

			<li class="project__list-item">
				<Button
						buttonStyle="secondary"
						buttonSize="normal"
						buttonText="Web design"
						:class="{isActive : type === 'design'}"
						@click="handleClick('design')"
				></Button>
			</li>

			<li class="project__list-item">
				<Button
						buttonStyle="secondary"
						buttonSize="normal"
						buttonText="Usługi hostingowe"
						:class="{isActive : type === 'hosting'}"
						@click="handleClick( 'hosting')"
				></Button>
			</li>
		</ul>
	</nav>
</template>

<script>
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
</script>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'styles/style-nav'
</style>
