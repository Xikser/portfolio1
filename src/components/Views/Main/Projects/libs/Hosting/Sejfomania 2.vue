<template>
	<ProjectItem>
		<template #image>
			<h2>Sejfomania.eu</h2>
		</template>

		<template #link>

		</template>

		<template #title>
			<ul class="hosting__list">
				<li class="hosting__list-item">
					<p class="hosting__item">Opieka nad serwerami i domeną</p>
				</li>
				<li class="hosting__list-item">
					<p class="hosting__item">Konfiguracja serwerów</p>
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