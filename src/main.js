import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import Main from "@/components/Views/Main/Main";
import Button from "@/components/GlobalElements/Buttons/Button";
import Navbar from "@/components/GlobalElements/Navigation/Navbar";

createApp(App)
    .component('Main', Main)
    .component('Navbar', Navbar)
    .component('Button', Button)
	.use(router)
	.mount('body')

