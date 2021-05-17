<template>
	<ProjectItem>
		<template #image>
			<img src="../../../../../assets/images/projects/login2.png" alt="">
		</template>

		<template #link>
			<a href="" target="_blank">Sprawdź online</a>
		</template>

		<template #title>
			<h3>
				Panel logowania/rejestracji
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