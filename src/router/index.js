import {createRouter, createWebHistory} from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Strona Główna',
		hash: '#header',
		component: () => import('../components/Views/Main/Main')
	},
	{
		path: '/',
		name: 'O mnie',
		hash: '#main-about',
		component: () => import('../components/Views/About/About')
	},
	{
		path: '/',
		name: 'Oferta',
		hash: '#services',
		component: () => import('../components/Views/Main/Main')
	},
	{
		path: '/',
		name: 'Projekty',
		hash: '#projects',
		component: () => import('../components/Views/Main/Main')
	},
	{
		path: '/',
		name: 'Kontakt',
		hash: '#contact',
		component: () => import('../components/Views/Main/Main')
	},
]

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    setTimeout(() => {
      const element = document.getElementById(to.hash.replace(/#/, ''))
      if (element && element.scrollIntoView) {
        element.scrollIntoView({block: 'end', behavior: 'smooth'})
      }
    }, 500)

    //NOTE: This doesn't work for Vue 3
    //return {selector: to.hash}

    //This does
    return {el: to.hash};
  }
  else if (savedPosition) {
    return savedPosition
  }
  return {top: 0}
}

const router = createRouter({
	scrollBehavior,
	history: createWebHistory(),
	mode: 'hash',
	routes
})


export default router
