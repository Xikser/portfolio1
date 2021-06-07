<template>
	<ProjectItem>
		<template #image>
			<img class="projects__image" src="../../../../../../assets/images/projects/telebarek.png" alt="">
		</template>

		<template #link>
			<a class="projects__link">Podgląd projektu</a>
		</template>
	</ProjectItem>
</template>
<script>
import ProjectItem from "../../ProjectItem";
export default {
	components: {ProjectItem}
}
</script>