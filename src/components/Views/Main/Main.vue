<template>
	<Header></Header>
	<main class="main">
		<About></About>
		<Services></Services>
		<Projects></Projects>
		<Pricing></Pricing>
		<Clients></Clients>
		<Wrapper></Wrapper>
	</main>
</template>

<script>
import Header from './Header/Header'
import Services from "./Services/Services";
import About from "./About/About";
import Pricing from './Pricing/Pricing'
import Clients from "./Clients/Clients";
import Projects from "./Projects/Projects";
import Wrapper from "./Wrapper/Wrapper";

export default {
	name: 'Main',
	components: {Wrapper, Projects, Clients, About, Services, Header, Pricing}
}
</script>