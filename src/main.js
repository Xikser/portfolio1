import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Main from "@/components/Views/Main/Main";
import Button from "@/components/GlobalElements/Buttons/Button";
import Navbar from "@/components/GlobalElements/Navigation/Navbar";
import Footer from '@/components/GlobalElements/Footer/Footer'

const app = createApp(App)

app.component('Main', Main)
app.component('Navbar', Navbar)
app.component('Button', Button)
app.component('Footer', Footer)
app.use(router)
app.mount('body')
