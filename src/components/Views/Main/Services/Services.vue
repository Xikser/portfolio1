<template functional>
	<section class="services" id="services" data-anim='draw-right'>

		<div class="placeholder-1"></div>

		<h2 class="short" data-anim='draw-left'>Moje usługi</h2>

		<div class="services__content">

			<div
					class="services__tile"
					v-for="(item, index) in items"
					:key="index"
			>
				<div class="services__tile-heading">
					<i :class="item.icon"></i>
					<h3>{{ item.header }}</h3>
				</div>

				<div class="services__tile-content">
					<p>
						{{ item.text }}
					</p>
				</div>
			</div>

		</div>

	</section>
</template>

<script>
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
</script>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>
