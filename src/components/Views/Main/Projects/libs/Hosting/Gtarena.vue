<template>
	<ProjectItem>
		<template #image>
			<img class="projects__image" src="../../../../../../assets/images/projects/hosting/gt.png" alt="">
		</template>

		<template #link>

		</template>

		<template #title>
			<ul class="hosting__list">
				<li class="hosting__list-item">
					<p class="hosting__item">Opieka nad serwerami i domeną</p>
				</li>
				<li class="hosting__list-item">
					<p class="hosting__item">Migracja usług między serwerami</p>
				</li>
				<li class="hosting__list-item">
					<p class="hosting__item">Konfiguracja serwerów</p>
				</li>
				<li class="hosting__list-item">
					<p class="hosting__item">Konfiguracja kont email</p>
				</li>
			</ul>
		</template>
	</ProjectItem>
</template>
<script>
import ProjectItem from "../../ProjectItem";

export default {
	components: {ProjectItem}
}
</script>