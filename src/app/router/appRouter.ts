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
			path: routes.TRANSACTIONS_PAGE,
			name: 'Transactions',
			component: () => import('@/pages/transactions/ui/TransactionsPage.vue'),
		},
		{
			path: routes.EXPENSES_PAGE,
			name: 'Expenses',
			component: () => import('@/pages/expenses/ui/ExpensesPage.vue'),
		},
		{
			path: routes.INCOMES_PAGE,
			name: 'Incomes',
			component: () => import('@/pages/incomes/ui/IncomesPage.vue'),
		},
		{
			path: '/:pathMatch(.*)',
			name: 'Not Found',
			component: () => import('@/pages/not-found/ui/NotFound.vue'),
		},
	],
});
