<template>
	<ProjectItem>
		<template #image>
			<img class="projects__image" src="../../../../../assets/images/projects/kancelaria.png" alt="">
		</template>

		<template #link>
			<a class="projects__link" href="" target="_blank">Podgląd projektu</a>
		</template>

		<template #title>
			<h3>
				Kancelaria Zawacka-Rdzen
			</h3>
		</template>
	</ProjectItem>
</template>
<script>
import ProjectItem from "../ProjectItem";
export default {
	components: {ProjectItem}
}
</script>