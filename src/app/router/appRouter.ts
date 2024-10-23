import { DefaultLayout } from '@/shared/ui/layouts';
import { createRouter, createWebHistory } from 'vue-router';

export const appRouter = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/pages/home/ui/HomePage.vue'),
			meta: {
				layout: DefaultLayout,
			},
		},
		{
			path: '/:pathMatch(.*)',
			name: 'Not Found',
			component: () => import('@/pages/not-found/ui/NotFound.vue'),
			meta: {
				layout: DefaultLayout,
			},
		},
	],
});
