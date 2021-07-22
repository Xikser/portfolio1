<template functional>
	<section class="projects" data-anim='draw-right'>

		<h2 class="short" id="projects">Projekty</h2>

		<ProjectNavbar @clicked="changeProjectType"></ProjectNavbar>

		<div class="projects__content">

			<transition-group name="project">

				<div key="1" class="projects__box projects__website" v-show="projectType === 'website'">
					<ZawackaRdzen></ZawackaRdzen>
					<PiekneDrewno></PiekneDrewno>
					<FotografiaPN></FotografiaPN>
				</div>

				<div key="2" class="projects__box projects__design" v-show="projectType === 'design'">

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

<script src="./component.js"></script>

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
