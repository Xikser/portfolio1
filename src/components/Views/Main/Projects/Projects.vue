<template functional>
	<section class="projects" id="projects">

		<h2 class="short">Projekty</h2>

		<div class="projects__content">
			<ZawackaRdzen></ZawackaRdzen>
			<PiekneDrewno></PiekneDrewno>
			<FotografiaPN></FotografiaPN>
			<Extemo></Extemo>
			<Login1></Login1>
			<Login2></Login2>
		</div>

		<div class="projects__placeholder1"></div>
	</section>
</template>

<script>
import ProjectItem from './ProjectItem'
import ZawackaRdzen from "./libs/ZawackaRdzen";
import PiekneDrewno from './libs/PiekneDrewno'
import FotografiaPN from './libs/FotografiaPN'
import Extemo from './libs/Extemo'
import Login1 from './libs/Login1'
import Login2 from './libs/Login2'

export default {
	components: {
		ProjectItem,
		ZawackaRdzen,
		PiekneDrewno,
		FotografiaPN,
		Extemo,
		Login1,
		Login2,
	},
}
</script>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'style.sass'
</style>