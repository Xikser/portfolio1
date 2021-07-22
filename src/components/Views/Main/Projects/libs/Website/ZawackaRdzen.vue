<template>
	<ProjectItem>
		<template #image>
			<img class="projects__image" src="../../../../../../assets/images/projects/website/kancelaria.png" alt="">
		</template>

		<template #link>
			<a href="https://zawacka-rdzen.pl/" target="_blank" class="projects__link">Podgląd projektu</a>
		</template>

		<template #title>
			<h3>
				Kancelaria Zawacka-Rdzen
			</h3>
		</template>
	</ProjectItem>
</template>
<script>
import ProjectItem from "../../ProjectItem/ProjectItem";
export default {
	components: {ProjectItem},
	methods: {
		handleClick(elem) {
			const item = elem.target.offsetParent

			console.log(item)
		}
	}
}
</script>
