<template functional>
	<section class="projects" data-anim='draw-services'>

		<h2 class="short" id="projects">Projekty</h2>

		<ProjectNavbar @clicked="changeProjectType"></ProjectNavbar>

		<div class="projects__content">

			<transition-group name="project">

				<div key="1" class="projects__box projects__website" v-show="projectType === 'website'">
					<ZawackaRdzen></ZawackaRdzen>
					<PiekneDrewno></PiekneDrewno>
					<FotografiaPN></FotografiaPN>
					<Extemo></Extemo>
					<Login1></Login1>
					<Login2></Login2>
				</div>

				<div key="2" class="projects__box projects__design" v-show="projectType === 'design'">
					<Telebarek @clicked="handleEvent"></Telebarek>
				</div>

				<div key="3" class="projects__box projects__hosting" v-show="projectType === 'hosting'">
					<Gtarena></Gtarena>
					<Lasergame></Lasergame>
					<Sejfomania></Sejfomania>
					<Konsmetalsklep></Konsmetalsklep>
				</div>

			</transition-group>

		</div>

		<transition name="viewer">
			<ProjectViewer
					v-if="status" :item="item"
					:projectID="projectID"
					@offViewer="status = !status"
			>
			</ProjectViewer>
		</transition>
	</section>
</template>

<script>
import ProjectItem from './ProjectItem'
import ProjectNavbar from './ProjectNavbar'
import ProjectViewer from "@/components/Views/Main/Projects/Viewer/ProjectViewer";

//websites
import ZawackaRdzen from "./libs/Website/ZawackaRdzen";
import PiekneDrewno from './libs/Website/PiekneDrewno'
import FotografiaPN from './libs/Website/FotografiaPN'
import Extemo from './libs/Website/Extemo'
import Login1 from './libs/Website/Login1'
import Login2 from './libs/Website/Login2'

//design
import Telebarek from './libs/Design/Telebarek'

//hosting
import Gtarena from "@/components/Views/Main/Projects/libs/Hosting/Gtarena";
import Lasergame from "@/components/Views/Main/Projects/libs/Hosting/Lasergame";
import Sejfomania from "@/components/Views/Main/Projects/libs/Hosting/Sejfomania";
import Konsmetalsklep from "@/components/Views/Main/Projects/libs/Hosting/Konsmetalsklep";


export default {
	components: {
		ProjectItem,
		ProjectNavbar,
		ProjectViewer,
		ZawackaRdzen,
		PiekneDrewno,
		FotografiaPN,
		Extemo,
		Login1,
		Login2,
		Telebarek,
		Gtarena,
		Lasergame,
		Sejfomania,
		Konsmetalsklep,
	},
	data() {
		return {
			item: Object,
			projectID: '',
			projectType: 'website',
			status: false,
		}
	},
	methods: {
		handleEvent(item, projectID) {
			this.status = !this.status
			this.projectID = projectID
			this.item = item
		},
		changeProjectType(type) {
			this.projectType = type
		}
	},
}
</script>

<style lang="sass">
.project-enter-active, .project-leave-active
	transition: all .3s ease
	opacity: 0
	position: absolute !important

.project-enter, .project-leave-to
	opacity: 0

.project-enter-to
	transition-delay: .3s
	opacity: 1

//viewer
.viewer-enter-active, .viewer-leave-active
	transition: all .5s ease
	opacity: 0

.viewer-enter, .viewer-leave-to
	opacity: 0

.viewer-enter-to
	opacity: 1
</style>

<style lang="sass" scoped>
@import './src/assets/sass/variables'
@import 'styles/style'
</style>