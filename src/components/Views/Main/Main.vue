<template>
	<Header></Header>
	<main class="main">
		<About></About>
		<Services></Services>
		<Pricing></Pricing>
		<Projects></Projects>
		<Clients></Clients>
	</main>
</template>

<script>
import Header from './Header/Header'
import Services from "./Services/Services";
import About from "./About/About";
import Pricing from './Pricing/Pricing'
import Clients from "./Clients/Clients";
import Projects from "./Projects/Projects";

export default {
	name: 'Main',
	components: {Projects, Clients, About, Services, Header, Pricing}
}
</script>