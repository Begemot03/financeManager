import '@/app/styles/main.css';
import 'primeicons/primeicons.css';
import App from '@/app/App.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { appRouter } from '@/app/router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

export const app = createApp(App)
	.use(PrimeVue, {
		theme: {
			preset: Aura,
		},
	})
	.use(createPinia())
	.use(appRouter);
