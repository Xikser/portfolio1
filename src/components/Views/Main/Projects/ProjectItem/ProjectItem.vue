<template functional>
	<div class="projects__tile">
		<slot name="image"></slot>
		<slot name="link"></slot>

		<div class="projects__desc">
			<slot name="title"></slot>
		</div>
	</div>
</template>

<style lang="sass">
@import '../../../../../assets/sass/variables'
@import 'item-style'
@import '../styles/hosting'
</style>
