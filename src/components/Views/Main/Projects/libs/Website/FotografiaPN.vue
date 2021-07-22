<template>
	<ProjectItem>
		<template #image>
			<img src="../../../../../../assets/images/projects/website/fotopn.png" alt="">
		</template>

		<template #link>
			<a class="projects__link" href="" target="_blank">Podgląd projektu</a>
		</template>

		<template #title>
			<h3>
				Fotografia Patrycja Nizioł
			</h3>
		</template>
	</ProjectItem>
</template>
<script>
import ProjectItem from "../../ProjectItem/ProjectItem";
export default {
	components: {ProjectItem}
}
</script>
