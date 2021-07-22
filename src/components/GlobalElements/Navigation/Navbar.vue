<template>
	<nav class="navbar">

		<div class="mobile__nav-icons">
			<i
					class="fas fa-bars fw"
					:class="{hiddenIcon: isVisible}"
					@click="showNavbar"
			>
			</i>
			<i
					class="fas fa-times fw"
					:class="{visibleIcon: isVisible}"
					@click="hideNavbar"
			>
			</i>
		</div>

		<div class="desktop__icons" @click="transformNavbar">
			<div class="bar__icon"></div>
			<div class="times__icon"></div>
		</div>

		<ul class="navbar__list">
			<li
					class="navbar__item"
					v-for="link in navItems"
					:key="link.id"
			>
				<router-link
						class="navbar__link"
						:text="link.name"
						:after-text="link.name"
						:to="link.hash"
						@click.capture="hideNavbar"
				>
					{{ link.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script src="./component.js"></script>

<style lang="sass" scoped>
@import '../../../assets/sass/variables'
@import './style'
</style>
