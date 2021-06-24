<template>
	<Header></Header>
	<main class="main">
		<About></About>
		<Services></Services>
		<SubService></SubService>
		<ImagePlaceholder></ImagePlaceholder>
		<Projects></Projects>
		<Clients></Clients>
	</main>
</template>

<script>
import Header from './Header/Header'
import Services from "./Services/Services";
import About from "./About/About";
import SubService from './SubService/SubService'
import ImagePlaceholder from './ImagePlaceholder/ImagePlaceholder'
import Clients from "./Clients/Clients";
import Projects from "./Projects/ProjectApp";

export default {
	name: 'Main',
	components: {Projects, Clients, About, Services, ImagePlaceholder, Header, SubService}
}
</script>
