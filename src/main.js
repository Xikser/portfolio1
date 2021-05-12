import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Main from "@/components/Views/Main/Main";
import About from "@/components/Views/About/About";
import Button from "@/components/GlobalElements/Buttons/Button";
import Navbar from "@/components/GlobalElements/Navigation/Navbar";
import Footer from '@/components/GlobalElements/Footer/Footer'

createApp(App)
    .component('Main', Main)
    .component('About', About)
    .component('Navbar', Navbar)
    .component('Button', Button)
    .component('Footer', Footer)
	.use(router)
	.mount('body')

