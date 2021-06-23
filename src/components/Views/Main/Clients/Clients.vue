<template functional>
	<section class="clients" >

		<h2 class="short" data-anim='draw-left'>Zaufali mi</h2>
		<div class="clients__placeholder1" data-anim='draw-bottom'></div>

		<div class="clients__content" data-anim='draw-bottom'>
			<div
					v-for="(item, index) in items"
					:key="index"
					class="clients__tile"
					data-aos="fade-right"
			>
				<img :src="item.src" :alt="item.alt">

				<h3 v-if="item.name"> {{ item.name }}</h3>
			</div>
		</div>

		<div class="clients__placeholder2" data-anim='draw-right'></div>
	</section>
</template>

<script>
import photos from './lib'

export default {
	data() {
		return {
			items: photos,
		}
	}
}
</script>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>
