<template>
	<Header></Header>
	<main class="main">
		<About></About>
		<Services></Services>
		<SubService></SubService>
		<Projects></Projects>
		<Clients></Clients>
	</main>
</template>

<script>
import Header from './Header/Header'
import Services from "./Services/Services";
import About from "./About/About";
import SubService from './SubService/SubService'
import Clients from "./Clients/Clients";
import Projects from "./Projects/ProjectApp";

export default {
	name: 'Main',
	components: {Projects, Clients, About, Services, Header, SubService}
}
</script>
