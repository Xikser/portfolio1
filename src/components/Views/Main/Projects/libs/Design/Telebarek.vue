<template>
	<ProjectItem>
		<template #image>
			<img class="projects__image" src="../../../../../../assets/images/projects/design/telebarek.png" alt="">
		</template>

		<template #link>
			<button @click="handleClick" class="projects__link">Podgląd projektu</button>
		</template>
	</ProjectItem>
</template>
<script>
import ProjectItem from "../../ProjectItem";

export default {
	components: {ProjectItem},
	methods: {
		handleClick(elem) {
			const item = elem.target.offsetParent
			this.$emit('clicked', item, 'telebarek')
		}
	}
}
</script>