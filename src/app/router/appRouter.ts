import { routes } from '@/shared/config';
import { createRouter, createWebHistory } from 'vue-router';

export const appRouter = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: routes.DASHBOARD_PAGE,
			name: 'Dashboard',
			component: () => import('@/pages/dashboard/ui/DashboardPage.vue'),
		},
		{
			path: routes.OPERATIONS_PAGE,
			name: 'Operation',
			component: () => import("@/pages/operations/ui/OperationsPage.vue"),
		},
		{
			path: '/:pathMatch(.*)',
			name: 'Not Found',
			component: () => import('@/pages/not-found/ui/NotFound.vue'),
		},
	],
});
