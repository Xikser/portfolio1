<template>
	<Header></Header>
	<main class="main">
		<About></About>
		<Services></Services>
	</main>
</template>

<script>
import Header from './Header/Header'
import Services from "./Services/Services";
import About from "./About/About";

export default {
	name: 'Main',
	components: {About, Services, Header,}
}
</script>