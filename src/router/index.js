import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/dashboard',
			component: () => import('../views/Dashboard.vue')
		},
		{
			path: '/motorista',
			component: () => import('../views/Motorista.vue')
		},
		{
			path: '/maps',
			component: () => import('../views/Maps.vue')
		},
	],
})

export default router