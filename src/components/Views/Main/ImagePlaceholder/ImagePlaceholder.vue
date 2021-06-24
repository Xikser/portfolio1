<template>
	<section class="image-placeholder">
		<div class="image-placeholder__image">
			<div class="image-placeholder__horizontal">
				<i class="line-horizontal" data-anim='draw-left'></i>
				<i class="line-horizontal" data-anim='draw-right'></i>
			</div>

			<div class="image-placeholder__vertical">
				<i class="line-vertical" data-anim='draw-top'></i>
				<i class="line-vertical" data-anim='draw-bottom'></i>
				<i class="line-vertical" data-anim='draw-top'></i>
				<i class="line-vertical" data-anim='draw-bottom'></i>
				<i class="line-vertical" data-anim='draw-top'></i>
				<i class="line-vertical" data-anim='draw-bottom'></i>
			</div>
		</div>
	</section>
</template>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>
