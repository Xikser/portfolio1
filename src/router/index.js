import {createRouter, createWebHistory} from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Strona Główna',
		component: () => import('../components/Views/Main/Main')
	},
	{
		path: '/',
		name: 'O mnie',
		component: () => import('../components/Views/Main/Main')
	},
	{
		path: '/',
		name: 'Oferta',
		component: () => import('../components/Views/Main/Main')
	},
	{
	    path: '/',
	    name: 'Projekty',
	    component: () => import('../components/Views/Main/Main')
	  },
	{
		path: '/',
		name: 'Kontakt',
		component: () => import('../components/Views/Main/Main')
	},
]

const router = createRouter({
	history: createWebHistory(),
	mode: 'abstract',
	routes
})

export default router
